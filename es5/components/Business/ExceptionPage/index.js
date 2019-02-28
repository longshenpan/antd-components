import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { exceptionPages } from '../../../consts/exceptionPageType.js';
import './index.less';

/**
 * 异常页面展示组件
 */

var ExceptionPage = function (_React$Component) {
  _inherits(ExceptionPage, _React$Component);

  function ExceptionPage() {
    _classCallCheck(this, ExceptionPage);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ExceptionPage.prototype.render = function render() {
    var type = this.props.type;

    var exceptionPath = exceptionPages[type] || exceptionPages.nullpage;
    return React.createElement(
      'div',
      { className: 'exception-container' },
      React.createElement('img', { alt: '\u9875\u9762\u5F02\u5E38', src: exceptionPath })
    );
  };

  return ExceptionPage;
}(React.Component);

ExceptionPage.displayName = 'ExceptionPage 异常页面';
ExceptionPage.propTypes = {
  /** define exception type */
  type: PropTypes.string.isRequired
};
export default ExceptionPage;