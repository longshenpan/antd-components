### 多项选择器：

```jsx
const MultipleSelector = require('./index.jsx').default;

const plainOptions=['第一组','第二组','第三组','第四组','第五组','第六组','第七组','第八组','第九组'];

<MultipleSelector
  data={plainOptions}
  onChange={(value)=>console.log(value)}
>
</MultipleSelector>
```