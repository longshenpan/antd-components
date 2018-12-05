import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationMenu extends React.Component {
  render() {
    const { menu } = this.props;
    return (
      <Link to={menu.path} className={'grid-card-nav__item'}>
        <div className="grid-card-nav__item-icon">
          <menu.Icon width={50} height={50} />
        </div>
        <div className={'grid-card-nav__item-name-box'}>
          <div className={'grid-card-nav__item-name'}>{menu.name}</div>
          {menu.desc && (
            <div className="grid-card-nav__item-desc">{menu.desc}</div>
          )}
        </div>
      </Link>
    );
  }
}
