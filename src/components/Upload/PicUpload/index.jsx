import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal } from 'antd';
import './index.less';

/**
 * 图片上传组件，并且具有预览功能
 * @example ../../../../markdown/picUpload.md
 */
export default class PicUpload extends React.Component {
  static displayName = 'PicUpload 图片上传';

  static defaultProps = {
    action: '//jsonplaceholder.typicode.com/posts/',
    accpet: '.jpg,.png',
  };

  static propTypes = {
    /** Required. Uploading URL */
    action: PropTypes.string.isRequired,
    /** File types that can be accepted */
    accpet: PropTypes.string,
    /** A callback function, can be executed when uploading state is changing */
    onChange: PropTypes.func.isRequired,
    /** The numer of pictures can be uploaded */
    limit: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      previewVisible: false,
      previewImage: '',
    };
  }

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleCancel = () => this.setState({ previewVisible: false });

  render() {
    const { previewVisible, previewImage } = this.state;
    const { limit, fileList } = this.props;

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div className="clearfix">
        <Upload
          {...this.state}
          {...this.props}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
        >
          {fileList.length >= (limit || 3) ? null : uploadButton}
        </Upload>

        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
