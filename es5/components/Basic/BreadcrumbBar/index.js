import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/breadcrumb/style';
import _Breadcrumb from 'antd/lib/breadcrumb';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import './index.less';

function getMatchRoute(routes, url) {
  var route = null;

  routes.forEach(function (item) {
    if (url === item.path) {
      route = item;
    } else if (item.routes) {
      route = getMatchRoute(item.routes, url);
    }
  });

  return route;
}

/**
 * 面包屑组件用于页面的层级导航
 */

var BreadcrumbBar = function (_React$Component) {
  _inherits(BreadcrumbBar, _React$Component);

  function BreadcrumbBar() {
    var _temp, _this, _ret;

    _classCallCheck(this, BreadcrumbBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.itemsRender = function (routes, pathSnippets) {
      return pathSnippets.map(function (_, index) {
        var num = index + 1;
        var url = '/' + pathSnippets.slice(0, num).join('/');
        var route = getMatchRoute(routes, url);

        if (route) {
          return React.createElement(
            _Breadcrumb.Item,
            { key: route.path },
            pathSnippets.length === num ? React.createElement(
              'span',
              null,
              route.breadcrumbName
            ) : React.createElement(
              Link,
              { to: route.path },
              route.breadcrumbName
            )
          );
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  BreadcrumbBar.prototype.render = function render() {
    var _props = this.props,
        routes = _props.routes,
        history = _props.history,
        location = _props.location,
        route = _props.route,
        children = _props.children;

    var pathSnippets = location.pathname.split('/').filter(function (i) {
      return i;
    });

    return React.createElement(
      'div',
      { className: 'breadcrumb-bar' },
      pathSnippets.length > 1 ? React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'div',
          { className: 'breadcrumb-bar__back' },
          React.createElement(_Icon, { type: 'left', onClick: history.goBack() })
        ),
        React.createElement(
          _Breadcrumb,
          null,
          this.itemsRender(routes, pathSnippets)
        )
      ) : React.createElement(
        'div',
        { className: 'breadcrumb-bar__title' },
        route.breadcrumbName
      ),
      children && React.createElement(
        'div',
        { className: 'breadcrumb-bar__actions' },
        children
      )
    );
  };

  return BreadcrumbBar;
}(React.Component);

BreadcrumbBar.displayName = 'BreadcrumbBar 面包屑';
BreadcrumbBar.propTypes = {
  /** The routing stack information of router */
  routes: PropTypes.array,
  /** browser's history object */
  history: PropTypes.object,
  /** current page url */
  location: PropTypes.object,
  /** current page route info which configured in routes.json */
  route: PropTypes.object
};
export default BreadcrumbBar;