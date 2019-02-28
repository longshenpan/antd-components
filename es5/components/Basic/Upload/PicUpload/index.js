import 'antd/lib/modal/style';
import _Modal from 'antd/lib/modal';
import 'antd/lib/upload/style';
import _Upload from 'antd/lib/upload';
import _extends from 'babel-runtime/helpers/extends';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

/**
 * 图片上传组件，并且具有预览功能
 */

var PicUpload = function (_React$Component) {
  _inherits(PicUpload, _React$Component);

  function PicUpload(props) {
    _classCallCheck(this, PicUpload);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handlePreview = function (file) {
      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    };

    _this.handleCancel = function () {
      return _this.setState({ previewVisible: false });
    };

    _this.state = {
      previewVisible: false,
      previewImage: ''
    };
    return _this;
  }

  PicUpload.prototype.render = function render() {
    var _state = this.state,
        previewVisible = _state.previewVisible,
        previewImage = _state.previewImage;
    var _props = this.props,
        limit = _props.limit,
        fileList = _props.fileList;


    var uploadButton = React.createElement(
      'div',
      null,
      React.createElement(_Icon, { type: 'plus' }),
      React.createElement(
        'div',
        { className: 'ant-upload-text' },
        'Upload'
      )
    );

    return React.createElement(
      'div',
      { className: 'clearfix' },
      React.createElement(
        _Upload,
        _extends({}, this.state, this.props, {
          listType: 'picture-card',
          fileList: fileList,
          onPreview: this.handlePreview
        }),
        fileList.length >= (limit || 3) ? null : uploadButton
      ),
      React.createElement(
        _Modal,
        {
          visible: previewVisible,
          footer: null,
          onCancel: this.handleCancel
        },
        React.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
      )
    );
  };

  return PicUpload;
}(React.Component);

PicUpload.displayName = 'PicUpload 图片上传';
PicUpload.defaultProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
  accpet: '.jpg,.png'
};
PicUpload.propTypes = {
  /** Required. Uploading URL */
  action: PropTypes.string.isRequired,
  /** File types that can be accepted */
  accpet: PropTypes.string,
  /** A callback function, can be executed when uploading state is changing */
  onChange: PropTypes.func.isRequired,
  /** The numer of pictures can be uploaded */
  limit: PropTypes.number
};
export default PicUpload;