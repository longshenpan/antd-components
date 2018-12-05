### 文字提示：

```jsx
const {Tooltip, Button } = require('antd');

const text = <span>prompt text</span>;

<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems: 'center'}}>
  <Tooltip placement="topLeft" title={text}>
    <Button className="bui-btn-blue bui-btn-base">左上提示</Button>
  </Tooltip>
  <Tooltip placement="top" title={text}>
    <Button className="bui-btn-blue bui-btn-base">顶部</Button>
  </Tooltip>
  <Tooltip placement="topRight" title={text}>
    <Button className="bui-btn-blue bui-btn-base"> 右上提示</Button>
  </Tooltip>
</div>
```