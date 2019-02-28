import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import * as React from 'react';
import PropTypes from 'prop-types';
import MainContent from './mainContent';
import MainContentHead from './mainContentHead';
import MainContentRemain from './mainContentRemain';
import ContentBanner from '../../Basic/BreadcrumbBar';

import './index.less';

/**
 * 页面内容区布局组件
 */

var ContentLayout = function (_React$Component) {
  _inherits(ContentLayout, _React$Component);

  function ContentLayout() {
    _classCallCheck(this, ContentLayout);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ContentLayout.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'content-layout' },
      this.props.children
    );
  };

  return ContentLayout;
}(React.Component);

ContentLayout.displayName = 'ContentLayout 内容区布局';
ContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired
};
ContentLayout.ContentBanner = ContentBanner;
ContentLayout.MainContent = MainContent;
ContentLayout.MainContentHead = MainContentHead;
ContentLayout.MainContentRemain = MainContentRemain;
export default ContentLayout;