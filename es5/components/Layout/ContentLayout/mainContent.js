import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

var MainContent = function (_React$Component) {
  _inherits(MainContent, _React$Component);

  function MainContent() {
    _classCallCheck(this, MainContent);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  MainContent.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'content-layout__main' },
      this.props.children
    );
  };

  return MainContent;
}(React.Component);

MainContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any])
};
export default MainContent;