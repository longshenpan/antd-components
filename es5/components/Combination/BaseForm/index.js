import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';
import _Object$assign from 'babel-runtime/core-js/object/assign';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import React, { Component } from 'react';

var FormItem = _Form.Item;
var Option = _Select.Option;
var TextArea = _Input.TextArea;

var BaseForm = function (_Component) {
  _inherits(BaseForm, _Component);

  function BaseForm() {
    var _temp, _this, _ret;

    _classCallCheck(this, BaseForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getOptionList = function (data) {
      var options = [];
      data.map(function (item) {
        options.push(React.createElement(
          Option,
          { value: item.code, key: item.code },
          item.name
        ));
        return true;
      });
      return options;
    }, _this.initFormList = function () {
      var _this$props = _this.props,
          form = _this$props.form,
          formList = _this$props.formList,
          _this$props$columns = _this$props.columns,
          columns = _this$props$columns === undefined ? 3 : _this$props$columns;
      var getFieldDecorator = form.getFieldDecorator;

      var formItemList = [];
      var spanNum = 24 / columns;
      var formItemLayout = {
        labelCol: {
          span: 5
        },
        wrapperCol: {
          span: 19
        }
      };
      var baseFormProps = _extends({
        style: { margin: '0 auto' }
      }, formItemLayout);

      if (formList && formList.length > 0) {
        formList.forEach(function (item, i) {
          var label = item.label,
              field = item.field,
              _item$initialValue = item.initialValue,
              initialValue = _item$initialValue === undefined ? '' : _item$initialValue,
              disabled = item.disabled,
              _item$onChange = item.onChange,
              onChange = _item$onChange === undefined ? function () {} : _item$onChange,
              _item$rules = item.rules,
              rules = _item$rules === undefined ? [] : _item$rules,
              _item$placeholder = item.placeholder,
              placeholder = _item$placeholder === undefined ? '' : _item$placeholder,
              type = item.type,
              _item$list = item.list,
              list = _item$list === undefined ? [] : _item$list;


          var formProps = _Object$assign({
            label: label
          }, baseFormProps);
          var component = null;

          switch (type) {
            case 'SELECT':
              component = React.createElement(
                _Select,
                { onChange: onChange, disabled: disabled },
                _this.getOptionList(list)
              );
              break;
            case 'TEXTAREA':
              component = React.createElement(TextArea, {
                rows: 3,
                placeholder: placeholder,
                disabled: disabled
              });
              break;
            case 'INPUT':
              component = React.createElement(_Input, { disabled: disabled });
              break;
            default:
              component = null;
              break;
          }
          if (component) {
            formItemList.push(React.createElement(
              _Col,
              { key: field, span: spanNum },
              React.createElement(
                FormItem,
                formProps,
                getFieldDecorator(field, {
                  initialValue: initialValue,
                  rules: rules
                })(component)
              )
            ));
          }
        });
      }

      if (formItemList.length % columns !== 0) {
        _this.hasOptBtn = true;
        formItemList.push(React.createElement(
          _Col,
          { key: 'opt', span: spanNum },
          React.createElement(
            FormItem,
            baseFormProps,
            React.createElement(
              _Button,
              {
                type: 'primary',
                style: { margin: '0 5px' },
                onClick: _this.handleSubmit
              },
              '\u67E5\u8BE2'
            ),
            React.createElement(
              _Button,
              { onClick: _this.reset },
              '\u91CD\u7F6E'
            )
          )
        ));
      }

      return formItemList;
    }, _this.handleSubmit = function () {
      var submitObj = null;
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          var onSubmit = _this.props.onSubmit;

          submitObj = _Object$assign({}, values);
          onSubmit && onSubmit(submitObj);
        }
        return null;
      });
      return submitObj;
    }, _this.reset = function () {
      _this.props.form.resetFields();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  BaseForm.prototype.render = function render() {
    return React.createElement(
      _Form,
      null,
      React.createElement(
        _Row,
        { gutter: 24 },
        this.initFormList()
      ),
      !this.hasOptBtn ? React.createElement(
        FormItem,
        { style: { textAlign: 'right', marginBottom: 0 } },
        React.createElement(
          _Button,
          {
            type: 'primary',
            style: { margin: '0 5px' },
            onClick: this.handleSubmit
          },
          '\u67E5\u8BE2'
        ),
        React.createElement(
          _Button,
          { onClick: this.reset },
          '\u91CD\u7F6E'
        )
      ) : null
    );
  };

  return BaseForm;
}(Component);

export default _Form.create({})(BaseForm);