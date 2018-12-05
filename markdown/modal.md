### 三种不同尺寸的模态框：

```js
require('../example/shared/styles/index.less');

const {Button,Modal} = require('antd');
const confirm = Modal.confirm;

const  classNames =  require('classnames').default;

initialState={
  smallModalVisible: false,
  middleModalVisible: false,
  largeModalVisible: false,
};

<div style={{display:'flex',justifyContent:'space-between',alignItems: 'center'}}>
  <Button
    className="bui-btn-blue ant-btn-base"
    onClick={()=>{setState({smallModalVisible: true})}}
  >
    小模态框
  </Button>
  <Modal
    key="small-modal"
    title="新建仓库"
    className="small-modal"
    visible={state.smallModalVisible}
    onCancel={()=>{setState({ smallModalVisible: false})}}
    footer={[
        <Button
          className="bui-btn-white-grey ant-btn-base"
          onClick={()=>{setState({ smallModalVisible: false})}}
        >
          取消
        </Button>,
        <Button
          className="bui-btn-white-grey ant-btn-base"
          onClick={()=>{setState({ smallModalVisible: false})}}
        >
          保存并新建
        </Button>,
        <Button
          className={classNames({
              'bui-btn-blue': true,
              '.margin-button': true,
            })}
          onClick={()=>{setState({ smallModalVisible: false})}}
        >
          保存
        </Button>,
    ]}
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>


  <Button className="bui-btn-blue ant-btn-base" onClick={()=>{setState({ middleModalVisible: true})}}>
    中型模态框
  </Button>
  <Modal
    key="middle-modal"
    title="价格取值说明"
    className="middle-modal"
    visible={state.middleModalVisible}
    onCancel={()=>{setState({ middleModalVisible: false})}}
    footer={[]}
  />


  <Button
    className="bui-btn-blue ant-btn-base"
    onClick={()=>{
    setState({ largeModalVisible: true})}}
  >
    大型模态框
  </Button>
  <Modal
    key="large-modal"
    title="列表展示设置"
    className="large-modal"
    visible={state.largeModalVisible}
    onCancel={()=>{setState({ largeModalVisible: false})}}
    footer={[
      <Button
        className={classNames({
          'bui-btn-white-grey ant-btn-base': true,
          'most-left-button ant-btn-base': true,
          })}

        onClick={()=>{setState({ largeModalVisible: false})}}
       >
        恢复默认
      </Button>,
      <Button
        className={classNames({
            'bui-btn-white-grey ant-btn-base': true,
          })}

        onClick={()=>{setState({ largeModalVisible: false})}}
      >
        取消
      </Button>,
      <Button
        className={classNames({'bui-btn-blue ant-btn-base': true,})}
        onClick={()=>{setState({ largeModalVisible: false})}}
      >
        确认
      </Button>,
    ]}
  />

 <Button
    className="bui-btn-blue ant-btn-base"
    onClick={()=>{
      confirm({
        title: '确认恢复默认选择吗?',
        content: '恢复默认价格降覆盖当前价格类型的取值和计算规则的优先设定',
        onOk() {
          console.log('OK');
        },
        okText:'确认',
        onCancel() {
          console.log('Cancel');
        },
        cancelText:'取消'
      });
    }}
  >
    确认对话框
  </Button>
</div>
```
