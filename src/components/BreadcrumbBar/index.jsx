import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';

import './index.less';

function getMatchRoute(routes, url) {
  let route = null;

  routes.forEach(item => {
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
 * @example ../../../markdown/breadcrumbBar.md
 */
export default class BreadcrumbBar extends React.Component {
  static displayName = 'BreadcrumbBar 面包屑';

  static propTypes = {
    /** The routing stack information of router */
    routes: PropTypes.array,
    /** browser's history object */
    history: PropTypes.object,
    /** current page url */
    location: PropTypes.object,
    /** current page route info which configured in routes.json */
    route: PropTypes.object,
  };

  itemsRender = (routes, pathSnippets) =>
    pathSnippets.map((_, index) => {
      const num = index + 1;
      const url = `/${pathSnippets.slice(0, num).join('/')}`;
      const route = getMatchRoute(routes, url);

      if (route) {
        return (
          <Breadcrumb.Item key={route.path}>
            {pathSnippets.length === num ? (
              <span>{route.breadcrumbName}</span>
            ) : (
              <Link to={route.path}>{route.breadcrumbName}</Link>
            )}
          </Breadcrumb.Item>
        );
      }
    });

  render() {
    const { routes, history, location, route, children } = this.props;
    const pathSnippets = location.pathname.split('/').filter(i => i);

    return (
      <div className="breadcrumb-bar">
        {pathSnippets.length > 1 ? (
          <React.Fragment>
            <div className="breadcrumb-bar__back">
              <Icon type="left" onClick={history.goBack()} />
            </div>
            <Breadcrumb>{this.itemsRender(routes, pathSnippets)}</Breadcrumb>
          </React.Fragment>
        ) : (
          <div className="breadcrumb-bar__title">{route.breadcrumbName}</div>
        )}

        {children && <div className="breadcrumb-bar__actions">{children}</div>}
      </div>
    );
  }
}
