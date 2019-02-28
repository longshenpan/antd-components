import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

/**
 * 空态组件，用于在状态为空的情况下显示对应文字或者图片
 */

var NullStatus = function (_React$Component) {
  _inherits(NullStatus, _React$Component);

  function NullStatus() {
    _classCallCheck(this, NullStatus);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  NullStatus.prototype.render = function render() {
    var isShowImg = this.props.isShowImg;


    return React.createElement(
      'div',
      { className: 'null-container' },
      isShowImg ? React.createElement('img', {
        alt: '\u6682\u65F6\u6CA1\u6709\u6570\u636E',
        className: 'img-size',
        src: require('../../../assets/img/nodata-page.png')
      }) : React.createElement(
        'span',
        { className: 'text-decorator' },
        '\u6682\u65F6\u6CA1\u6709\u5185\u5BB9'
      )
    );
  };

  return NullStatus;
}(React.Component);

NullStatus.displayName = 'NullStatus 空态页面';
NullStatus.defaultProps = {
  isShowImg: false
};
NullStatus.propTypes = {
  /** indicate show image or text */
  isShowImg: PropTypes.bool
};
export default NullStatus;