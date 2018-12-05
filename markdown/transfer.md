### 穿梭框：

```js
const { Transfer} = require('antd');
require('../example/shared/styles/index.less');

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const targetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);

initialState = {
    targetKeys,
    selectedKeys: [],
};

<div style={{display:'flex',flexDirection:'column'}}>
  <Transfer
        dataSource={mockData}
        titles={['源对象', '目标对象']}
        targetKeys={state.targetKeys}
        selectedKeys={state.selectedKeys}

        onChange={(nextTargetKeys, direction, moveKeys)=> setState({targetKeys:nextTargetKeys})}

        onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => setState({selectedKeys:[...sourceSelectedKeys, ...targetSelectedKeys]})}

        onScroll={(direction,e)=>null}
        render={item => item.title}
      />
</div>
```