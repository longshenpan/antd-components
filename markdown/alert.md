### 警告提示组件：
```js 
const {Alert} = require('antd');
require('../example/shared/styles/index.less');

<div>
  <Alert message="成功信息提示框" type="success" banner closable/>
  <br/>
  <Alert message="普通信息提示框" type="info" banner closable/>
  <br/>
  <Alert message="警告信息提示框" type="warning" banner closable/>
  <br/>
  <Alert message="错误信息提示框" type="error" banner closable/>
  <br/>
  <Alert
    message="弱信息提示框"
    type="info"
    className="bui-alert-description"
    banner closable
  />
</div>
```