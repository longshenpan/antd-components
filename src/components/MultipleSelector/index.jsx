import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown, Checkbox, Tag } from 'antd';

import './index.less';

const CheckboxGroup = Checkbox.Group;

/**
 * 多项选择器用于多选
 * @example ../../../markdown/multipleSelector.md
 */
export default class MultipleSelector extends React.Component {
  static displayName = 'MultipleSelector 多项选择器';

  static propTypes = {
    /** call when click checkbox */
    onChange: PropTypes.func.isRequired,
    /** data for render checkbox list */
    data: PropTypes.array,
    /** set trigger-input style */
    style: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      checkedList: [],
      indeterminate: false,
      checkAll: false,
      dropdownBoxVisible: false,
      toggleCheckedAll: false,
    };
  }

  handleVisibleChange = visible => {
    if (!visible) {
      const { selectedKeys } = this.state;
      const { onChange } = this.props;
      onChange(selectedKeys);
    }
    this.setState({
      dropdownBoxVisible: visible,
    });
  };

  onCheckAllChange = e => {
    const { data, onChange } = this.props;
    this.setState({
      checkedList: e.target.checked ? data : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
    onChange(data);
  };

  onCheckAllWrapper = () => {
    const { data, onChange } = this.props;
    const { toggleCheckedAll } = this.state;

    this.setState({
      checkedList: toggleCheckedAll ? [] : data,
      indeterminate: false,
      checkAll: !toggleCheckedAll,
      toggleCheckedAll: !toggleCheckedAll,
    });
    onChange(toggleCheckedAll ? [] : data);
  };

  handleCheckChange = checkedList => {
    const { onChange, data } = this.props;
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < data.length,
      checkAll: checkedList.length === data.length,
    });
    onChange(checkedList);
  };

  handleTags = removedTag => {
    this.setState({
      checkedList: this.state.checkedList.filter(
        checked => checked != removedTag
      ),
    });
    console.log(removedTag);
  };

  generateTags = checkedList => {
    return checkedList.map(checked => (
      <Tag closable onClose={() => this.handleTags(checked)} key={checked}>
        {checked}
      </Tag>
    ));
  };

  render() {
    const { dropdownBoxVisible } = this.state;
    const { data, style } = this.props;
    const dropdownBox = (
      <div className="multiple-selector">
        <div className="multiple-selector__checkall">
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            全选
          </Checkbox>
        </div>

        <div className="multiple-selector__checklist">
          <CheckboxGroup
            options={data}
            value={this.state.checkedList}
            onChange={this.handleCheckChange}
          />
        </div>
      </div>
    );
    return (
      <Dropdown
        overlay={dropdownBox}
        trigger={['click']}
        visible={dropdownBoxVisible}
        onVisibleChange={this.handleVisibleChange}
      >
        <div
          style={style}
          tabIndex="999"
          className={classNames({
            'select-input': true,
            'is-empty': !this.state.checkedList.length,
          })}
        >
          {this.state.checkedList.length
            ? this.generateTags(this.state.checkedList)
            : '请选择'}
        </div>
      </Dropdown>
    );
  }
}
