### 时间选择器：

```jsx
const {TimePicker} = require('antd');
const moment =require('moment');

const format='HH:mm';

<TimePicker defaultValue={moment('12:08', format)} format={format} />
```