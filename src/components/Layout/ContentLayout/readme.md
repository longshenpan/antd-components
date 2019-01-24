### 页面内容区布局组件：

```js
const {Button} = require('antd');
const ContentLayout = require('../src/components/ContentLayout').default;

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
  goBack:()=>console.log('go back')
};

const location={
  pathname:"/level1/level2/level3/level4"
};

const route={
  breadcrumbName:"第四级"
};

<div style={{backgroundColor:'#f5f5f5',width:'100%',border:'0.5px solid'}}>
<ContentLayout>
  <ContentLayout.ContentBanner
    routes={routes}
    history={history}
    location={location}
    route={route}
  >
    <Button type='primary'>内容区头部</Button>
  </ContentLayout.ContentBanner>

  <ContentLayout.MainContent type="wrapper">
    <ContentLayout.MainContentHead>
     <div style={{height:'50px',lineHeight:'50px',textAlign:'center'}}>内容主体区域的头部</div>
    </ContentLayout.MainContentHead>

     <div style={{height:'8px'}}></div>
   
    <ContentLayout.MainContentRemain>
      <div style={{height:'200px',lineHeight:'200px',textAlign:'center'}}>内容主体区域<p></p>
      内容主体区域<p></p>
      
      </div>
    </ContentLayout.MainContentRemain>
  </ContentLayout.MainContent>
</ContentLayout>
</div>
```