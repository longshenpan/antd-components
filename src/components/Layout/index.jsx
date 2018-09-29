import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';
import NavLeft from '../NavLeft/index.jsx';
import './index.less';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
  }

  handleCollapseChange = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const { collapse } = this.state;

    return (
      <section
        className={
          collapse
            ? 'layout-container layout-aside-collapse'
            : 'layout-container'
        }
      >
        <aside className="nav-left">
          <NavLeft
            collapse={collapse}
            onCollapseChange={this.handleCollapseChange}
          />
        </aside>
        <section className="layout-main">
          <header className="layout-header">
            <Header />
          </header>
          <article className="layout-content">
            {renderRoutes(this.props.route.routes)}
          </article>
          <footer className="layout-footer">
            <Footer>
              <span>版权所有©张盼</span>
            </Footer>
          </footer>
        </section>
      </section>
    );
  }
}
