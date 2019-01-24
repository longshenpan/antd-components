import React, { Fragment } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Icon,
  Radio,
  DatePicker,
  Checkbox,
  Select,
} from 'antd';
import propTypes from 'prop-types';
import AsyncWrapper from '../../Basic/PrivateComponents/AsyncWrapper/AsyncWrapper.jsx';
import CombinedSelector from '../../Basic/CombinedSelector';
import './CollapsibleFilter.less';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

// CombinedSelector 不满足需求，重新包装
// eslint-disable-next-line
const CombinedSelectorWrapper = ({ onChange, value, ...other }) => (
  <CombinedSelector
    {...other}
    onBlurHandle={onChange}
    handlerConfirmClick={onChange}
    initialSelectedDetail={value}
  />
);

/**
 * 查询条件筛选器用于数据查询时进行条件组合
 */
class CollapsibleFilter extends React.Component {
  static displayName = 'CollapsibleFilter 条件筛选器';

  state = {
    expand: true,
    ready: false,
  };
  handleReset = () => {
    const { onReset } = this.props;
    this.props.form.resetFields();
    if (onReset) {
      onReset();
    }
  };
  handleSubmit = () => {
    const { onChange } = this.props;
    onChange(this.props.form.getFieldsValue());
  };

  handleToggle = () => this.setState({ expand: !this.state.expand });
  // 获取数据输入组件
  // eslint-disable-next-line
  getDataInComponent = ({ type, Component, ...other }) => {
    const _type = typeof type === 'string' ? type.toLowerCase() : '';
    if (typeof Component === 'function') {
      return <Component {...other} />;
    }
    switch (_type) {
      case 'select':
        return <Select placeholder="请选择" {...other} />;
      case 'radio':
        return <RadioGroup {...other} />;
      case 'rangepicker':
        return (
          <RangePicker
            style={{ width: '100%' }}
            showTime={{
              defaultValue: [moment().startOf('day'), moment().endOf('day')],
            }}
            {...other}
          />
        );
      case 'combinedselector':
        return <CombinedSelectorWrapper {...other} />;
      case 'checkbox':
        return <CheckboxGroup {...other} />;
      default:
        return <Input {...other} />;
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value && this.state.ready) {
      this.props.form.setFieldsValue(nextProps.value);
    }
  }
  componentDidMount() {
    // eslint-disable-next-line
    this.setState({ ready: true });
  }
  renderFields() {
    const {
      formItemLayout,
      fields,
      fieldsVisibledCount,
      formItemColSpan,
    } = this.props;
    const { expand } = this.state;
    const count = this.state.expand ? fields.length : fieldsVisibledCount;
    const { getFieldDecorator } = this.props.form;
    const rowNumber = Math.floor(24 / formItemColSpan);
    const lastRowIndex = (Math.ceil(count / rowNumber) - 1) * rowNumber;

    return fields.reduce(
      (
        result,
        { name, label, decoratorOption = {}, oneLine, ...other },
        index
      ) => {
        const key = index + 1;
        if (/combinedselector/i.test(other.type)) {
          // eslint-disable-next-line
          decoratorOption.initialValue = decoratorOption.initialValue || [];
        }
        const className = classnames({
          'filter-collapsible-form-item': true,
          'filter-collapsible-form-item_one-line': oneLine,
        });
        result.push(
          <Col
            span={formItemColSpan}
            key={key}
            className={className}
            style={{
              display: index < count ? 'block' : 'none',
            }}
          >
            <FormItem
              {...formItemLayout}
              label={label}
              // 避免可见行最后一行出现marginBottom
              style={
                index < count && index >= lastRowIndex && !expand
                  ? { marginBottom: '0' }
                  : null
              }
            >
              {getFieldDecorator(name, decoratorOption)(
                this.getDataInComponent({ ...other })
              )}
            </FormItem>
          </Col>
        );
        return result;
      },
      []
    );
  }
  renderButton() {
    const { expand } = this.state;
    return (
      <Fragment>
        <a
          onClick={this.handleToggle}
          className="filter-collapsible__button_margin-right-10"
        >
          {expand ? '收起' : '高级'}{' '}
          <Icon type={this.state.expand ? 'up' : 'down'} />
        </a>
        <Button
          onClick={this.handleReset}
          className="filter-collapsible__button filter-collapsible__button_margin-right-10"
        >
          重置
        </Button>
        <Button
          type="primary"
          onClick={this.handleSubmit}
          className="filter-collapsible__button"
        >
          查询
        </Button>
      </Fragment>
    );
  }
  renderForm = () => {
    const { className, style } = this.props;
    const { expand } = this.state;

    const finalyClass = classnames({
      'filter-collapsible': true,
      'filter-collapsible_expand': expand,
      ...className,
    });
    return (
      <Form className={finalyClass} style={style}>
        <div className="filter-collapsible-fields">
          <Row>{this.renderFields()}</Row>
        </div>
        <div className="filter-collapsible-button-wrapper">
          {this.renderButton()}
        </div>
      </Form>
    );
  };
  render() {
    const { status, reload } = this.props;
    return (
      <AsyncWrapper
        status={status}
        prompt="加载失败"
        AsyncComponent={this.renderForm}
        reload={reload}
      />
    );
  }
}

CollapsibleFilter.defaultProps = {
  className: '',
  style: { width: '100%', margin: '0 auto 20px' },
  // 可见字段数量
  fieldsVisibledCount: 2,
  fields: [],
  formItemColSpan: 12,
  formItemLayout: {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  },
  onReset: null,
};

CollapsibleFilter.propTypes = {
  /** 从外部传递的筛选器初始数据 */
  value: propTypes.object,
  /** 触发筛选条件查询动作 */
  onChange: propTypes.func.isRequired,
  /** 筛选条件重置 */
  onReset: propTypes.func,
  /** 查询条件筛选器的Form域字段 */
  fields: propTypes.arrayOf(propTypes.object),
  /** 自定义样式 */
  className: propTypes.string,
  /** 外部样式 */
  style: propTypes.object,
  /** 筛选器的Form域布局 */
  formItemLayout: propTypes.object,
  /** 默认清空下筛选器可见Form域数量 */
  fieldsVisibledCount: propTypes.number,
  /** 筛选器每一行中Form域的宽度 */
  formItemColSpan: propTypes.number,
  /** 当筛选器未能成功初始化时重新加载的API */
  reload: propTypes.func,
};

export default Form.create({
  mapPropsToFields({ value }) {
    const keys = Object.keys(value);
    return keys.reduce((result, field) => {
      // eslint-disable-next-line
      result[field] = { value: value[field] };
      return result;
    }, {});
  },
})(CollapsibleFilter);
