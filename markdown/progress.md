### 进度条：

```js
const { Progress} = require('antd');
require('../example/shared/styles/index.less');


<div style={{display:'flex',flexDirection:'column'}}>
  <Progress percent={30} />
  <Progress percent={50} status="active" />
  <Progress percent={70} status="exception" />
  <Progress percent={100} />
  <Progress percent={50} showInfo={false} />
  
  <div>
    <Progress type="circle" percent={30} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </div>
</div>
```