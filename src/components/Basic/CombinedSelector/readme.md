### 复合选择器： 

```js
const CombinedSelector = require('./index.jsx').default;

const treeSelectorMockData = [
  {
    name: '0-0',
    key: '0-5',
    children: [
      {
        name: '面食',
        key: '0-0-0',
        children: [
          { name: '米粉', key: '0-0-0-0', disabled: true },
          { name: '味精', key: '0-0-0-1' },
          { name: '大蒜', key: '0-0-0-2' },
        ],
      },
      {
        name: '肉类',
        key: '0-0-1',
        children: [
          { name: '大肉', key: '0-0-1-0', disabled: true },
          { name: '中肉', key: '0-0-1-1' },
          { name: '小肉', key: '0-0-1-2' },
        ],
      },
      { name: '伪肉类', key: '0-0-2' },
    ],
  },
  {
    name: '0-1',
    key: '0-1',
    children: [
      {
        name: '0-1-0',
        key: '0-1-0',
        children: [
          { name: '0-1-0-0', key: '0-1-0-0' },
          { name: '0-1-0-1', key: '0-1-0-1' },
          { name: '0-1-0-2', key: '0-1-0-2' },
        ],
      },
      {
        name: '0-1-1',
        key: '0-1-1',
        children: [
          { name: '0-1-1-0', key: '0-1-1-0' },
          { name: '0-1-1-1', key: '0-1-1-1' },
          { name: '0-1-1-2', key: '0-1-1-2' },
        ],
      },
      { name: '0-1-2', key: '0-1-2' },
    ],
  },
  { name: '0-2', key: '0-2' },
];
initialState = {treeSelectorMultipleData: treeSelectorMockData,};

<CombinedSelector
  multiple
  width="320px"
  selectable={true}
  placement='topLeft'
  data={state.treeSelectorMultipleData}
  onBlurHandle={(selectedItems,selectedKeys)=>{ console.log('组件失焦后返回键值:', selectedKeys);
    console.log('组件失焦后返回数据:', selectedItems);}}
  handlerConfirmClick={(selectedItems,selectedKeys)=>{ console.log('组件失焦后返回键值:', selectedKeys);
    console.log('组件失焦后返回数据:', selectedItems);}}
  initialSelectedDetail={['0-1-1-0', '0-0-0-0']}
  fields={{
    key: 'key',
    title: 'name',
    children: 'children',
    checked: 'checked',
    disabled: 'disabled',
  }}
  customizedInfo = {{
    searchPlaceHolder: '请输入搜索门店',
    treeRootTitle: '全部门店',
    suffixMsg: ' 家门店',
    inputPlaceHolder: '请选择分组门店',
  }}
/>
```
