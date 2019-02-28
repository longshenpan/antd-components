### 图片上传组件：

```js
const PicUpload = require('./index.jsx').default;

initialState = {fileList: []};
 <PicUpload
  accept=".jpg"
  limit={3}
  fileList={state.fileList}
  action="//jsonplaceholder.typicode.com/posts/"
  onChange={({ fileList }) => setState({ fileList })}
/>
```
