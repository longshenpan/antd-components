### 流程性步骤组件：

```jsx
const FormActionBar = require('../src/components/FormActionBar').default;

const formActionBarStep = {
  FIRST: 'FIRST',
  LAST: 'LAST',
  NORMAL: 'NORMAL',
};

initialState={currentFormActionBarStep:null};

<FormActionBar
  style={{position:'relative'}}
  wrapperCol={{span: 8, offset: 0 }}
  step={state.currentFormActionBarStep}
  onNext={()=>{
    const { currentFormActionBarStep } = state;
    let newStep = null;

    if (!currentFormActionBarStep) {
      newStep = formActionBarStep.FIRST;
    } else if (currentFormActionBarStep === formActionBarStep.FIRST) {
      newStep = formActionBarStep.NORMAL;
    } else if (currentFormActionBarStep === formActionBarStep.NORMAL) {
      newStep = formActionBarStep.LAST;
    }

    setState({
      currentFormActionBarStep: newStep,
    });
  }}

  onPrev={()=>{
    const { currentFormActionBarStep } = state;
    let newStep = null;

    if (!currentFormActionBarStep) {
      newStep = formActionBarStep.LAST;
    } else if (currentFormActionBarStep === formActionBarStep.LAST) {
      newStep = formActionBarStep.NORMAL;
    } else if (currentFormActionBarStep === formActionBarStep.NORMAL) {
      newStep = formActionBarStep.FIRST;
    }

    setState({
      currentFormActionBarStep: newStep,
    });
  }}
/>
```