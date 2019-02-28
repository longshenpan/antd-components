import _Object$keys from 'babel-runtime/core-js/object/keys';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';
import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import 'antd/lib/radio/style';
import _Radio from 'antd/lib/radio';
import 'antd/lib/checkbox/style';
import _Checkbox from 'antd/lib/checkbox';
import 'antd/lib/date-picker/style';
import _DatePicker from 'antd/lib/date-picker';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import React, { Fragment } from 'react';
import moment from 'moment';
import classnames from 'classnames';

import propTypes from 'prop-types';
import AsyncWrapper from '../../Basic/PrivateComponents/AsyncWrapper/AsyncWrapper.jsx';
import CombinedSelector from '../../Basic/CombinedSelector';
import './CollapsibleFilter.less';

var FormItem = _Form.Item;
var RangePicker = _DatePicker.RangePicker;

var CheckboxGroup = _Checkbox.Group;
var RadioGroup = _Radio.Group;

// CombinedSelector 不满足需求，重新包装
// eslint-disable-next-line
var CombinedSelectorWrapper = function CombinedSelectorWrapper(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      other = _objectWithoutProperties(_ref, ['onChange', 'value']);

  return React.createElement(CombinedSelector, _extends({}, other, {
    onBlurHandle: onChange,
    handlerConfirmClick: onChange,
    initialSelectedDetail: value
  }));
};

/**
 * 查询条件筛选器用于数据查询时进行条件组合
 */

