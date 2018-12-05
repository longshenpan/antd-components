### 锚点：

```js
const { Anchor } = require('antd');
require('../example/shared/styles/index.less');
const { Link } = Anchor;

<div style={{display:'flex','flexDirection':'column'}}>
  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>
</div>
```