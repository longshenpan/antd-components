import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

/**
 * 当页面还未完全准备好数据时使用加载中动态
 */
export default class Loading extends React.Component {
  static displayName = 'Loading 加载中';
  static defaultProps = {
    type: 'default',
  };

  static propTypes = {
    /** define the loading component size */
    type: PropTypes.oneOf(['small', 'default', 'large']),
  };

  render() {
    const { type } = this.props;
    const style = {
      width: 100,
      height: 100,
    };

    if (type === 'large') {
      style.width = 140;
      style.height = 140;
    } else if (type === 'small') {
      style.width = 60;
      style.height = 60;
    }
    return (
      <div className="loading-container">
        <img
          alt="正在加载..."
          src={require('../../../assets/img/loading.gif')}
          style={style}
        />
      </div>
    );
  }
}
