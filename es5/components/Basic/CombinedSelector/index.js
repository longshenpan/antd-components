import 'antd/lib/dropdown/style';
import _Dropdown from 'antd/lib/dropdown';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import _extends from 'babel-runtime/helpers/extends';
import _Object$assign from 'babel-runtime/core-js/object/assign';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SelectorList from './selectedContent';
import TreeModal from './TreeModal';

import zhCN from './locales/zh-CN';
import LocaleReceiver from '../Locale/LocaleReceiver';

import './index.less';

// 为给定的节点key添加后缀-noChild字符串，方便后续比较操作
var getDelectedDetail = function getDelectedDetail(detail) {
  return detail.map(function (i) {
    return i + '-noChild';
  });
};

// 计算树形结构所有叶子节点数量
var calculateItemsNum = function calculateItemsNum(data, fields) {
  var result = 0;
  data.forEach(function (item) {
    if (item[fields.children]) {
      result += calculateItemsNum(item[fields.children], fields);
    } else {
      result += 1;
    }
  });
  return result;
};
/**
 * 集成了树形选择器和展示列表的复合选择器
 *
 */

var CombinedSelector = function (_React$Component) {
  _inherits(CombinedSelector, _React$Component);

  function CombinedSelector(props) {
    _classCallCheck(this, CombinedSelector);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.customizedInfo = _Object$assign(_this.customizedInfo, props.customizedInfo);

    _this.fields = _Object$assign(_this.fields, props.fields);
    var inputBoxWidth = props.width ? props.width : '160px';

    // 组件初始化时的默认选中项
    var initialSelectedDetail = props.initialSelectedDetail ? getDelectedDetail(props.initialSelectedDetail) : [];

    // 很关键的index属性代表“根节点”
    _this.state = {
      index: '0',
      inputBoxWidth: inputBoxWidth,
      dropdownBoxVisible: false,
      selectedDetail: { '0': initialSelectedDetail }
    };

    // 树形结构中所有节点的key后缀-noChild字符串，并且dataObj是树形结构的扁平化形式
    _this.getDataObjectFromTreeData = function () {
      var data = props.data;
      var dataObj = {};
      var loop = function loop(data) {
        data.forEach(function (item) {
          dataObj[item[_this.fields.key] + '-noChild'] = item;
          if (item[_this.fields.children] && item[_this.fields.children].length > 0) {
            loop(item[_this.fields.children]);
          }
        });
      };
      loop(data);
      return function () {
        if (data !== _this.props.data) {
          // 数据源改变，重新计算;
          data = _this.props.data;
          loop(data);
        }
        return dataObj;
      };
    }();
    return _this;
  }

  // 当选择树形节点，则触发下面操作


  //清空操作不能作用于disabled状态的节点


  // 从展示列表中删除某个选中节点


  //


  //展示列表的确认操作


  // 当接收到新的初始化选择项，则重置内部selectedDetail对象
  CombinedSelector.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.initialSelectedDetail !== this.props.initialSelectedDetail) {
      var _selectedDetail;

      this.setState({
        selectedDetail: (_selectedDetail = {}, _selectedDetail[this.state.index] = getDelectedDetail(nextProps.initialSelectedDetail), _selectedDetail)
      });
    }
  };

  CombinedSelector.prototype.render = function render() {
    return React.createElement(
      LocaleReceiver,
      { localeContext: 'CombinedSelector', defaultLocale: zhCN },
      this.renderCmp
    );
  };

  return CombinedSelector;
}(React.Component);

