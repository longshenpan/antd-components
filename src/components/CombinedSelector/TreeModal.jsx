import React from 'react';
import { Input, Tree } from 'antd';
import isEqual from 'lodash/isEqual';
import TooltipWrapper from './TooltipWrapper';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

class TreeModal extends React.Component {
  constructor(props) {
    super(props);

    // 树形结构创建根节点，为“0-0”;该节点的children就是原本的数据集
    const makeRoot = {
      [props.fields.key]: `0-${this.props.index}`,
      [props.fields.children]: props.treeData,
    };

    this.state = {
      expandedKeys: [`0-${this.props.index}`],
      autoExpandParent: true,
      searchValue: '',
      searchedTreeData: '',
      selectAll: { checked: [], halfChecked: [] },
    };

    if (
      this.props.selectedDetail[this.props.index] &&
      this.props.selectedDetail[this.props.index].length > 0
    ) {
      this.state.selectAll = this.updateSelectAllState(
        makeRoot,
        new Set(this.props.selectedDetail[this.props.index])
      );
    }
    // 过滤掉disabled属性为true的TreeNode
    this.filterDisabled = (() => {
      const { fields, getDataObjectFromTreeData } = this.props;
      const dataObj = getDataObjectFromTreeData();
      // 获取初始默认值后，过滤出disabled为true的值，这意味着用户不可取消。
      const defaultCheckedDisabled = [
        ...this.state.selectAll.checked,
        ...this.props.selectedDetail[this.props.index],
      ].filter(id => {
        return dataObj[id] && dataObj[id][fields.disabled];
      });

      return checked => {
        const dataObj = getDataObjectFromTreeData();
        // 从用户选中列表中，过滤掉disabled为true的值，这意味着用户不可选择
        const checkedNoDisabled = checked.filter(id => {
          return !(dataObj[id] && dataObj[id][fields.disabled]);
        });
        // 返回 用户不可取消的列表 和 用户选中的列表 的合集
        return defaultCheckedDisabled.concat(checkedNoDisabled);
      };
    })();
  }

  // 更新各个父亲节点的选中状态
  // root -> 搜索树的根节点
  // checkedSet -> 选择的集合
  // checkd -> 全选状态的节点集合
  // halfChecked -> 半选状态的节点集合
  updateSelectAllState = (root, checkedSet, checked = [], halfChecked = []) => {
    const { fields } = this.props;
    if (root[fields.children]) {
      for (const i of root[fields.children]) {
        this.updateSelectAllState(i, checkedSet, checked, halfChecked);
      }
      // 计算被选中的子节点个数
      const ck = new Set(checked);
      const hck = new Set(halfChecked);
      let halfFlag = false;
      const number = root[fields.children].reduce((num, node) => {
        if (!halfFlag && hck.has(node[fields.key])) {
          halfFlag = true;
        }
        return (checkedSet.has(`${node[fields.key]}-noChild`) ||
          ck.has(node[fields.key])) &&
          !node[fields.disabled]
          ? num + 1
          : num;
      }, 0);

      const rootChildrenNumber = root[fields.children].reduce((num, node) => {
        return !node[fields.disabled] ? num + 1 : num;
      }, 0);

      // 全部子节点被勾选则状态保存为checked，部分被勾选则halfChecked。
      if (number === rootChildrenNumber && number !== 0) {
        checked.push(root[fields.key]);
      } else if (number !== 0 || halfFlag) {
        halfChecked.push(root[fields.key]);
      }
    }
    return { checked, halfChecked };
  };

  // 返回在一棵树上的某一个等key的节点
  findTheNode = (key, filterTree) => {
    const { fields } = this.props;
    for (const i of filterTree) {
      if (`${i[fields.key]}` === key) {
        return i;
      }
      if (i[fields.children]) {
        const n = this.findTheNode(key, i[fields.children]);
        if (n) return n;
      }
    }
    return null;
  };