var CollapsibleFilter = function (_React$Component) {
  _inherits(CollapsibleFilter, _React$Component);

  function CollapsibleFilter() {
    var _temp, _this, _ret;

    _classCallCheck(this, CollapsibleFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      expand: true,
      ready: false
    }, _this.handleReset = function () {
      var onReset = _this.props.onReset;

      _this.props.form.resetFields();
      if (onReset) {
        onReset();
      }
    }, _this.handleSubmit = function () {
      var onChange = _this.props.onChange;

      onChange(_this.props.form.getFieldsValue());
    }, _this.handleToggle = function () {
      return _this.setState({ expand: !_this.state.expand });
    }, _this.getDataInComponent = function (_ref2) {
      var type = _ref2.type,
          Component = _ref2.Component,
          other = _objectWithoutProperties(_ref2, ['type', 'Component']);

      var _type = typeof type === 'string' ? type.toLowerCase() : '';
      if (typeof Component === 'function') {
        return React.createElement(Component, other);
      }
      switch (_type) {
        case 'select':
          return React.createElement(_Select, _extends({ placeholder: '\u8BF7\u9009\u62E9' }, other));
        case 'radio':
          return React.createElement(RadioGroup, other);
        case 'rangepicker':
          return React.createElement(RangePicker, _extends({
            style: { width: '100%' },
            showTime: {
              defaultValue: [moment().startOf('day'), moment().endOf('day')]
            }
          }, other));
        case 'combinedselector':
          return React.createElement(CombinedSelectorWrapper, other);
        case 'checkbox':
          return React.createElement(CheckboxGroup, other);
        default:
          return React.createElement(_Input, other);
      }
    }, _this.renderForm = function () {
      var _this$props = _this.props,
          className = _this$props.className,
          style = _this$props.style;
      var expand = _this.state.expand;


      var finalyClass = classnames(_extends({
        'filter-collapsible': true,
        'filter-collapsible_expand': expand
      }, className));
      return React.createElement(
        _Form,
        { className: finalyClass, style: style },
        React.createElement(
          'div',
          { className: 'filter-collapsible-fields' },
          React.createElement(
            _Row,
            null,
            _this.renderFields()
          )
        ),
        React.createElement(
          'div',
          { className: 'filter-collapsible-button-wrapper' },
          _this.renderButton()
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 获取数据输入组件
  // eslint-disable-next-line


  CollapsibleFilter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value && this.state.ready) {
      this.props.form.setFieldsValue(nextProps.value);
    }
  };

  CollapsibleFilter.prototype.componentDidMount = function componentDidMount() {
    // eslint-disable-next-line
    this.setState({ ready: true });
  };

  CollapsibleFilter.prototype.renderFields = function renderFields() {
    var _this2 = this;

    var _props = this.props,
        formItemLayout = _props.formItemLayout,
        fields = _props.fields,
        fieldsVisibledCount = _props.fieldsVisibledCount,
        formItemColSpan = _props.formItemColSpan;
    var expand = this.state.expand;

    var count = this.state.expand ? fields.length : fieldsVisibledCount;
    var getFieldDecorator = this.props.form.getFieldDecorator;

    var rowNumber = Math.floor(24 / formItemColSpan);
    var lastRowIndex = (Math.ceil(count / rowNumber) - 1) * rowNumber;

    return fields.reduce(function (result, _ref3, index) {
      var name = _ref3.name,
          label = _ref3.label,
          _ref3$decoratorOption = _ref3.decoratorOption,
          decoratorOption = _ref3$decoratorOption === undefined ? {} : _ref3$decoratorOption,
          oneLine = _ref3.oneLine,
          other = _objectWithoutProperties(_ref3, ['name', 'label', 'decoratorOption', 'oneLine']);

      var key = index + 1;
      if (/combinedselector/i.test(other.type)) {
        // eslint-disable-next-line
        decoratorOption.initialValue = decoratorOption.initialValue || [];
      }
      var className = classnames({
        'filter-collapsible-form-item': true,
        'filter-collapsible-form-item_one-line': oneLine
      });
      result.push(React.createElement(
        _Col,
        {
          span: formItemColSpan,
          key: key,
          className: className,
          style: {
            display: index < count ? 'block' : 'none'
          }
        },
        React.createElement(
          FormItem,
          _extends({}, formItemLayout, {
            label: label
            // 避免可见行最后一行出现marginBottom
            , style: index < count && index >= lastRowIndex && !expand ? { marginBottom: '0' } : null
          }),
          getFieldDecorator(name, decoratorOption)(_this2.getDataInComponent(_extends({}, other)))
        )
      ));
      return result;
    }, []);
  };

  CollapsibleFilter.prototype.renderButton = function renderButton() {
    var expand = this.state.expand;

    return React.createElement(
      Fragment,
      null,
      React.createElement(
        'a',
        {
          onClick: this.handleToggle,
          className: 'filter-collapsible__button_margin-right-10'
        },
        expand ? '收起' : '高级',
        ' ',
        React.createElement(_Icon, { type: this.state.expand ? 'up' : 'down' })
      ),
      React.createElement(
        _Button,
        {
          onClick: this.handleReset,
          className: 'filter-collapsible__button filter-collapsible__button_margin-right-10'
        },
        '\u91CD\u7F6E'
      ),
      React.createElement(
        _Button,
        {
          type: 'primary',
          onClick: this.handleSubmit,
          className: 'filter-collapsible__button'
        },
        '\u67E5\u8BE2'
      )
    );
  };

  CollapsibleFilter.prototype.render = function render() {
    var _props2 = this.props,
        status = _props2.status,
        reload = _props2.reload;

    return React.createElement(AsyncWrapper, {
      status: status,
      prompt: '\u52A0\u8F7D\u5931\u8D25',
      AsyncComponent: this.renderForm,
      reload: reload
    });
  };

  return CollapsibleFilter;
}(React.Component);

CollapsibleFilter.displayName = 'CollapsibleFilter 条件筛选器';


CollapsibleFilter.defaultProps = {
  className: '',
  style: { width: '100%', margin: '0 auto 20px' },
  // 可见字段数量
  fieldsVisibledCount: 2,
  fields: [],
  formItemColSpan: 12,
  formItemLayout: {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  },
  onReset: null
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
  reload: propTypes.func
};

export default _Form.create({
  mapPropsToFields: function mapPropsToFields(_ref4) {
    var value = _ref4.value;

    var keys = _Object$keys(value);
    return keys.reduce(function (result, field) {
      // eslint-disable-next-line
      result[field] = { value: value[field] };
      return result;
    }, {});
  }
})(CollapsibleFilter);