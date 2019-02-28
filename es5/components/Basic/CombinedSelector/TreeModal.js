import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Object$assign from 'babel-runtime/core-js/object/assign';
import _extends from 'babel-runtime/helpers/extends';
import _Array$from from 'babel-runtime/core-js/array/from';
import _getIterator from 'babel-runtime/core-js/get-iterator';
import _Set from 'babel-runtime/core-js/set';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/tree/style';
import _Tree from 'antd/lib/tree';
import React from 'react';

import isEqual from 'lodash/isEqual';
import TooltipWrapper from './TooltipWrapper';

var TreeNode = _Tree.TreeNode;
var Search = _Input.Search;

var TreeModal = function (_React$Component) {
  _inherits(TreeModal, _React$Component);

  function TreeModal(props) {
    var _makeRoot;

    _classCallCheck(this, TreeModal);

    // 树形结构创建根节点，为“0-0”;该节点的children就是原本的数据集
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var makeRoot = (_makeRoot = {}, _makeRoot[props.fields.key] = '0-' + _this.props.index, _makeRoot[props.fields.children] = props.treeData, _makeRoot);

    _this.state = {
      expandedKeys: ['0-' + _this.props.index],
      autoExpandParent: true,
      searchValue: '',
      searchedTreeData: '',
      selectAll: { checked: [], halfChecked: [] }
    };

    if (_this.props.selectedDetail[_this.props.index] && _this.props.selectedDetail[_this.props.index].length > 0) {
      _this.state.selectAll = _this.updateSelectAllState(makeRoot, new _Set(_this.props.selectedDetail[_this.props.index]));
    }
    // 过滤掉disabled属性为true的TreeNode
    _this.filterDisabled = function () {
      var _this$props = _this.props,
          fields = _this$props.fields,
          getDataObjectFromTreeData = _this$props.getDataObjectFromTreeData;

      var dataObj = getDataObjectFromTreeData();
      // 获取初始默认值后，过滤出disabled为true的值，这意味着用户不可取消。
      var defaultCheckedDisabled = [].concat(_this.state.selectAll.checked, _this.props.selectedDetail[_this.props.index]).filter(function (id) {
        return dataObj[id] && dataObj[id][fields.disabled];
      });

      return function (checked) {
        var dataObj = getDataObjectFromTreeData();
        // 从用户选中列表中，过滤掉disabled为true的值，这意味着用户不可选择
        var checkedNoDisabled = checked.filter(function (id) {
          return !(dataObj[id] && dataObj[id][fields.disabled]);
        });
        // 返回 用户不可取消的列表 和 用户选中的列表 的合集
        return defaultCheckedDisabled.concat(checkedNoDisabled);
      };
    }();
    return _this;
  }

  // 更新各个父亲节点的选中状态
  // root -> 搜索树的根节点
  // checkedSet -> 选择的集合
  // checkd -> 全选状态的节点集合
  // halfChecked -> 半选状态的节点集合


  // 返回在一棵树上的某一个等key的节点


  // 返回在filterTree上这个节点和其所有子节点中的叶子节点


  TreeModal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var fields = this.props.fields;

    if (this.props.treeData !== nextProps.treeData) {
      var _makeRoot2;

      var makeRoot = (_makeRoot2 = {}, _makeRoot2[fields.key] = '0-' + nextProps.index, _makeRoot2[fields.children] = nextProps.treeData, _makeRoot2);

      // 添加根节点到树中
      this.setState({
        expandedKeys: ['0-' + nextProps.index],
        autoExpandParent: true,
        checkedKeys: nextProps.selectedDetail[nextProps.index] || [],
        selectedKeys: [],
        searchValue: '',
        searchedTreeData: '',
        selectAll: this.updateSelectAllState(makeRoot, new _Set(nextProps.selectedDetail[nextProps.index])) // 初始化父节点状态
      });
    } else if (this.props.selectedDetail !== nextProps.selectedDetail) {
      var _makeRoot4;

      var _makeRoot3 = (_makeRoot4 = {}, _makeRoot4[fields.key] = '0-' + this.props.index, _makeRoot4[fields.children] = this.state.searchedTreeData || nextProps.treeData, _makeRoot4); // 添加根节点到树中
      this.setState({
        selectAll: this.updateSelectAllState(_makeRoot3, new _Set(nextProps.selectedDetail[nextProps.index])) // 初始化父节点状态
      });
    }
  };

  // 搜索功能有问题！！只能过滤两层


  TreeModal.prototype.render = function render() {
    var _props = this.props,
        searchPlaceHolder = _props.searchPlaceHolder,
        treeData = _props.treeData,
        index = _props.index,
        selectedDetail = _props.selectedDetail,
        treeRootTitle = _props.treeRootTitle;
    var _state = this.state,
        searchedTreeData = _state.searchedTreeData,
        selectAll = _state.selectAll;

    var data = searchedTreeData || treeData;
    return React.createElement(
      'div',
      { className: 'supply-component-multfilter__content' },
      React.createElement(
        'h2',
        { className: 'supply-component-multfilter__title' },
        searchPlaceHolder
      ),
      treeData.length ? React.createElement(
        'div',
        { className: 'supply-component-multfilter__right-content' },
        React.createElement(
          'div',
          { className: 'supply-component-multfilter__search' },
          React.createElement(Search, {
            placeholder: '' + searchPlaceHolder,
            onChange: this.onSearch,
            value: this.state.searchValue
          })
        ),
        React.createElement(
          _Tree,
          {
            className: 'supply-component-multfilter__tree',
            checkable: true,
            defaultExpandAll: true,
            checkStrictly: true,
            onExpand: this.onExpand,
            expandedKeys: this.state.expandedKeys,
            autoExpandParent: this.state.autoExpandParent,
            onCheck: this.onCheck,
            checkedKeys: {
              checked: [].concat(selectedDetail[index] || [], selectAll.checked) || [],
              halfChecked: selectAll.halfChecked || []
            }
          },
          React.createElement(
            TreeNode,
            { title: treeRootTitle, key: '0-' + index },
            this.renderTreeNodes(data)
          )
        )
      ) : React.createElement(
        'div',
        { className: 'supply-component-multfilter--no-item' },
        '\u6682\u65E0' + name
      )
    );
  };

  return TreeModal;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.updateSelectAllState = function (root, checkedSet) {
    var checked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var halfChecked = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var fields = _this2.props.fields;

    if (root[fields.children]) {
      for (var _iterator = root[fields.children], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var i = _ref;

        _this2.updateSelectAllState(i, checkedSet, checked, halfChecked);
      }
      // 计算被选中的子节点个数
      var ck = new _Set(checked);
      var hck = new _Set(halfChecked);
      var halfFlag = false;
      var number = root[fields.children].reduce(function (num, node) {
        if (!halfFlag && hck.has(node[fields.key])) {
          halfFlag = true;
        }
        return (checkedSet.has(node[fields.key] + '-noChild') || ck.has(node[fields.key])) && !node[fields.disabled] ? num + 1 : num;
      }, 0);

      var rootChildrenNumber = root[fields.children].reduce(function (num, node) {
        return !node[fields.disabled] ? num + 1 : num;
      }, 0);

      // 全部子节点被勾选则状态保存为checked，部分被勾选则halfChecked。
      if (number === rootChildrenNumber && number !== 0) {
        checked.push(root[fields.key]);
      } else if (number !== 0 || halfFlag) {
        halfChecked.push(root[fields.key]);
      }
    }
    return { checked: checked, halfChecked: halfChecked };
  };

  this.findTheNode = function (key, filterTree) {
    var fields = _this2.props.fields;

    for (var _iterator2 = filterTree, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var i = _ref2;

      if ('' + i[fields.key] === key) {
        return i;
      }
      if (i[fields.children]) {
        var n = _this2.findTheNode(key, i[fields.children]);
        if (n) return n;
      }
    }
    return null;
  };

  this.selectAll = function (checked, node) {
    var fields = _this2.props.fields;

    if (node[fields.children] && node[fields.children].length) {
      for (var _iterator3 = node[fields.children], _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _getIterator(_iterator3);;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var i = _ref3;

        _this2.selectAll(checked, i);
      }
    } else {
      checked.push(node[fields.key] + '-noChild');
    }
    return checked;
  };

  this.onCheck = function (checkedKeys, e) {
    var _makeRoot5;

    var _props2 = _this2.props,
        treeData = _props2.treeData,
        index = _props2.index,
        fields = _props2.fields;
    var searchedTreeData = _this2.state.searchedTreeData;


    var data = searchedTreeData || treeData;

    var key = e.node.props.eventKey;

    var noChildCheckedKeys = checkedKeys.checked ? checkedKeys.checked.filter(function (i) {
      return i && i.indexOf('-noChild') > 0;
    }) : checkedKeys.filter(function (i) {
      return i.indexOf('-noChild') > 0;
    });

    var makeRoot = (_makeRoot5 = {}, _makeRoot5[fields.key] = '0-' + index, _makeRoot5[fields.children] = data, _makeRoot5); // 添加根节点到树中
    // 找到在点击node在自维护的树中位置
    var n = void 0;
    if (e.node.props.eventKey === '0-' + index) {
      // 根节点
      n = makeRoot;
      if (!data.length) {
        return; // 当在空树中点击选择全部将不会有任何操作
      }
    } else {
      // 非根节点
      n = _this2.findTheNode(key.split('-noChild')[0], data);
    }

    // 点击标记的所有节点
    var selectAll = _this2.selectAll([], n);

    // 根据操作选择是删除还是添加节点
    var checked = void 0;
    if (e.checked && !_this2.state.selectAll.checked.some(function (x) {
      return x === key;
    })) {
      // 去重
      checked = _Array$from(new _Set([].concat(selectAll, noChildCheckedKeys)));
    } else {
      var tmp = new _Set(selectAll);
      checked = noChildCheckedKeys.filter(function (x) {
        return !tmp.has(x);
      });
    }

    // 更新props
    _this2.props.handleTagsChange(_this2.filterDisabled(checked));

    // 维护非叶子节点
    _this2.setState({
      selectAll: _this2.updateSelectAllState(makeRoot, new _Set(checked))
    });
  };

  this.onExpand = function (expandedKeys) {
    // if not set autoExpandParent to false, if children expanded, parent can not cllapse.
    // or, you can remove all expanded children keys.
    _this2.setState({
      expandedKeys: expandedKeys,
      autoExpandParent: false
    });
  };

  this.renderTreeNodes = function (data) {
    return data.map(function (item) {
      var fields = _this2.props.fields;

      var realKey = void 0;
      var name = item[fields.title];
      var searchValue = _this2.state.searchValue;

      var index = name.indexOf(searchValue);
      var beforeStr = name.substr(0, index);
      var afterStr = name.substr(index + searchValue.length);
      var title = index > -1 ? React.createElement(
        'span',
        null,
        beforeStr,
        React.createElement(
          'span',
          { className: 'supply-component-multfilter--searched-text' },
          searchValue
        ),
        afterStr
      ) : React.createElement(
        'span',
        null,
        name
      );
      realKey = item[fields.key];

      if (item[fields.children] && item[fields.children].length > 0) {
        return React.createElement(
          TreeNode,
          {
            disabled: item.disabled,
            title: React.createElement(TooltipWrapper, { name: title }),
            key: realKey
          },
          _this2.renderTreeNodes(item[fields.children], realKey)
        );
      }
      return React.createElement(TreeNode, {
        disabled: item[fields.disabled],
        title: React.createElement(TooltipWrapper, { name: title }),
        key: realKey + '-noChild'
      });
    });
  };

  this.onSearch = function (e) {
    var _makeRoot6;

    var fields = _this2.props.fields;

    var value = e.target.value;
    var _props3 = _this2.props,
        treeData = _props3.treeData,
        selectedDetail = _props3.selectedDetail,
        index = _props3.index;

    // 第一层中含有该搜索关键字的节点

    var fatherData = treeData.filter(function (i) {
      return i[fields.title] && i[fields.title].indexOf(value) > -1;
    });

    var fatherKeys = fatherData.map(function (i) {
      return i[fields.key];
    });

    // 第二层中含有该关键字的节点
    var childData = treeData.filter(function (i) {
      if (i[fields.children] && i[fields.children].length) {
        return i[fields.children].some(function (a) {
          return a[fields.title] && a[fields.title].indexOf(value) > -1;
        });
      }
    });

    // 第二层包含关键字的节点的keys集合
    var childKeys = childData.map(function (i) {
      return i[fields.key];
    });

    // 第二层节点的子节点如果包含搜索关键字，则添加到children中
    var filteredChild = childData.map(function (i) {
      var _extends2;

      var child = i[fields.children].filter(function (a) {
        return a[fields.title] && a[fields.title].indexOf(value) > -1;
      });
      return _extends({}, i, (_extends2 = {}, _extends2[fields.children] = child, _extends2));
    });

    // 包含伪造的根节点在内，第一层和第二层节点
    var expandedKeys = childKeys.concat(fatherKeys).map(function (i) {
      return '' + i;
    }).concat('0-' + _this2.props.index);

    var target = void 0;
    if (isEqual(fatherData, treeData)) {
      target = '';
    } else {
      // 父节点和包含children的子节点
      var obj = fatherData.concat(filteredChild).reduce(function (x, y) {
        var copy = _Object$assign({}, x);
        copy[y[fields.key]] = y;
        return copy;
      }, {});
      target = _Object$keys(obj).map(function (i) {
        return obj[i];
      });
    }
    var makeRoot = (_makeRoot6 = {}, _makeRoot6[fields.key] = '0-' + index, _makeRoot6[fields.children] = target || treeData, _makeRoot6);

    // 添加根节点到树中
    _this2.setState({
      searchedTreeData: target,
      expandedKeys: expandedKeys,
      searchValue: value,
      autoExpandParent: true,
      selectAll: _this2.updateSelectAllState(makeRoot, new _Set(selectedDetail[index])) // 搜索条件改变时刷新父节点状态
    });
  };
};

export default TreeModal;