  // 返回在filterTree上这个节点和其所有子节点中的叶子节点
  selectAll = (checked, node) => {
    const { fields } = this.props;
    if (node[fields.children] && node[fields.children].length) {
      for (const i of node[fields.children]) {
        this.selectAll(checked, i);
      }
    } else {
      checked.push(`${node[fields.key]}-noChild`);
    }
    return checked;
  };

  onCheck = (checkedKeys, e) => {
    const { treeData, index, fields } = this.props;

    const { searchedTreeData } = this.state;

    const data = searchedTreeData || treeData;

    const key = e.node.props.eventKey;

    const noChildCheckedKeys = checkedKeys.checked
      ? checkedKeys.checked.filter(i => i && i.indexOf('-noChild') > 0)
      : checkedKeys.filter(i => i.indexOf('-noChild') > 0);

    const makeRoot = { [fields.key]: `0-${index}`, [fields.children]: data }; // 添加根节点到树中
    // 找到在点击node在自维护的树中位置
    let n;
    if (e.node.props.eventKey === `0-${index}`) {
      // 根节点
      n = makeRoot;
      if (!data.length) {
        return; // 当在空树中点击选择全部将不会有任何操作
      }
    } else {
      // 非根节点
      n = this.findTheNode(key.split('-noChild')[0], data);
    }

    // 点击标记的所有节点
    const selectAll = this.selectAll([], n);

    // 根据操作选择是删除还是添加节点
    let checked;
    if (e.checked && !this.state.selectAll.checked.some(x => x === key)) {
      // 去重
      checked = Array.from(new Set([...selectAll, ...noChildCheckedKeys]));
    } else {
      const tmp = new Set(selectAll);
      checked = noChildCheckedKeys.filter(x => !tmp.has(x));
    }

    // 更新props
    this.props.handleTagsChange(this.filterDisabled(checked));

    // 维护非叶子节点
    this.setState({
      selectAll: this.updateSelectAllState(makeRoot, new Set(checked)),
    });
  };

  componentWillReceiveProps(nextProps) {
    const { fields } = this.props;
    if (this.props.treeData !== nextProps.treeData) {
      const makeRoot = {
        [fields.key]: `0-${nextProps.index}`,
        [fields.children]: nextProps.treeData,
      };

      // 添加根节点到树中
      this.setState({
        expandedKeys: [`0-${nextProps.index}`],
        autoExpandParent: true,
        checkedKeys: nextProps.selectedDetail[nextProps.index] || [],
        selectedKeys: [],
        searchValue: '',
        searchedTreeData: '',
        selectAll: this.updateSelectAllState(
          makeRoot,
          new Set(nextProps.selectedDetail[nextProps.index])
        ), // 初始化父节点状态
      });
    } else if (this.props.selectedDetail !== nextProps.selectedDetail) {
      const makeRoot = {
        [fields.key]: `0-${this.props.index}`,
        [fields.children]: this.state.searchedTreeData || nextProps.treeData,
      }; // 添加根节点到树中
      this.setState({
        selectAll: this.updateSelectAllState(
          makeRoot,
          new Set(nextProps.selectedDetail[nextProps.index])
        ), // 初始化父节点状态
      });
    }
  }

