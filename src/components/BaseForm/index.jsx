import React, { Component } from 'react';
import { Input, Select, Form, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class BaseForm extends Component {
  getOptionList = data => {
    let options = [];
    data.map(item => {
      options.push(
        <Option value={item.code} key={item.code}>
          {item.name}
        </Option>
      );
      return true;
    });
    return options;
  };

  initFormList = () => {
    const { form, formList, columns = 3 } = this.props;
    const { getFieldDecorator } = form;
    const formItemList = [];
    const spanNum = 24 / columns;
    const formItemLayout = {
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
    };
    const baseFormProps = {
      style: { margin: '0 auto' },
      ...formItemLayout,
    };

    if (formList && formList.length > 0) {
      formList.forEach((item, i) => {
        const {
          label,
          field,
          initialValue = '',
          disabled,
          onChange = () => {},
          rules = [],
          placeholder = '',
          type,
          list = [],
        } = item;

        const formProps = Object.assign(
          {
            label,
          },
          baseFormProps
        );
        let component = null;

        switch (type) {
          case 'SELECT':
            component = (
              <Select onChange={onChange} disabled={disabled}>
                {this.getOptionList(list)}
              </Select>
            );
            break;
          case 'TEXTAREA':
            component = (
              <TextArea
                rows={3}
                placeholder={placeholder}
                disabled={disabled}
              />
            );
            break;
          case 'INPUT':
            component = <Input disabled={disabled} />;
            break;
          default:
            component = null;
            break;
        }
        if (component) {
          formItemList.push(
            <Col key={field} span={spanNum}>
              <FormItem {...formProps}>
                {getFieldDecorator(field, {
                  initialValue,
                  rules,
                })(component)}
              </FormItem>
            </Col>
          );
        }
      });
    }

    if (formItemList.length % columns !== 0) {
      this.hasOptBtn = true;
      formItemList.push(
        <Col key={'opt'} span={spanNum}>
          <FormItem {...baseFormProps}>
            <Button
              type="primary"
              style={{ margin: '0 5px' }}
              onClick={this.handleSubmit}
            >
              查询
            </Button>
            <Button onClick={this.reset}>重置</Button>
          </FormItem>
        </Col>
      );
    }

    return formItemList;
  };

  handleSubmit = () => {
    let submitObj = null;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { onSubmit } = this.props;
        submitObj = Object.assign({}, values);
        onSubmit && onSubmit(submitObj);
      }
      return null;
    });
    return submitObj;
  };

  reset = () => {
    this.props.form.resetFields();
  };

  render() {
    return (
      <Form>
        <Row gutter={24}>{this.initFormList()}</Row>
        {!this.hasOptBtn ? (
          <FormItem style={{ textAlign: 'right', marginBottom: 0 }}>
            <Button
              type="primary"
              style={{ margin: '0 5px' }}
              onClick={this.handleSubmit}
            >
              查询
            </Button>
            <Button onClick={this.reset}>重置</Button>
          </FormItem>
        ) : null}
      </Form>
    );
  }
}

export default Form.create({})(BaseForm);
