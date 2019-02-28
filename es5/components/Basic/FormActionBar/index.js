import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import consts from './../../../consts';

import './index.less';

var FormItem = _Form.Item;

var _consts$formActionBar = consts.formActionBarStep,
    FIRST = _consts$formActionBar.FIRST,
    LAST = _consts$formActionBar.LAST;

/**
 * 流程性步骤组件
 */

var FormActionBar = function (_React$Component) {
  _inherits(FormActionBar, _React$Component);

  function FormActionBar() {
    _classCallCheck(this, FormActionBar);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  FormActionBar.prototype.render = function render() {
    var _props = this.props,
        wrapperCol = _props.wrapperCol,
        step = _props.step,
        onPrev = _props.onPrev,
        onNext = _props.onNext,
        style = _props.style;


    return React.createElement(
      'div',
      {
        style: style,
        className: classnames('form-action-bar', { 'has-step': !!step })
      },
      React.createElement(
        FormItem,
        { wrapperCol: !step ? wrapperCol : null },
        step && step !== FIRST && React.createElement(
          _Button,
          {
            className: 'bui-btn-white-grey ant-btn-base',
            onClick: onPrev
          },
          '\u4E0A\u4E00\u6B65'
        ),
        React.createElement(
          _Button,
          { className: 'bui-btn-blue ant-btn-base', onClick: onNext },
          !step || step === LAST ? '提交' : '下一步'
        )
      )
    );
  };

  return FormActionBar;
}(React.Component);

FormActionBar.displayName = 'FormActionBar 表单步骤控件';
FormActionBar.defaultProps = {
  wrapperCol: { span: 8, offset: 4 }
};
FormActionBar.propTypes = {
  /** formItem wrapper col */
  wrapperCol: PropTypes.object,
  /** const to indicate action step */
  step: PropTypes.string,
  /** function call when click previous button*/
  onPrev: PropTypes.func,
  /** function call when click next button */
  onNext: PropTypes.func
};
export default FormActionBar;