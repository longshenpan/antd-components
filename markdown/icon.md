### 图标组件：

```js 
const {Icon,Button} = require('antd');

<div>
<Icon
  type="smile"
  style={{marginRight:'20px' }}
  className='bui-icon'
/>

<Icon type="plus" style={{marginRight:'20px'}}className='bui-icon'/>


<Icon type="minus" style={{marginRight:'20px'}}
 className='bui-icon'/>

<span style={{color:'#258ff8',marginRight:'20px'}}><Icon type="plus-circle-o" className='bui-icon'/>添加</span>

<span style={{color:'#ff5453',}}><Icon type="minus-circle-o" className='bui-icon'/>删除</span>

</div>
```