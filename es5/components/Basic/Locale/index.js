import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import lang from './lang';
import locales from '../../../consts/languages.js';

function interopDefault(m) {
  return m.default || m;
}

function setMomentLocale(locale) {
  interopDefault(moment).locale(locales[locale]);
}

/**
 * 国际化组件
 */

var LocaleProvider = function (_React$Component) {
  _inherits(LocaleProvider, _React$Component);

  function LocaleProvider(props) {
    _classCallCheck(this, LocaleProvider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    setMomentLocale(props.locale);
    return _this;
  }

  LocaleProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var locale = this.props.locale;

    var nextLocale = nextProps.locale;
    if (locale !== nextLocale) {
      setMomentLocale(nextProps.locale);
    }
  };

  LocaleProvider.prototype.getChildContext = function getChildContext() {
    return {
      kryLocale: _extends({}, lang[this.props.locale], {
        exist: true
      })
    };
  };

  LocaleProvider.prototype.render = function render() {
    return React.Children.only(this.props.children);
  };

  return LocaleProvider;
}(React.Component);

LocaleProvider.displayName = 'LocaleProvider 国际化组件';
LocaleProvider.propTypes = {
  /** locale string indicates which language used */
  locale: PropTypes.string
};
LocaleProvider.defaultProps = {
  locale: 'zh-cn'
};
LocaleProvider.childContextTypes = {
  kryLocale: PropTypes.object
};
export default LocaleProvider;