### 级联选择器：

```js
const { Cascader } =require('antd');
require('../example/shared/styles/index.less');

const cascadeOptions = [
  {
    value: 'sichuan',
    label: '四川省',
    children: [
      {
        value: 'chengdu',
        label: '成都市',
        children: [
          {
            value: 'jinli',
            label: '锦里',
          },
          {
            value: 'wuhouci',
            label: '武侯祠',
          },
        ],
      },
    ],
  },
  {
    value: 'shannxi',
    label: '陕西省',
    children: [
      {
        value: "xi'an",
        label: '西安市',
        children: [
          {
            value: 'zhuquemen',
            label: '朱雀门',
          },
          {
            value: 'xuanwumen',
            label: '玄武门',
          },
        ],
      },
    ],
  },
];
<div>
<Cascader
  style={{ width: '200px' }}
  options={cascadeOptions}
  placeholder="请选择"
/>
</div>
```
