### 气泡卡片：

```js
const { Popover, Button } =require('antd');
require('../example/shared/styles/index.less');

const content = (
  <div>
    <p>内容1</p>
    <p>内容2</p>
  </div>
);

<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems: 'center'}}>
  <Popover content={content} title="标题" placement='top'>
    <Button className="bui-btn-blue bui-btn-base">悬浮显示</Button>
  </Popover>

  <Popover content={content} title="标题" trigger="click">
    <Button className="bui-btn-blue bui-btn-base">点击显示</Button>
  </Popover>

  <Popover placement="leftBottom" title="标题" content={content} trigger="click">
    <Button className="bui-btn-blue bui-btn-base">左下弹出</Button>
  </Popover>

   <Popover placement="rightTop" title="标题" content={content} trigger="click">
      <Button className="bui-btn-blue bui-btn-base">右上弹出</Button>
    </Popover>
</div>
```