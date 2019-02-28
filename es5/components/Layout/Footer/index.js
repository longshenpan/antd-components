import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import './index.less';

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Footer.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'footer' },
      this.props.children || 'footer'
    );
  };

  return Footer;
}(React.Component);

export default Footer;