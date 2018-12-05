### 全局提示：

```js
const { message,Button } = require('antd');
require('../example/shared/styles/index.less');


<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems: 'center'}}>
  <Button onClick={()=>message.success('This is a message of success')} className="bui-btn-blue ant-btn-base">成功</Button>

  <Button onClick={()=>message.error('This is a message of error')}className="bui-btn-orange ant-btn-base">错误</Button>

  <Button onClick={()=>message.warning('This is message of warning')} className="bui-btn-green ant-btn-base">警告</Button>
</div>
```