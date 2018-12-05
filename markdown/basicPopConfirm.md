### 气泡确认框：

```js
const {Popconfirm,message} = require('antd');
require('antd/dist/antd.less');

<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems: 'center',margin:'40px 20px'}}>
 <Popconfirm title="确认恢复默认选择吗？" onConfirm={(e)=>message.success('click on yes')} onCancel={(e)=>message.error('click on on')} okText="确定" cancelText="取消">
    <a href="#">Delete</a>
  </Popconfirm>
</div>
```