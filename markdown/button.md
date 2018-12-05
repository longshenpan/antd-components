### 按钮组件：

```js
const {Button,Icon} = require('antd');
require('../example/shared/styles/index.less');

<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems: 'center'}}>

  <Button className="bui-btn-blue bui-btn-base">确定</Button>
  <Button className="bui-btn-red bui-btn-base">下一步</Button>
  <Button className="bui-btn-orange bui-btn-base">确认提交</Button>
  <Button className="bui-btn-green bui-btn-base">搜索全部数据</Button>

  <Button className="bui-btn-white-grey bui-btn-base">确认提交</Button>
  <Button className="bui-btn-white-normal bui-btn-base">确认提交</Button>

  <Button className="bui-btn-colorful-blue bui-btn-base">确认提交</Button>
  <Button className="bui-btn-colorful-red bui-btn-base">我要退款</Button>
  <Button className="bui-btn-colorful-orange bui-btn-base">账户充值</Button>
  <Button className="bui-btn-colorful-green bui-btn-base">余额提现</Button>

  <Button className="bui-icon-btn bui-btn-base" icon="search" type="primary">搜素全部</Button>

  <Button size="small" type="primary">查看销售数据</Button>
  <Button size="large" type="primary">返回重新修改</Button>
  

  <span style={{cursor:'pointer',userSelect: 'none'}} onClick={()=>{console.log("添加")}}>
    <Button className=" bui-icon bui-icon-plus" shape="circle" icon="plus" size='small'/><span style={{color:'#258ff8',marginLeft:'5px'}}>添加</span>
  </span>

  <span style={{cursor:'pointer',userSelect: 'none'}} onClick={()=>{console.log("删除")}}>
    <Button className=" bui-icon bui-icon-minus" shape="circle" icon="minus" size='small'/><span style={{color:'#ff5453',marginLeft:'5px'}}>删除</span>
  </span>
  
  <Button className='bui-icon' onClick={()=>console.log('增加')}>
    <Icon type="plus"/>
  </Button>
  
  <Button className='bui-icon' onClick={()=>console.log('减少')}>
    <Icon type="minus"/>
  </Button>
  

</div>
```
