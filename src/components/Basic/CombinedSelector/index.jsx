import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Input, Dropdown } from 'antd';
import SelectorList from './selectedContent';
import TreeModal from './TreeModal';

import zhCN from './locales/zh-CN';
import LocaleReceiver from '../Locale/LocaleReceiver';

import './index.less';

// 为给定的节点key添加后缀-noChild字符串，方便后续比较操作
const getDelectedDetail = detail => detail.map(i => `${i}-noChild`);

// 计算树形结构所有叶子节点数量
const calculateItemsNum = (data, fields) => {
  let result = 0;
  data.forEach(item => {
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
export default class CombinedSelector extends React.Component {
  static displayName = 'CombinedSelector 组合选择器';

  static defaultProps = {
    multiple: false,
    data: [],
    width: '320px',
    fields: {},
    placement: 'bottomLeft',
  };

  static propTypes = {
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
    placement: PropTypes.oneOf([
      'bottomLeft',
      'bottomCenter',
      'bottomRight',
      'topLeft',
      'topCenter',
      'topRight',
    ]),
  };

  fields = {
    key: 'key',
    title: 'name',
    children: 'children',
    checked: 'checked',
    disabled: 'disabled',
  };

  customizedInfo = {
    searchPlaceHolder: '请输入搜索门店',
    treeRootTitle: '全部门店',
    suffixMsg: ' 家门店',
    inputPlaceHolder: '请选择分组门店',
  };

  constructor(props) {
    super(props);
    this.customizedInfo = Object.assign(
      this.customizedInfo,
      props.customizedInfo
    );

    this.fields = Object.assign(this.fields, props.fields);
    const inputBoxWidth = props.width ? props.width : '160px';

    // 组件初始化时的默认选中项
    const initialSelectedDetail = props.initialSelectedDetail
      ? getDelectedDetail(props.initialSelectedDetail)
      : [];

    // 很关键的index属性代表“根节点”
    this.state = {
      index: '0',
      inputBoxWidth,
      dropdownBoxVisible: false,
      selectedDetail: { '0': initialSelectedDetail },
    };

    // 树形结构中所有节点的key后缀-noChild字符串，并且dataObj是树形结构的扁平化形式
    this.getDataObjectFromTreeData = (() => {
      let data = props.data;
      let dataObj = {};
      const loop = data => {
        data.forEach(item => {
          dataObj[`${item[this.fields.key]}-noChild`] = item;
          if (
            item[this.fields.children] &&
            item[this.fields.children].length > 0
          ) {
            loop(item[this.fields.children]);
          }
        });
      };
      loop(data);
      return () => {
        if (data !== this.props.data) {
          // 数据源改变，重新计算;
          data = this.props.data;
          loop(data);
        }
        return dataObj;
      };
    })();
  }

  // 当选择树形节点，则触发下面操作
  handleTagsChange = v => {
    this.setState({
      selectedDetail: {
        ...this.state.selectedDetail,
        [this.state.index]: v,
      },
    });
  };

  //清空操作不能作用于disabled状态的节点
  handleRemoveAll = () => {
    const { selectedDetail, index } = this.state;
    const treeDataObj = this.getDataObjectFromTreeData();
    // disabled为true的不允许清楚
    const filterResult = selectedDetail[index].filter(key => {
      return treeDataObj[key] && treeDataObj[key].disabled;
    });
    this.setState({
      selectedDetail: {
        [index]: [].concat(filterResult),
      },
    });
  };

  // 从展示列表中删除某个选中节点
  handleRemove = key => {
    const { selectedDetail, index } = this.state;
    const finedIndex = selectedDetail[index].findIndex(
      itemKey => itemKey === key
    );
    let removeSelectedDetail = selectedDetail[index];
    if (finedIndex > -1) {
      removeSelectedDetail.splice(finedIndex, 1);
    }
    this.setState({
      selectedDetail: {
        [index]: removeSelectedDetail,
      },
    });
  };

  //
  handlerVisibleChange = visible => {
    if (!visible) {
      const { selectedDetail, index } = this.state;
      const { onBlurHandle } = this.props;

      // 当前树形结构中所有选中的叶子节点都添加了后缀-noChild,因此传递到外部需要剥离
      const selectedObj = selectedDetail[index].map(i => i.slice(0, -8));

      onBlurHandle(selectedObj);
    }
    this.setState({
      dropdownBoxVisible: visible,
    });
  };

  //展示列表的确认操作
  handlerConfirmClick = () => {
    const { handlerConfirmClick } = this.props;
    const { selectedDetail, index } = this.state;
    const selectedObj = selectedDetail[index].map(i => i.slice(0, -8));
    this.setState({
      dropdownBoxVisible: false,
    });
    if (handlerConfirmClick) {
      handlerConfirmClick(selectedObj);
    }
  };

  // 当接收到新的初始化选择项，则重置内部selectedDetail对象
  componentWillReceiveProps(nextProps) {
    if (nextProps.initialSelectedDetail !== this.props.initialSelectedDetail) {
      this.setState({
        selectedDetail: {
          [this.state.index]: getDelectedDetail(
            nextProps.initialSelectedDetail
          ),
        },
      });
    }
  }

  renderCmp = contextLocale => {
    const {
      locale: customLocale,
      data,
      multiple,
      placement,
      customizedInfo,
    } = this.props;
    const locale = { ...contextLocale, ...customLocale };

    const {
      selectedDetail,
      index,
      dropdownBoxVisible,
      inputBoxWidth,
    } = this.state;

    // 数据结构叶子节点总数，以及选中的叶子节点总数
    const totalItemsNum = calculateItemsNum(data, this.fields);
    const checkedItemsNum = calculateItemsNum(
      selectedDetail[index],
      this.fields
    );

    const { prefixMsg, clearButton, okButton, clearTips } = locale;
    const {
      suffixMsg,
      inputPlaceHolder,
      searchPlaceHolder,
      treeRootTitle,
    } = customizedInfo;

    const selectedMessage =
      `${prefixMsg}${checkedItemsNum}/${totalItemsNum}` + suffixMsg;

    const dropdownBox = (
      <div className="selectorContainer">
        <div className={classnames('tree-selector', { multiple })}>
          <TreeModal
            className="tree-selector__content"
            treeData={data}
            getDataObjectFromTreeData={this.getDataObjectFromTreeData}
            searchPlaceHolder={searchPlaceHolder}
            handleTagsChange={this.handleTagsChange}
            selectedDetail={selectedDetail}
            defaultCheckedKeys={this.props.defaultCheckedKeys}
            index={index}
            fields={this.fields}
            treeRootTitle={treeRootTitle}
          />

          {multiple && (
            <SelectorList
              data={data}
              selectedDetail={selectedDetail}
              onRemoveAll={this.handleRemoveAll}
              onRemove={this.handleRemove}
              checkedItemsNum={checkedItemsNum}
              totalItemsNum={totalItemsNum}
              suffixMsg={suffixMsg}
              prefixMsg={prefixMsg}
              handlerConfirmClick={this.handlerConfirmClick}
              index={index}
              fields={this.fields}
              clearButton={clearButton}
              okButton={okButton}
              clearTips={clearTips}
            />
          )}
        </div>
      </div>
    );

    return (
      <Dropdown
        overlay={dropdownBox}
        trigger={['click']}
        visible={dropdownBoxVisible}
        onVisibleChange={this.handlerVisibleChange}
        placement={placement}
      >
        <Input
          value={checkedItemsNum ? selectedMessage : ''}
          placeholder={inputPlaceHolder}
          readOnly={true}
          style={{ width: inputBoxWidth, height: '30px' }}
        />
      </Dropdown>
    );
  };

  render() {
    return (
      <LocaleReceiver localeContext="CombinedSelector" defaultLocale={zhCN}>
        {this.renderCmp}
      </LocaleReceiver>
    );
  }
}
