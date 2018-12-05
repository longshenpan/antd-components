### 开关组件：

```js
const {Switch} = require('antd');
require('../example/shared/styles/index.less');

<Switch
  checkedChildren="开"
  unCheckedChildren="关"
  defaultChecked
  onChange={(checked)=>console.log(checked)}
/>
```