  onExpand = expandedKeys => {
    // if not set autoExpandParent to false, if children expanded, parent can not cllapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  renderTreeNodes = data =>
    data.map(item => {
      const { fields } = this.props;
      let realKey;
      const name = item[fields.title];
      const { searchValue } = this.state;
      const index = name.indexOf(searchValue);
      const beforeStr = name.substr(0, index);
      const afterStr = name.substr(index + searchValue.length);
      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="supply-component-multfilter--searched-text">
              {searchValue}
            </span>
            {afterStr}
          </span>
        ) : (
          <span>{name}</span>
        );
      realKey = item[fields.key];

      if (item[fields.children] && item[fields.children].length > 0) {
        return (
          <TreeNode
            disabled={item.disabled}
            title={<TooltipWrapper name={title} />}
            key={realKey}
          >
            {this.renderTreeNodes(item[fields.children], realKey)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          disabled={item[fields.disabled]}
          title={<TooltipWrapper name={title} />}
          key={`${realKey}-noChild`}
        />
      );
    });

  // 搜索功能有问题！！只能过滤两层
  onSearch = e => {
    const { fields } = this.props;
    const value = e.target.value;
    const { treeData, selectedDetail, index } = this.props;

    // 第一层中含有该搜索关键字的节点
    const fatherData = treeData.filter(
      i => i[fields.title] && i[fields.title].indexOf(value) > -1
    );

    const fatherKeys = fatherData.map(i => i[fields.key]);

    // 第二层中含有该关键字的节点
    const childData = treeData.filter(i => {
      if (i[fields.children] && i[fields.children].length) {
        return i[fields.children].some(
          a => a[fields.title] && a[fields.title].indexOf(value) > -1
        );
      }
    });

    // 第二层包含关键字的节点的keys集合
    const childKeys = childData.map(i => i[fields.key]);

    // 第二层节点的子节点如果包含搜索关键字，则添加到children中
    const filteredChild = childData.map(i => {
      const child = i[fields.children].filter(
        a => a[fields.title] && a[fields.title].indexOf(value) > -1
      );
      return {
        ...i,
        [fields.children]: child,
      };
    });

    // 包含伪造的根节点在内，第一层和第二层节点
    const expandedKeys = childKeys
      .concat(fatherKeys)
      .map(i => `${i}`)
      .concat(`0-${this.props.index}`);

    let target;
    if (isEqual(fatherData, treeData)) {
      target = '';
    } else {
      // 父节点和包含children的子节点
      const obj = fatherData.concat(filteredChild).reduce((x, y) => {
        const copy = Object.assign({}, x);
        copy[y[fields.key]] = y;
        return copy;
      }, {});
      target = Object.keys(obj).map(i => obj[i]);
    }
    const makeRoot = {
      [fields.key]: `0-${index}`,
      [fields.children]: target || treeData,
    };

    // 添加根节点到树中
    this.setState({
      searchedTreeData: target,
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
      selectAll: this.updateSelectAllState(
        makeRoot,
        new Set(selectedDetail[index])
      ), // 搜索条件改变时刷新父节点状态
    });
  };

  render() {
    const {
      searchPlaceHolder,
      treeData,
      index,
      selectedDetail,
      treeRootTitle,
    } = this.props;
    const { searchedTreeData, selectAll } = this.state;
    const data = searchedTreeData || treeData;
    return (
      <div className="supply-component-multfilter__content">
        <h2 className="supply-component-multfilter__title">
          {searchPlaceHolder}
        </h2>
        {treeData.length ? (
          <div className="supply-component-multfilter__right-content">
            <div className="supply-component-multfilter__search">
              <Search
                placeholder={`${searchPlaceHolder}`}
                onChange={this.onSearch}
                value={this.state.searchValue}
              />
            </div>
            <Tree
              className="supply-component-multfilter__tree"
              checkable
              defaultExpandAll
              checkStrictly
              onExpand={this.onExpand}
              expandedKeys={this.state.expandedKeys}
              autoExpandParent={this.state.autoExpandParent}
              onCheck={this.onCheck}
              checkedKeys={{
                checked:
                  [...(selectedDetail[index] || []), ...selectAll.checked] ||
                  [],
                halfChecked: selectAll.halfChecked || [],
              }}
            >
              <TreeNode title={treeRootTitle} key={`0-${index}`}>
                {this.renderTreeNodes(data)}
              </TreeNode>
            </Tree>
          </div>
        ) : (
          <div className="supply-component-multfilter--no-item">
            {`暂无${name}`}
          </div>
        )}
      </div>
    );
  }
}
export default TreeModal;
