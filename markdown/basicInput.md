### 基础输入框：

```js
const {Input,InputNumber} = require('antd');
const Search = Input.Search;
require('../example/shared/styles/index.less');

<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems: 'center',margin:'40px 20px'}}>
  <Input placeholder='请输入' style={{width:'200px',height:'30px'}}></Input>
  <InputNumber style={{width:'80px',height:'30px'}} min={1} max={10} defaultValue={3} onChange={(value)=>console.log(value)} />
  <Input style={{width:'200px',height:'30px'}} addonAfter={'件'} />
  <Input placeholder='请输入' style={{width:'200px',height:'30px'}} disabled></Input>
  <Input style={{width:'200px',height:'30px'}} addonBefore={'¥'} />
  <Search
      placeholder="请输入搜索内容"
      onSearch={value => console.log(value)}
      style={{ width: 200,height:30 }}
    />
</div>
```