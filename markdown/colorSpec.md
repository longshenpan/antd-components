### 定义组件的颜色系统：
```jsx
require('../lib/styleguide/colorSpec.less');

<div>
<span>文本色:</span><span style={{marginLeft:'30px'}}>色阶6级</span>
<br/>
<br/>

<div style={{display:'flex'}}>
<h3 style={{marginRight:'50px',lineHeight:'100px'}}>黑色</h3>

<div class='item'>
<h4 >#333333</h4>
<div class='item-content'style={{backgroundColor:'#333333',marginRight:'20px'}}>1</div>
</div>

<div class='item'>
<h4 class='item-head'>#666666</h4>
<div class='item-content' style={{backgroundColor:'#666666'}}>2</div>
</div>

<div class='item'>
<h4 class='item-head'>#999999</h4>
<div class='item-content' style={{backgroundColor:'#999999'}}>3</div>
</div>

<div class='item'>
<h4 class='item-head'>#cccccc</h4>
<div class='item-content' style={{backgroundColor:'#cccccc'}}>4</div>
</div>

<div class='item'>
<h4 class='item-head'>#e9e9e9</h4>
<div class='item-content' style={{backgroundColor:'#e9e9e9'}}>5</div>
</div>

<div class='item'>
<h4  class='item-head'>#f5f5f5</h4>
<div class='item-content' style={{backgroundColor:'#f5f5f5'}}>6</div>
</div>

</div>
<br/>
<br/>


<span>辅助色:</span><span style={{marginLeft:'30px'}}>色阶6级</span>
<br/>
<br/>

<div style={{display:'flex'}}>
<h3 style={{marginRight:'50px',lineHeight:'100px'}}>蓝色</h3>

<div class='item'>
<h4 >#0071e2</h4>
<div class='item-content'style={{backgroundColor:'#0071e2',marginRight:'20px'}}>1</div>
</div>

<div class='item'>
<h4 class='item-head'>#258ff8</h4>
<div class='item-content' style={{backgroundColor:'#258ff8'}}>2</div>
</div>

<div class='item'>
<h4 class='item-head'>#5badfc</h4>
<div class='item-content' style={{backgroundColor:'#5badfc'}}>3</div>
</div>

<div class='item'>
<h4 class='item-head'>#86c2f2</h4>
<div class='item-content' style={{backgroundColor:'#86c2f2'}}>4</div>
</div>

<div class='item'>
<h4 class='item-head'>#d7ebff</h4>
<div class='item-content' style={{backgroundColor:'#d7ebff'}}>5</div>
</div>

<div class='item'>
<h4  class='item-head'>#ebf5ff</h4>
<div class='item-content' style={{backgroundColor:'#ebf5ff'}}>6</div>
</div>
</div>



<div style={{display:'flex'}}>
<h3 style={{marginRight:'50px',lineHeight:'100px'}}>红色</h3>

<div class='item'>
<h4 >#ed2827</h4>
<div class='item-content'style={{backgroundColor:'#ed2827',marginRight:'20px'}}>1</div>
</div>

<div class='item'>
<h4 class='item-head'>#ff5453</h4>
<div class='item-content' style={{backgroundColor:'#ff5453'}}>2</div>
</div>

<div class='item'>
<h4 class='item-head'>#ff7373</h4>
<div class='item-content' style={{backgroundColor:'#ff7373'}}>3</div>
</div>

<div class='item'>
<h4 class='item-head'>#ff9898</h4>
<div class='item-content' style={{backgroundColor:'#ff9898'}}>4</div>
</div>

<div class='item'>
<h4 class='item-head'>#ffd9d9</h4>
<div class='item-content' style={{backgroundColor:'#ffd9d9'}}>5</div>
</div>

<div class='item'>
<h4  class='item-head'>#ffeeee</h4>
<div class='item-content' style={{backgroundColor:'#ffeeee'}}>6</div>
</div>
</div>



<div style={{display:'flex'}}>
<h3 style={{marginRight:'50px',lineHeight:'100px'}}>橙色</h3>

<div class='item'>
<h4 >#bd4c00</h4>
<div class='item-content'style={{backgroundColor:'#bd4c00',marginRight:'20px'}}>1</div>
</div>

<div class='item'>
<h4 class='item-head'>#ff7f29</h4>
<div class='item-content' style={{backgroundColor:'#ff7f29'}}>2</div>
</div>

<div class='item'>
<h4 class='item-head'>#ff9b58</h4>
<div class='item-content' style={{backgroundColor:'#ff9b58'}}>3</div>
</div>

<div class='item'>
<h4 class='item-head'>#ffb07b</h4>
<div class='item-content' style={{backgroundColor:'#ffb07b'}}>4</div>
</div>

<div class='item'>
<h4 class='item-head'>#ffe7d7</h4>
<div class='item-content' style={{backgroundColor:'#ffe7d7'}}>5</div>
</div>

<div class='item'>
<h4  class='item-head'>#fff5ee</h4>
<div class='item-content' style={{backgroundColor:'#fff5ee'}}>6</div>
</div>
</div>



<div style={{display:'flex'}}>
<h3 style={{marginRight:'50px',lineHeight:'100px'}}>黄色</h3>

<div class='item'>
<h4 >#ed9400</h4>
<div class='item-content'style={{backgroundColor:'#ed9400',marginRight:'20px'}}>1</div>
</div>

<div class='item'>
<h4 class='item-head'>#ffbc00</h4>
<div class='item-content' style={{backgroundColor:'#ffbc00'}}>2</div>
</div>

<div class='item'>
<h4 class='item-head'>#ffd21e</h4>
<div class='item-content' style={{backgroundColor:'#ffd21e'}}>3</div>
</div>

<div class='item'>
<h4 class='item-head'>#ffe167</h4>
<div class='item-content' style={{backgroundColor:'#ffe167'}}>4</div>
</div>

<div class='item'>
<h4 class='item-head'>#faefc1</h4>
<div class='item-content' style={{backgroundColor:'#faefc1'}}>5</div>
</div>

<div class='item'>
<h4  class='item-head'>#fff9e2</h4>
<div class='item-content' style={{backgroundColor:'#fff9e2'}}>6</div>
</div>
</div>



<div style={{display:'flex'}}>
<h3 style={{marginRight:'50px',lineHeight:'100px'}}>绿色</h3>

<div class='item'>
<h4 >#00ad56</h4>
<div class='item-content'style={{backgroundColor:'#00ad56',marginRight:'20px'}}>1</div>
</div>

<div class='item'>
<h4 class='item-head'>#0dc66a</h4>
<div class='item-content' style={{backgroundColor:'#0dc66a'}}>2</div>
</div>

<div class='item'>
<h4 class='item-head'>#45d38b</h4>
<div class='item-content' style={{backgroundColor:'#45d38b'}}>3</div>
</div>

<div class='item'>
<h4 class='item-head'>#74ebae</h4>
<div class='item-content' style={{backgroundColor:'#74ebae'}}>4</div>
</div>

<div class='item'>
<h4 class='item-head'>#cffbe4</h4>
<div class='item-content' style={{backgroundColor:'#cffbe4'}}>5</div>
</div>

<div class='item'>
<h4  class='item-head'>#e8fff3</h4>
<div class='item-content' style={{backgroundColor:'#e8fff3'}}>6</div>
</div>
</div>



<div style={{display:'flex'}}>
<h3 style={{marginRight:'35px',lineHeight:'100px'}}>草绿色</h3>

<div class='item'>
<h4 >#42b500</h4>
<div class='item-content'style={{backgroundColor:'#42b500',marginRight:'20px'}}>1</div>
</div>

<div class='item'>
<h4 class='item-head'>#60cf20</h4>
<div class='item-content' style={{backgroundColor:'#60cf20'}}>2</div>
</div>

<div class='item'>
<h4 class='item-head'>#86d955</h4>
<div class='item-content' style={{backgroundColor:'#86d955'}}>3</div>
</div>

<div class='item'>
<h4 class='item-head'>#9feb72</h4>
<div class='item-content' style={{backgroundColor:'#9feb72'}}>4</div>
</div>

<div class='item'>
<h4 class='item-head'>#dbfbc8</h4>
<div class='item-content' style={{backgroundColor:'#dbfbc8'}}>5</div>
</div>

<div class='item'>
<h4  class='item-head'>#edfde4</h4>
<div class='item-content' style={{backgroundColor:'#edfde4'}}>6</div>
</div>
</div>



<div style={{display:'flex'}}>
<h3 style={{marginRight:'50px',lineHeight:'100px'}}>紫色</h3>

<div class='item'>
<h4 >#4f45d9</h4>
<div class='item-content'style={{backgroundColor:'#4f45d9',marginRight:'20px'}}>1</div>
</div>

<div class='item'>
<h4 class='item-head'>#6e64ed</h4>
<div class='item-content' style={{backgroundColor:'#6e64ed'}}>2</div>
</div>

<div class='item'>
<h4 class='item-head'>#938bf6</h4>
<div class='item-content' style={{backgroundColor:'#938bf6'}}>3</div>
</div>

<div class='item'>
<h4 class='item-head'>#aea8f6</h4>
<div class='item-content' style={{backgroundColor:'#aea8f6'}}>4</div>
</div>

<div class='item'>
<h4 class='item-head'>#e7e5ff</h4>
<div class='item-content' style={{backgroundColor:'#e7e5ff'}}>5</div>
</div>

<div class='item'>
<h4  class='item-head'>#f5f5ff</h4>
<div class='item-content' style={{backgroundColor:'#f5f5ff'}}>6</div>
</div>
</div>

</div>

```
