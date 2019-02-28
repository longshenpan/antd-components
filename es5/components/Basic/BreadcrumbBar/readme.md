### 面包屑组件：

 ```jsx

const BreadcrumbBar = require('./index.jsx').default;

const {Button} = require('antd');
const routes = [
  {
    path: '/',
    exact: true,
    breadcrumbName: '首页',
  },
  {
    path: '/level1',
    breadcrumbName: '第一级',
  },
  {
    path: '/level1/level2',
    breadcrumbName: '第二级',
  },
  {
    path: '/level1/level2/level3',
    breadcrumbName: '第三级',
  },
  {
    path: '/level1/level2/level3/level4',
    breadcrumbName: '第四级',
  },
];
const history={
goBack:function(){}
};

const location={
  pathname:"/level1/level2/level3/level4"
};

const route={
  breadcrumbName:"第四级"
};

<BreadcrumbBar
  routes={routes}
  history={history}
  location={location}
  route={route}
>
  <Button type="primary">Action 1</Button>
  <Button>Action 2</Button>
</BreadcrumbBar>
```
