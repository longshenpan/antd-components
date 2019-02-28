import 'antd/lib/dropdown/style';
import _Dropdown from 'antd/lib/dropdown';
import 'antd/lib/tag/style';
import _Tag from 'antd/lib/tag';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import 'antd/lib/checkbox/style';
import _Checkbox from 'antd/lib/checkbox';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import './index.less';

var CheckboxGroup = _Checkbox.Group;

/**
 * 多项选择器用于多选
 */

var MultipleSelector = function (_React$Component) {
  _inherits(MultipleSelector, _React$Component);

  function MultipleSelector(props) {
    _classCallCheck(this, MultipleSelector);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleVisibleChange = function (visible) {
      if (!visible) {
        var selectedKeys = _this.state.selectedKeys;
        var onChange = _this.props.onChange;

        onChange(selectedKeys);
      }
      _this.setState({
        dropdownBoxVisible: visible
      });
    };

    _this.onCheckAllChange = function (e) {
      var _this$props = _this.props,
          data = _this$props.data,
          onChange = _this$props.onChange;

      _this.setState({
        checkedList: e.target.checked ? data : [],
        indeterminate: false,
        checkAll: e.target.checked
      });
      onChange(data);
    };

    _this.onCheckAllWrapper = function () {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          onChange = _this$props2.onChange;
      var toggleCheckedAll = _this.state.toggleCheckedAll;


      _this.setState({
        checkedList: toggleCheckedAll ? [] : data,
        indeterminate: false,
        checkAll: !toggleCheckedAll,
        toggleCheckedAll: !toggleCheckedAll
      });
      onChange(toggleCheckedAll ? [] : data);
    };

    _this.handleCheckChange = function (checkedList) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          data = _this$props3.data;

      _this.setState({
        checkedList: checkedList,
        indeterminate: !!checkedList.length && checkedList.length < data.length,
        checkAll: checkedList.length === data.length
      });
      onChange(checkedList);
    };

    _this.handleTags = function (removedTag) {
      _this.setState({
        checkedList: _this.state.checkedList.filter(function (checked) {
          return checked != removedTag;
        })
      });
      console.log(removedTag);
    };

    _this.generateTags = function (checkedList) {
      return checkedList.map(function (checked) {
        return React.createElement(
          _Tag,
          { closable: true, onClose: function onClose() {
              return _this.handleTags(checked);
            }, key: checked },
          checked
        );
      });
    };

    _this.state = {
      checkedList: [],
      indeterminate: false,
      checkAll: false,
      dropdownBoxVisible: false,
      toggleCheckedAll: false
    };
    return _this;
  }

  MultipleSelector.prototype.render = function render() {
    var dropdownBoxVisible = this.state.dropdownBoxVisible;
    var _props = this.props,
        data = _props.data,
        style = _props.style;

    var dropdownBox = React.createElement(
      'div',
      { className: 'multiple-selector' },
      React.createElement(
        'div',
        { className: 'multiple-selector__checkall' },
        React.createElement(
          _Checkbox,
          {
            indeterminate: this.state.indeterminate,
            onChange: this.onCheckAllChange,
            checked: this.state.checkAll
          },
          '\u5168\u9009'
        )
      ),
      React.createElement(
        'div',
        { className: 'multiple-selector__checklist' },
        React.createElement(CheckboxGroup, {
          options: data,
          value: this.state.checkedList,
          onChange: this.handleCheckChange
        })
      )
    );
    return React.createElement(
      _Dropdown,
      {
        overlay: dropdownBox,
        trigger: ['click'],
        visible: dropdownBoxVisible,
        onVisibleChange: this.handleVisibleChange
      },
      React.createElement(
        'div',
        {
          style: style,
          tabIndex: '999',
          className: classNames({
            'select-input': true,
            'is-empty': !this.state.checkedList.length
          })
        },
        this.state.checkedList.length ? this.generateTags(this.state.checkedList) : '请选择'
      )
    );
  };

  return MultipleSelector;
}(React.Component);

MultipleSelector.displayName = 'MultipleSelector 多项选择器';
MultipleSelector.propTypes = {
  /** call when click checkbox */
  onChange: PropTypes.func.isRequired,
  /** data for render checkbox list */
  data: PropTypes.array,
  /** set trigger-input style */
  style: PropTypes.object
};
export default MultipleSelector;