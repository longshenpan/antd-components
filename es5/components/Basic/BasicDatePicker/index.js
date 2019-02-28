import 'antd/lib/date-picker/style';
import _DatePicker from 'antd/lib/date-picker';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import './index.less';

/**
 * 具有星期提示信息和前缀信息的基础日期选择器
 */

var BasicDatePicker = function (_React$Component) {
  _inherits(BasicDatePicker, _React$Component);

  function BasicDatePicker() {
    _classCallCheck(this, BasicDatePicker);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  BasicDatePicker.prototype.render = function render() {
    var _props = this.props,
        prefixTxt = _props.prefixTxt,
        width = _props.width,
        week = _props.week,
        onChange = _props.onChange;

    return React.createElement(
      'span',
      { className: 'basic-container' },
      React.createElement(_DatePicker, {
        className: 'basic-datepicker',
        style: { width: width },
        onChange: onChange
      }),
      React.createElement(
        'span',
        { className: 'prefix-text' },
        prefixTxt
      ),
      React.createElement(
        'span',
        { className: 'suffix-text' },
        week
      )
    );
  };

  return BasicDatePicker;
}(React.Component);

BasicDatePicker.displayName = 'BasicDatePicker 日期选择框';
BasicDatePicker.defaultProps = {
  width: '250px'
};
BasicDatePicker.propTypes = {
  /** input width */
  width: PropTypes.string,
  /** datePicker prefix info */
  prefixTxt: PropTypes.string.isRequired,
  /** show week info when select certain date */
  week: PropTypes.string.isRequired,
  /** function call on select certain date */
  onChange: PropTypes.func.isRequired
};
export default BasicDatePicker;