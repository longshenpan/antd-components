import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import * as React from 'react';
import PropTypes from 'prop-types';

var MainContentHead = function (_React$Component) {
  _inherits(MainContentHead, _React$Component);

  function MainContentHead() {
    _classCallCheck(this, MainContentHead);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  MainContentHead.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'content-layout__main--head' },
      this.props.children
    );
  };

  return MainContentHead;
}(React.Component);

MainContentHead.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any])
};
MainContentHead.defaultProps = {
  children: null
};
export default MainContentHead;