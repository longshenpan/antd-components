### 标签页：

```js
const { Tabs } = require('antd');
const TabPane = Tabs.TabPane;

<div style={{display:'flex','flexDirection':'column'}}>
  <Tabs defaultActiveKey="1" onChange={(key)=>console.log(key)}>
    <TabPane tab="第一页" key="1">第一页内容</TabPane>
    <TabPane tab="第二页" key="2">第二页内容</TabPane>
    <TabPane tab="第三页" key="3">第三页内容</TabPane>
  </Tabs>
  
  <br/>
  <Tabs tabPosition='left' defaultActiveKey="1" onChange={(key)=>console.log(key)}>
    <TabPane tab="风格" key="1">风格内容</TabPane>
    <TabPane tab="要素" key="2">要素信息</TabPane>
    <TabPane tab="美观" key="3">页面美观</TabPane>
  </Tabs>

  <br/>
   <Tabs onChange={(key)=>console.log(key)} type="card">
    <TabPane tab="卡片1" key="1">卡片页面1</TabPane>
    <TabPane tab="卡片2" key="2">卡片页面2</TabPane>
    <TabPane tab="卡片3" key="3">卡片页面3</TabPane>
  </Tabs>
</div>
```