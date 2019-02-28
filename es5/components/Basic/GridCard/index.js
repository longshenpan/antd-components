import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import NavigationMenu from './NavigationMenu';
import './index.less';
/**
 * 栅格类导航组件
 */

var GridCard = function (_React$Component) {
  _inherits(GridCard, _React$Component);

  function GridCard() {
    _classCallCheck(this, GridCard);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  GridCard.prototype.render = function render() {
    var menus = this.props.menus;


    return React.createElement(
      'div',
      { className: 'grid-card' },
      React.createElement(
        'div',
        { className: 'grid-card-nav' },
        menus.map(function (item) {
          return React.createElement(NavigationMenu, { key: item.path, menu: item });
        })
      )
    );
  };

  return GridCard;
}(React.Component);

GridCard.displayName = 'GridCard 栅格导航';
GridCard.propTypes = {
  /** navigation menus consists menu item */
  menus: PropTypes.arrayOf(PropTypes.shape({
    Icon: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    path: PropTypes.string.isRequired
  })).isRequired
};
export default GridCard;