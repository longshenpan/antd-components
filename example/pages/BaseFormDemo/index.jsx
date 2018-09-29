import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { BaseForm } from '@/index.jsx';

class BaseFormDemo extends Component {

  getFormList = () => {
    const formList = [{
      type: 'SELECT',
      field: 'type',
      label: '类型',
      disabled: true,
      initialValue: 1,
      list: [{
        code: 1,
        name: '门店'
      }, {
        code: 2,
        name: '品牌'
      }, {
        code: 3,
        name: '测试'
      }],
    }];
    return formList;
  }

  handleSubmit = (values) => {
    console.log(this.BaseForm.handleSubmit());
  }

  render() {
    return (
      <Card>
        <BaseForm formList={this.getFormList()} wrappedComponentRef={inst => this.BaseForm = inst}></BaseForm>
        <Button onClick={this.handleSubmit}>提交</Button>
      </Card>
    );
  }
}

export default BaseFormDemo;