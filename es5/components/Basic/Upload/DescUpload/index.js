import 'antd/lib/upload/style';
import _Upload from 'antd/lib/upload';
import _extends from 'babel-runtime/helpers/extends';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

/**
 * 具有支持文件格式的描述性上传组件
 */

var DescUpload = function (_React$Component) {
  _inherits(DescUpload, _React$Component);

  function DescUpload() {
    _classCallCheck(this, DescUpload);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DescUpload.prototype.render = function render() {
    var accept = this.props.accept;


    return React.createElement(
      'div',
      { className: 'upload-container' },
      React.createElement(
        _Upload,
        _extends({}, this.props, this.state),
        React.createElement(
          _Button,
          null,
          React.createElement(_Icon, { type: 'upload' }),
          ' \u4E0A\u4F20\u6587\u4EF6'
        )
      ),
      React.createElement(
        'span',
        { className: 'description' },
        '\u652F\u6301\u6269\u5C55\u540D:',
        accept
      )
    );
  };

  return DescUpload;
}(React.Component);

DescUpload.displayName = 'DescUpload 带描述上传';
DescUpload.defaultProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
  accept: '.rar,.zip,.doc,.docx,.pdf,.jpg...'
};
DescUpload.propTypes = {
  /** Required. Uploading URL */
  action: PropTypes.string.isRequired,
  /** File types that can be accepted */
  accpet: PropTypes.string,
  /** A callback function, can be executed when uploading state is changing */
  onChange: PropTypes.func.isRequired
};
export default DescUpload;