### 徽标数：

```js
const { Badge } = require('antd');

<div style={{display:'flex',justifyContent:'space-between'}}>
<div style={{marginRight:'20px'}}>
<Badge count={99}>
      <a href="#" style={{width:'42px',height:'42px',borderRadius:'4px',background:'#eee',display:'inline-block'}}/>
    </Badge>
</div>
  
<div style={{marginRight:'20px'}}>
  <a href="#">
    <Badge count={5}>
      <span style={{width:'42px',height:'42px',borderRadius:'4px',background:'#eee',display:'inline-block'}} />
    </Badge>
  </a>
  </div>
<div style={{marginRight:'20px'}}>
    <Badge count={99} overflowCount={10}>
      <a href="#" style={{width:'42px',height:'42px',borderRadius:'4px',background:'#eee',display:'inline-block'}}/>
    </Badge>
</div> 

<div style={{marginRight:'20px'}}>
   <Badge dot={true}>
    <a href="#" style={{width:'42px',height:'42px',borderRadius:'4px',background:'#eee',display:'inline-block'}}/>
    </Badge>
  </div>
</div>
```