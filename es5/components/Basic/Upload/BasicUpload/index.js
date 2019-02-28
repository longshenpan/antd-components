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
 * 基本上传组件
 */

var BasicUpload = function (_React$Component) {
  _inherits(BasicUpload, _React$Component);

  function BasicUpload() {
    _classCallCheck(this, BasicUpload);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  BasicUpload.prototype.render = function render() {
    return React.createElement(
      _Upload,
      _extends({ className: 'basic-upload' }, this.props, this.state),
      React.createElement(
        _Button,
        null,
        React.createElement(_Icon, { type: 'upload' }),
        ' \u4E0A\u4F20\u6587\u4EF6'
      )
    );
  };

  return BasicUpload;
}(React.Component);

BasicUpload.displayName = 'BasicUpload 基本上传';
BasicUpload.defaultProps = {
  action: '//jsonplaceholder.typicode.com/posts/'
};
BasicUpload.propTypes = {
  /** Required. Uploading URL */
  action: PropTypes.string.isRequired,
  /** File types that can be accepted */
  accpet: PropTypes.string,
  /** A callback function, can be executed when uploading state is changing */
  onChange: PropTypes.func.isRequired
};
export default BasicUpload;