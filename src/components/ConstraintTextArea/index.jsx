import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './index.less';

/**
 * 字数受限制的文本输入框
 * @example ../../../markdown/constrainedTextarea.md
 */
export default class ConstraintTextArea extends React.Component {
  static displayName = 'ConstrainedTextArea 字数受限文本框';

  static defaultProps = {
    maxlength: 200,
    placeholder: '请输入备注信息',
    style: {
      width: 200,
    },
  };

  static propTypes = {
    /** the  maximum number of characters length can input */
    maxlength: PropTypes.number,
    /** placeholder info */
    placeholder: PropTypes.string,
    /** function call when user input character */
    onChange: PropTypes.func.isRequired,
    /** the textarea style */
    style: PropTypes.object,
    /** the input character length */
    inputlength: PropTypes.number.isRequired,
  };

  render() {
    const { maxlength, inputlength, style, ...rest } = this.props;

    return (
      <div className="constraint-textarea" style={{ ...style }}>
        <Input.TextArea maxLength={maxlength || 200} {...rest} />
        <span className="show-charLen">
          {inputlength}/{maxlength || 200}
        </span>
      </div>
    );
  }
}
