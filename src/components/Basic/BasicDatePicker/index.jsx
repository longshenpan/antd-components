import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import './index.less';

/**
 * 具有星期提示信息和前缀信息的基础日期选择器
 */
export default class BasicDatePicker extends React.Component {
  static displayName = 'BasicDatePicker 日期选择框';

  static defaultProps = {
    width: '250px',
  };

  static propTypes = {
    /** input width */
    width: PropTypes.string,
    /** datePicker prefix info */
    prefixTxt: PropTypes.string.isRequired,
    /** show week info when select certain date */
    week: PropTypes.string.isRequired,
    /** function call on select certain date */
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { prefixTxt, width, week, onChange } = this.props;
    return (
      <span className="basic-container">
        <DatePicker
          className="basic-datepicker"
          style={{ width }}
          onChange={onChange}
        />
        <span className="prefix-text">{prefixTxt}</span>
        <span className="suffix-text">{week}</span>
      </span>
    );
  }
}
