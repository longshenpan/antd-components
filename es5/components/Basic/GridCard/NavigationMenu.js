import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Link } from 'react-router-dom';

var NavigationMenu = function (_React$Component) {
  _inherits(NavigationMenu, _React$Component);

  function NavigationMenu() {
    _classCallCheck(this, NavigationMenu);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  NavigationMenu.prototype.render = function render() {
    var menu = this.props.menu;

    return React.createElement(
      Link,
      { to: menu.path, className: 'grid-card-nav__item' },
      React.createElement(
        'div',
        { className: 'grid-card-nav__item-icon' },
        React.createElement(menu.Icon, { width: 50, height: 50 })
      ),
      React.createElement(
        'div',
        { className: 'grid-card-nav__item-name-box' },
        React.createElement(
          'div',
          { className: 'grid-card-nav__item-name' },
          menu.name
        ),
        menu.desc && React.createElement(
          'div',
          { className: 'grid-card-nav__item-desc' },
          menu.desc
        )
      )
    );
  };

  return NavigationMenu;
}(React.Component);

export default NavigationMenu;