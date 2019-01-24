import * as React from 'react';
import PropTypes from 'prop-types';

export default class MainContentRemain extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]),
  };

  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <div className={`content-layout__main--remain`}>
        {this.props.children}
      </div>
    );
  }
}
