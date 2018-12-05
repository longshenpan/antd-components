### 图片上传组件：

```js
const PicUpload = require('../src/components/Upload/PicUpload').default;

initialState = {fileList: []};
 <PicUpload
  accept=".jpg"
  limit={3}
  fileList={state.fileList}
  action="//jsonplaceholder.typicode.com/posts/"
  onChange={({ fileList }) => setState({ fileList })}
/>
```
