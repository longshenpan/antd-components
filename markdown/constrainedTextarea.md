### 输入字符数受限制的文本输入框：

```js
const ConstraintTextArea = require('../src/components/ConstraintTextArea').default;

initialState = { constraintAreaNum: 0 };
<ConstraintTextArea
  maxlength={200}
  style={{ width: 200 }}
  placeholder="请输入备注信息"
  inputlength={state.constraintAreaNum}
  onChange={(e)=>setState({constraintAreaNum:e.target.value.length})}
/>
```