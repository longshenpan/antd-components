### 多选框：

```js
const { Checkbox,Row,Col } = require('antd');


<div style={{display:'flex','flexDirection':'column'}}>
 <Checkbox onChange={(e)=>console.log(e.target.checked)}>Checkbox</Checkbox>
 <br/>
 <Checkbox.Group style={{ width: '100%' }} onChange={(checkedValues)=>console.log(checkedValues)}>
    <Row>
      <Col span={8}><Checkbox value="A">A</Checkbox></Col>
      <Col span={8}><Checkbox value="B">B</Checkbox></Col>
      <Col span={8}><Checkbox value="C">C</Checkbox></Col>
      <Col span={8}><Checkbox value="D">D</Checkbox></Col>
      <Col span={8}><Checkbox value="E">E</Checkbox></Col>
    </Row>
  </Checkbox.Group>
</div>
```