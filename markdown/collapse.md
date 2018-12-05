### 折叠面板：

```js
const { Collapse } = require('antd');
require('../example/shared/styles/index.less');
const Panel = Collapse.Panel;

const text = `
  这是一个有关折叠面板的故事，什么是折叠面板？就是具有管风琴风格的面板。
`;

<div style={{display:'flex','flexDirection':'column'}}>
 <Collapse accordion>
    <Panel header="面板1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="面板2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="面板3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
</div>
```