import * as React from 'react';
import PropTypes from 'prop-types';
import MainContent from './mainContent';
import MainContentHead from './mainContentHead';
import MainContentRemain from './mainContentRemain';
import ContentBanner from '../BreadcrumbBar';

import './index.less';

/**
 * 页面内容区布局组件
 * @example ../../../markdown/contentLayout.md
 */
export default class ContentLayout extends React.Component {
  static displayName = 'ContentLayout 内容区布局';

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  };

  static ContentBanner = ContentBanner;
  static MainContent = MainContent;
  static MainContentHead = MainContentHead;
  static MainContentRemain = MainContentRemain;

  render() {
    return <div className="content-layout">{this.props.children}</div>;
  }
}
