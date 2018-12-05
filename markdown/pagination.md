### 分页组件：

```js
const { Pagination } = require('antd');

require('../example/shared/styles/index.less');

<div style={{display:'flex','flexDirection':'column'}}>
 <Pagination defaultCurrent={1} total={50} />
 <Pagination defaultCurrent={6} total={500} />
 <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={()=>function(){}} />
 <Pagination showSizeChanger onShowSizeChange={(current,pageSize)=>console.log(current,pageSize)} defaultCurrent={3} total={500} />
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      pageSize={20}
      defaultCurrent={1}
      showQuickJumper
    />
  <Pagination size="small" total={50} />
  <Pagination size="small" total={50} showTotal={(total)=>`总计 ${total} 项`} />
</div>
```