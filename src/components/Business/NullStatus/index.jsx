import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

/**
 * 空态组件，用于在状态为空的情况下显示对应文字或者图片
 */
export default class NullStatus extends React.Component {
  static displayName = 'NullStatus 空态页面';

  static defaultProps = {
    isShowImg: false,
  };

  static propTypes = {
    /** indicate show image or text */
    isShowImg: PropTypes.bool,
  };

  render() {
    const { isShowImg } = this.props;

    return (
      <div className="null-container">
        {isShowImg ? (
          <img
            alt="暂时没有数据"
            className="img-size"
            src={require('../../../assets/img/nodata-page.png')}
          />
        ) : (
          <span className="text-decorator">暂时没有内容</span>
        )}
      </div>
    );
  }
}
