### 时间轴：

```js
const { Timeline,Icon } = require('antd');

<div style={{display:'flex','flexDirection':'column',alignItems:'center'}}>
  <Timeline>
    <Timeline.Item>2018年8月网站上线</Timeline.Item>
    <Timeline.Item>2018年10月注册用户突破100万</Timeline.Item>
    <Timeline.Item>2018年12月实现扭亏为盈</Timeline.Item>
    <Timeline.Item>2020年纳斯达克上市</Timeline.Item>
  </Timeline>


  <Timeline mode="alternate">
    <Timeline.Item>2018年8月网站上线</Timeline.Item>
    <Timeline.Item color="green">2018年10月注册用户突破100万</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>计算机视觉在汽车领域的应用之一就是打造Level4级别的无人驾驶应用</Timeline.Item>
    <Timeline.Item color="red">2018年12月实现扭亏为盈</Timeline.Item>
    <Timeline.Item>2020年纳斯达克上市</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>成功的一生是按照自己的意愿生活</Timeline.Item>
  </Timeline>
  
</div>
```