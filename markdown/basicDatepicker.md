### 基础日期选择器：

```jsx
const moment = require('moment');
const BasicDatePicker = require('../src/components/Basic/BasicDatePicker').default;
initialState={weekOne:'星期四',weekTwo:'星期五'};

<div>
<BasicDatePicker
  width="250px"
  prefixTxt="开始时间"
  onChange={(e)=>{
              if (e) {
                  setState({
                    weekOne: moment(e).format('dddd'),
                  });
              }
            }}
  week={state.weekOne}
/>

<BasicDatePicker
  width="250px"
  prefixTxt="结束时间"
  onChange={(e)=>{
              if (e) {
                  setState({
                    weekTwo: moment(e).format('dddd'),
                  });
              }
            }}
  week={state.weekTwo}
/>
</div>
```
