### 步骤条：

```js
const { Steps } = require('antd');
require('../example/shared/styles/index.less');
const Step = Steps.Step;

<div style={{display:'flex','flexDirection':'column'}}>
   <Steps current={1}>
    <Step title="第一步"  />
    <Step title="第二步"  />
    <Step title="第三步"  />
  </Steps>
  <br/>
  <Steps progressDot current={1}>
    <Step title="第一步" />
    <Step title="第二步" />
    <Step title="第三步" />
  </Steps>
</div>
```