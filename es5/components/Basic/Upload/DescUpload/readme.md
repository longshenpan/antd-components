### 描述性上传组件：

```js
const DescUpload = require('./index.jsx').default;

<DescUpload
  accept='.jpg,.png,.gif'
  action='keruyun.com/pic/post'
  onChange={(info)=>{
   if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }}
/>
```
