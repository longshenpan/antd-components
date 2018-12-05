### 滑动输入条：

```js
const { Slider} = require('antd');
require('../example/shared/styles/index.less');


<div style={{display:'flex',flexDirection:'column'}}>
  <Slider tipFormatter={(value)=>`${value}%`} />
    <Slider tipFormatter={null} />
</div>
```