### 单选&复选：

```js
const {Radio} = require('antd');
const RadioGroup = Radio.Group;

initialState={value:1};

<div style={{display:'flex'}}>
  <Radio>单选</Radio>
 <RadioGroup onChange={(e)=>setState({value:e.target.value})} value={state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
  </RadioGroup>
</div>
```