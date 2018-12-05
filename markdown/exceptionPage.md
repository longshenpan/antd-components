### 异常页面展示组件：

```jsx
const ExceptionPage = require('../src/components/ExceptionPage').default;

const exceptionPageTypes = {
  NULLPAGE: 'nullpage',
  403: '403',
  404: '404',
  500: '500',
  SPECIAL500: 'special500',
};

<div>
  <h3>空页面</h3>
  <ExceptionPage type={exceptionPageTypes.NULLPAGE} />
  <br />

  <h3>404页面</h3>
  <ExceptionPage type={exceptionPageTypes['404']} />
  <br />

  <h3>403页面</h3>
  <ExceptionPage type={exceptionPageTypes['403']} />
  <br />

  <h3>500页面</h3>
  <ExceptionPage type={exceptionPageTypes['500']} />
  <br />

  <h3>500特殊页面</h3>
  <ExceptionPage type={exceptionPageTypes.SPECIAL500} />
</div>
```