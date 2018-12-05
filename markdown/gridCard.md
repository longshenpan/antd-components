### 栅格类导航组件：

```jsx
const {Router}= require('react-router-dom');
const {createBrowserHistory}=require('history');
const GridCard = require('../src/components/GridCard').default;

const history=createBrowserHistory('/');

const IconReport = require('../example/assets/images/meritpay-report.svg').default;
const IconReportRule = require('../example/assets/images/meritpay-reportRule.svg').default;
const IconReportWaiter = require('../example/assets/images/meritpay-reportWaiter.svg').default;
const IconEducation = require('../example/assets/images/rank-change.svg').default;

const gridCardMenus = [
  {
    Icon: IconReport,
    name: '提成核算',
    path: `/`,
  },
  {
    Icon: IconReportWaiter,
    name: '服务员绩效',
    desc: '对服务员设置绩效目标并查看达成率',
    path: `/customized-components`,
  },
  {
    Icon: IconReportRule,
    name: '提成方案',
    desc: '创建或修改员工的提成计算方式',
    path: `/style-guide`,
  },
  {
    Icon: IconEducation,
    name: '绩效奖金',
    desc: '根据绩效给予员工相应的奖金',
    path: `/original-components`,
  },
];

<Router history={history}>
<GridCard menus={gridCardMenus} />
</Router>

```