import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Button, Icon } from 'antd';
import './index.less';

/**
 * 具有支持文件格式的描述性上传组件
 */
export default class DescUpload extends React.Component {
  static displayName = 'DescUpload 带描述上传';

  static defaultProps = {
    action: '//jsonplaceholder.typicode.com/posts/',
    accept: '.rar,.zip,.doc,.docx,.pdf,.jpg...',
  };

  static propTypes = {
    /** Required. Uploading URL */
    action: PropTypes.string.isRequired,
    /** File types that can be accepted */
    accpet: PropTypes.string,
    /** A callback function, can be executed when uploading state is changing */
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { accept } = this.props;

    return (
      <div className="upload-container">
        <Upload {...this.props} {...this.state}>
          <Button>
            <Icon type="upload" /> 上传文件
          </Button>
        </Upload>
        <span className="description">
          支持扩展名:
          {accept}
        </span>
      </div>
    );
  }
}
