import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import * as React from 'react';
import PropTypes from 'prop-types';

var MainContentRemain = function (_React$Component) {
  _inherits(MainContentRemain, _React$Component);

  function MainContentRemain() {
    _classCallCheck(this, MainContentRemain);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  MainContentRemain.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'content-layout__main--remain' },
      this.props.children
    );
  };

  return MainContentRemain;
}(React.Component);

MainContentRemain.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any])
};
MainContentRemain.defaultProps = {
  children: null
};
export default MainContentRemain;