import * as React from 'react';
import PropTypes from 'prop-types';

export default class MainContentHead extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]),
  };
  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <div className={`content-layout__main--head`}>{this.props.children}</div>
    );
  }
}
