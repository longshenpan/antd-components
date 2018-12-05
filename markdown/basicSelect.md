### 基础选择框：

```js
const {Select} = require('antd');
const Option = Select.Option;
require('antd/dist/antd.less');

<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems: 'center',margin:'40px 20px'}}>
<Select defaultValue="lucy" style={{ width: 120 }} onChange={(value)=>console.log(value)}>
      <Option value="jack">杰克</Option>
      <Option value="lucy">露西</Option>
      <Option value="disabled">不可名</Option>
      <Option value="Yiminghe">一名盒</Option>
    </Select>
</div>
```