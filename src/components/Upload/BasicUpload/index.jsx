import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Button, Icon } from 'antd';
import './index.less';

/**
 * 基本上传组件
 * @example ../../../../markdown/basicUpload.md
 */
export default class BasicUpload extends React.Component {
  static displayName = 'BasicUpload 基本上传';

  static defaultProps = {
    action: '//jsonplaceholder.typicode.com/posts/',
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
    return (
      <Upload className="basic-upload" {...this.props} {...this.state}>
        <Button>
          <Icon type="upload" /> 上传文件
        </Button>
      </Upload>
    );
  }
}
