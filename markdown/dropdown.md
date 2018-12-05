### 下拉菜单：

```js
const {Menu,Button,Dropdown} = require('antd');
require('../example/shared/styles/index.less');

const dropDownMenu = (
 <Menu>
  <Menu.Item>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.alipay.com/"
    >
      批量移除
    </a>
  </Menu.Item>
  <Menu.Item>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.taobao.com/"
    >
      批量审核
    </a>
  </Menu.Item>
  <Menu.Item>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.tmall.com/"
    >
      批量修改
    </a>
  </Menu.Item>
</Menu>
);

<div>
  <Dropdown overlay={dropDownMenu} placement="bottomCenter">
    <Button className="bui-btn-white-grey bui-btn-base">更多</Button>
  </Dropdown>
  <span style={{marginRight:'20px'}}></span>
  <Dropdown overlay={dropDownMenu} placement="bottomCenter">
    <a className="ant-dropdown-link" href="">
      更多
    </a>
  </Dropdown>
</div>
```
