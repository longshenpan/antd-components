import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.less';

var SubMenu = _Menu.SubMenu;

var NavLeft = function (_React$Component) {
  _inherits(NavLeft, _React$Component);

  function NavLeft(props) {
    _classCallCheck(this, NavLeft);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleMenuClick = function (_ref) {
      var item = _ref.item,
          key = _ref.key;

      if (key === _this.state.currentKey) {
        return false;
      }
      _this.setState({
        currentKey: key
      });
    };

    _this.state = {
      currentKey: '2'
    };
    return _this;
  }

  NavLeft.prototype.render = function render() {
    var currentKey = this.state.currentKey;
    var _props = this.props,
        collapse = _props.collapse,
        onCollapseChange = _props.onCollapseChange;

    return React.createElement(
      'div',
      null,
      React.createElement(
        _Menu,
        {
          defaultSelectedKeys: [currentKey],
          selectedKeys: [currentKey],
          mode: 'inline',
          theme: 'dark',
          onClick: this.handleMenuClick,
          inlineCollapsed: collapse
        },
        React.createElement(
          _Menu.Item,
          { key: '2', title: 'BaseFormDemo' },
          React.createElement(
            Link,
            { to: '/BaseFormDemo' },
            React.createElement(_Icon, { type: 'desktop' }),
            React.createElement(
              'span',
              null,
              'BaseFormDemo'
            )
          )
        ),
        React.createElement(
          SubMenu,
          {
            key: 'sub1',
            title: React.createElement(
              'span',
              null,
              React.createElement(_Icon, { type: 'mail' }),
              React.createElement(
                'span',
                null,
                '\u56FE\u8868'
              )
            )
          },
          React.createElement(
            _Menu.Item,
            { key: '5', title: '折线' },
            React.createElement(
              Link,
              { to: '/echarts/line' },
              '\u6298\u7EBF'
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'ant-aside-action', onClick: onCollapseChange },
        collapse ? React.createElement(_Icon, { type: 'right' }) : React.createElement(_Icon, { type: 'left' })
      )
    );
  };

  return NavLeft;
}(React.Component);

export default NavLeft;