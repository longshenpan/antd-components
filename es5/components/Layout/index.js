import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';
import NavLeft from '../NavLeft/index.jsx';
import './index.less';

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleCollapseChange = function () {
      _this.setState({
        collapse: !_this.state.collapse
      });
    };

    _this.state = {
      collapse: false
    };
    return _this;
  }

  Layout.prototype.render = function render() {
    var collapse = this.state.collapse;


    return React.createElement(
      'section',
      {
        className: collapse ? 'layout-container layout-aside-collapse' : 'layout-container'
      },
      React.createElement(
        'aside',
        { className: 'nav-left' },
        React.createElement(NavLeft, {
          collapse: collapse,
          onCollapseChange: this.handleCollapseChange
        })
      ),
      React.createElement(
        'section',
        { className: 'layout-main' },
        React.createElement(
          'header',
          { className: 'layout-header' },
          React.createElement(Header, null)
        ),
        React.createElement(
          'article',
          { className: 'layout-content' },
          renderRoutes(this.props.route.routes)
        ),
        React.createElement(
          'footer',
          { className: 'layout-footer' },
          React.createElement(
            Footer,
            null,
            React.createElement(
              'span',
              null,
              '\u7248\u6743\u6240\u6709\xA9\u5F20\u76FC'
            )
          )
        )
      )
    );
  };

  return Layout;
}(React.Component);

export default Layout;