CombinedSelector.displayName = 'CombinedSelector 组合选择器';
CombinedSelector.defaultProps = {
  multiple: false,
  data: [],
  width: '320px',
  fields: {},
  placement: 'bottomLeft'
};
CombinedSelector.propTypes = {
  /** indicator for whether show select list */
  multiple: PropTypes.bool,
  /** tree-like array for render tree nodes */
  data: PropTypes.array.isRequired,
  /** when blur,return selected keys */
  onBlurHandle: PropTypes.func.isRequired,
  /** input width */
  width: PropTypes.string,
  /** call when click '确认' button  */
  handlerConfirmClick: PropTypes.func,
  /** default selected item key */
  initialSelectedDetail: PropTypes.array,
  /** mapping data key-value internally */
  fields: PropTypes.object,
  /** builtin info in the selector */
  customizedInfo: PropTypes.object,
  /** set position of the pop menu */
  placement: PropTypes.oneOf(['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'])
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.fields = {
    key: 'key',
    title: 'name',
    children: 'children',
    checked: 'checked',
    disabled: 'disabled'
  };
  this.customizedInfo = {
    searchPlaceHolder: '请输入搜索门店',
    treeRootTitle: '全部门店',
    suffixMsg: ' 家门店',
    inputPlaceHolder: '请选择分组门店'
  };

  this.handleTagsChange = function (v) {
    var _extends2;

    _this2.setState({
      selectedDetail: _extends({}, _this2.state.selectedDetail, (_extends2 = {}, _extends2[_this2.state.index] = v, _extends2))
    });
  };

  this.handleRemoveAll = function () {
    var _selectedDetail2;

    var _state = _this2.state,
        selectedDetail = _state.selectedDetail,
        index = _state.index;

    var treeDataObj = _this2.getDataObjectFromTreeData();
    // disabled为true的不允许清楚
    var filterResult = selectedDetail[index].filter(function (key) {
      return treeDataObj[key] && treeDataObj[key].disabled;
    });
    _this2.setState({
      selectedDetail: (_selectedDetail2 = {}, _selectedDetail2[index] = [].concat(filterResult), _selectedDetail2)
    });
  };

  this.handleRemove = function (key) {
    var _selectedDetail3;

    var _state2 = _this2.state,
        selectedDetail = _state2.selectedDetail,
        index = _state2.index;

    var finedIndex = selectedDetail[index].findIndex(function (itemKey) {
      return itemKey === key;
    });
    var removeSelectedDetail = selectedDetail[index];
    if (finedIndex > -1) {
      removeSelectedDetail.splice(finedIndex, 1);
    }
    _this2.setState({
      selectedDetail: (_selectedDetail3 = {}, _selectedDetail3[index] = removeSelectedDetail, _selectedDetail3)
    });
  };

  this.handlerVisibleChange = function (visible) {
    if (!visible) {
      var _state3 = _this2.state,
          selectedDetail = _state3.selectedDetail,
          index = _state3.index;
      var onBlurHandle = _this2.props.onBlurHandle;

      // 当前树形结构中所有选中的叶子节点都添加了后缀-noChild,因此传递到外部需要剥离

      var selectedObj = selectedDetail[index].map(function (i) {
        return i.slice(0, -8);
      });

      onBlurHandle(selectedObj);
    }
    _this2.setState({
      dropdownBoxVisible: visible
    });
  };

  this.handlerConfirmClick = function () {
    var handlerConfirmClick = _this2.props.handlerConfirmClick;
    var _state4 = _this2.state,
        selectedDetail = _state4.selectedDetail,
        index = _state4.index;

    var selectedObj = selectedDetail[index].map(function (i) {
      return i.slice(0, -8);
    });
    _this2.setState({
      dropdownBoxVisible: false
    });
    if (handlerConfirmClick) {
      handlerConfirmClick(selectedObj);
    }
  };

  this.renderCmp = function (contextLocale) {
    var _props = _this2.props,
        customLocale = _props.locale,
        data = _props.data,
        multiple = _props.multiple,
        placement = _props.placement,
        customizedInfo = _props.customizedInfo;

    var locale = _extends({}, contextLocale, customLocale);

    var _state5 = _this2.state,
        selectedDetail = _state5.selectedDetail,
        index = _state5.index,
        dropdownBoxVisible = _state5.dropdownBoxVisible,
        inputBoxWidth = _state5.inputBoxWidth;

    // 数据结构叶子节点总数，以及选中的叶子节点总数

    var totalItemsNum = calculateItemsNum(data, _this2.fields);
    var checkedItemsNum = calculateItemsNum(selectedDetail[index], _this2.fields);

    var prefixMsg = locale.prefixMsg,
        clearButton = locale.clearButton,
        okButton = locale.okButton,
        clearTips = locale.clearTips;
    var suffixMsg = customizedInfo.suffixMsg,
        inputPlaceHolder = customizedInfo.inputPlaceHolder,
        searchPlaceHolder = customizedInfo.searchPlaceHolder,
        treeRootTitle = customizedInfo.treeRootTitle;


    var selectedMessage = '' + prefixMsg + checkedItemsNum + '/' + totalItemsNum + suffixMsg;

    var dropdownBox = React.createElement(
      'div',
      { className: 'selectorContainer' },
      React.createElement(
        'div',
        { className: classnames('tree-selector', { multiple: multiple }) },
        React.createElement(TreeModal, {
          className: 'tree-selector__content',
          treeData: data,
          getDataObjectFromTreeData: _this2.getDataObjectFromTreeData,
          searchPlaceHolder: searchPlaceHolder,
          handleTagsChange: _this2.handleTagsChange,
          selectedDetail: selectedDetail,
          defaultCheckedKeys: _this2.props.defaultCheckedKeys,
          index: index,
          fields: _this2.fields,
          treeRootTitle: treeRootTitle
        }),
        multiple && React.createElement(SelectorList, {
          data: data,
          selectedDetail: selectedDetail,
          onRemoveAll: _this2.handleRemoveAll,
          onRemove: _this2.handleRemove,
          checkedItemsNum: checkedItemsNum,
          totalItemsNum: totalItemsNum,
          suffixMsg: suffixMsg,
          prefixMsg: prefixMsg,
          handlerConfirmClick: _this2.handlerConfirmClick,
          index: index,
          fields: _this2.fields,
          clearButton: clearButton,
          okButton: okButton,
          clearTips: clearTips
        })
      )
    );

    return React.createElement(
      _Dropdown,
      {
        overlay: dropdownBox,
        trigger: ['click'],
        visible: dropdownBoxVisible,
        onVisibleChange: _this2.handlerVisibleChange,
        placement: placement
      },
      React.createElement(_Input, {
        value: checkedItemsNum ? selectedMessage : '',
        placeholder: inputPlaceHolder,
        readOnly: true,
        style: { width: inputBoxWidth, height: '30px' }
      })
    );
  };
};

export default CombinedSelector;