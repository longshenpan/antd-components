import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Form, Button } from 'antd';
import consts from './../../../consts';

import './index.less';

const FormItem = Form.Item;

const { FIRST, LAST } = consts.formActionBarStep;

/**
 * 流程性步骤组件
 */
export default class FormActionBar extends React.Component {
  static displayName = 'FormActionBar 表单步骤控件';

  static defaultProps = {
    wrapperCol: { span: 8, offset: 4 },
  };

  static propTypes = {
    /** formItem wrapper col */
    wrapperCol: PropTypes.object,
    /** const to indicate action step */
    step: PropTypes.string,
    /** function call when click previous button*/
    onPrev: PropTypes.func,
    /** function call when click next button */
    onNext: PropTypes.func,
  };

  render() {
    const { wrapperCol, step, onPrev, onNext, style } = this.props;

    return (
      <div
        style={style}
        className={classnames('form-action-bar', { 'has-step': !!step })}
      >
        <FormItem wrapperCol={!step ? wrapperCol : null}>
          {step &&
            step !== FIRST && (
              <Button
                className="bui-btn-white-grey ant-btn-base"
                onClick={onPrev}
              >
                上一步
              </Button>
            )}

          <Button className="bui-btn-blue ant-btn-base" onClick={onNext}>
            {!step || step === LAST ? '提交' : '下一步'}
          </Button>
        </FormItem>
      </div>
    );
  }
}
