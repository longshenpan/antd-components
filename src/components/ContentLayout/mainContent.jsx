import React from 'react';
import PropTypes from 'prop-types';

export default class MainContent extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]),
  };

  render() {
    return <div className="content-layout__main">{this.props.children}</div>;
  }
}
