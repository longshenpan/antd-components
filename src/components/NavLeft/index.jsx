import React from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.less';

const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: '2',
    };
  }

  handleMenuClick = ({ item, key }) => {
    if (key === this.state.currentKey) {
      return false;
    }
    this.setState({
      currentKey: key,
    });
  };

  render() {
    let { currentKey } = this.state;
    const { collapse, onCollapseChange } = this.props;
    return (
      <div>
        <Menu
          defaultSelectedKeys={[currentKey]}
          selectedKeys={[currentKey]}
          mode="inline"
          theme="dark"
          onClick={this.handleMenuClick}
          inlineCollapsed={collapse}
        >
          <Menu.Item key="2" title={'BaseFormDemo'}>
            <Link to="/BaseFormDemo">
              <Icon type="desktop" />
              <span>BaseFormDemo</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>图表</span>
              </span>
            }
          >
            <Menu.Item key="5" title={'折线'}>
              <Link to="/echarts/line">折线</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <div className="ant-aside-action" onClick={onCollapseChange}>
          {collapse ? <Icon type="right" /> : <Icon type="left" />}
        </div>
      </div>
    );
  }
}

export default NavLeft;
