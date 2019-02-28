import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

/**
 * 当页面还未完全准备好数据时使用加载中动态
 */

var Loading = function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Loading.prototype.render = function render() {
    var type = this.props.type;

    var style = {
      width: 100,
      height: 100
    };

    if (type === 'large') {
      style.width = 140;
      style.height = 140;
    } else if (type === 'small') {
      style.width = 60;
      style.height = 60;
    }
    return React.createElement(
      'div',
      { className: 'loading-container' },
      React.createElement('img', {
        alt: '\u6B63\u5728\u52A0\u8F7D...',
        src: require('../../../assets/img/loading.gif'),
        style: style
      })
    );
  };

  return Loading;
}(React.Component);

Loading.displayName = 'Loading 加载中';
Loading.defaultProps = {
  type: 'default'
};
Loading.propTypes = {
  /** define the loading component size */
  type: PropTypes.oneOf(['small', 'default', 'large'])
};
export default Loading;