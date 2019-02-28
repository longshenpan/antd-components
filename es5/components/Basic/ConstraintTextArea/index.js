import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

/**
 * 字数受限制的文本输入框
 */

var ConstraintTextArea = function (_React$Component) {
  _inherits(ConstraintTextArea, _React$Component);

  function ConstraintTextArea() {
    _classCallCheck(this, ConstraintTextArea);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ConstraintTextArea.prototype.render = function render() {
    var _props = this.props,
        maxlength = _props.maxlength,
        inputlength = _props.inputlength,
        style = _props.style,
        rest = _objectWithoutProperties(_props, ['maxlength', 'inputlength', 'style']);

    return React.createElement(
      'div',
      { className: 'constraint-textarea', style: _extends({}, style) },
      React.createElement(_Input.TextArea, _extends({ maxLength: maxlength || 200 }, rest)),
      React.createElement(
        'span',
        { className: 'show-charLen' },
        inputlength,
        '/',
        maxlength || 200
      )
    );
  };

  return ConstraintTextArea;
}(React.Component);

ConstraintTextArea.displayName = 'ConstrainedTextArea 字数受限文本框';
ConstraintTextArea.defaultProps = {
  maxlength: 200,
  placeholder: '请输入备注信息',
  style: {
    width: 200
  }
};
ConstraintTextArea.propTypes = {
  /** the  maximum number of characters length can input */
  maxlength: PropTypes.number,
  /** placeholder info */
  placeholder: PropTypes.string,
  /** function call when user input character */
  onChange: PropTypes.func.isRequired,
  /** the textarea style */
  style: PropTypes.object,
  /** the input character length */
  inputlength: PropTypes.number.isRequired
};
export default ConstraintTextArea;