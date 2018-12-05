### 日期区间选择器：

```jsx
const {DatePicker} = require('antd');
const {RangePicker} = DatePicker;

<div>
<RangePicker style={{width:'300px'}} 
 showTime={{ format: 'HH:mm' }}
 format="YYYY-MM-DD HH:mm"
 onChange={(value,dateString)=>console.log(value,dateString)} />
</div>

```