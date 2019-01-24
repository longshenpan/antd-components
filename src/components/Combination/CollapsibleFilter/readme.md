### 可收缩查询条件筛选器： 

```js
const CollapsibleFilter = require('./index.jsx').default;
const moment = require('moment');

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
];


const fields = [
  {
    name: 'commercialIds',
    label: '要货客户',
    type: 'combinedselector',
    multiple: true,
    data: treeSelectorMockData,
    width:'100%',
    fields:{
      key: 'key',
      title: 'name',
      children: 'children',
      checked: 'checked',
      disabled: 'disabled',
    },
    customizedInfo:{
      searchPlaceHolder: '请输入搜索门店',
      treeRootTitle: '所有门店',
      suffixMsg: ' 门店',
      prefixMsg: '已选',
      inputPlaceHolder: '请输入选择门店',
      clearButton: '清空',
      okButton: '确定',
      clearTips:'移除'
      }
    },
    {
        name: 'applyDate',
        type: 'rangePicker',
        label: '要货时间',
        format: 'YYYY-MM-DD HH:mm',
        showTime: {
          format: 'HH:mm',
          defaultValue: [moment().startOf('day'), moment().endOf('day')],
        },
    },
    {
        name: 'arriveDate',
        type: 'rangePicker',
        label: '到货时间',
        format: 'YYYY-MM-DD HH:mm',
        showTime: {
          format: 'HH:mm',
          defaultValue: [moment().startOf('day'), moment().endOf('day')],
        },
      },
      {
        name: 'templateIds',
        label: '配送模板',
        type: 'select',
        options: [],
        mode: 'multiple',
        maxTagTextLength: 5,
        maxTagCount: 2,
        maxTagPlaceholder: '...',
      },
      {
        name: 'dlIds',
        label: '配送线路',
        type: 'select',
        options: [],
        mode: 'multiple',
        maxTagTextLength: 5,
        maxTagCount: 2,
        maxTagPlaceholder: '...',
      },
      {
        name: 'skuTypeChilders',
        label: '物品分类',
        type: 'combinedSelector',
        multiple: true,
        data: treeSelectorMockData,
        width:'100%',
        customizedInfo: {
          searchPlaceHolder: '物品分类',
          treeRootTitle: '全部分类',
          suffixMsg: ' 个分类',
          inputPlaceHolder: '物品分类',
        },
      },

      {
        name: 'skuNameOrCode',
        label: '模糊查询',
        placeholder: '请输入物品编码/名称查询',
      },
      {
        name: 'creationMethod',
        type: 'checkbox',
        label: '统配',
        options: [{ label: '是', value: '2' },
          { label: '否', value: '1' }],
      },
      {
        name: 'status',
        label: '配送申请单状态',
        type: 'checkbox',
        options: [
          { label: '已申请', value: '1' },
          { label: '已备货', value: '2' },
          { label: '已拣货', value: '3' },
          { label: '已配送', value: '4' },
          { label: '已收货', value: '5' },
          { label: '已拒绝', value: '11' },
        ],
        oneLine: true,
      },
];

<CollapsibleFilter
  fields={fields}
  value={{}}
  status="success"
  onChange={()=>console.log('筛选器触发查询的API')}
  reload={() => console.log('重载筛选器的动作API')}
/>

```
