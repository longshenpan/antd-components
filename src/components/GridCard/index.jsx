import React from 'react';
import PropTypes from 'prop-types';
import NavigationMenu from './NavigationMenu';
import './index.less';
// @example ../../../markdown/gridCard.md
/**
 * 栅格类导航组件
 */
export default class GridCard extends React.Component {
  static displayName = 'GridCard 栅格导航';

  static propTypes = {
    /** navigation menus consists menu item */
    menus: PropTypes.arrayOf(
      PropTypes.shape({
        Icon: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        desc: PropTypes.string,
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { menus } = this.props;

    return (
      <div className="grid-card">
        <div className="grid-card-nav">
          {menus.map(item => (
            <NavigationMenu key={item.path} menu={item} />
          ))}
        </div>
      </div>
    );
  }
}
