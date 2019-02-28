import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import locales from '../../../consts/languages';

var LocaleReceiver = function (_React$Component) {
  _inherits(LocaleReceiver, _React$Component);

  function LocaleReceiver() {
    _classCallCheck(this, LocaleReceiver);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  LocaleReceiver.prototype.getLocale = function getLocale() {
    var _props = this.props,
        localeContext = _props.localeContext,
        defaultLocale = _props.defaultLocale;
    var kryLocale = this.context.kryLocale;

    var localeFromContext = kryLocale && kryLocale[localeContext];
    return _extends({}, typeof defaultLocale === 'function' ? defaultLocale() : defaultLocale, localeFromContext || {});
  };

  LocaleReceiver.prototype.getLocaleCode = function getLocaleCode() {
    var kryLocale = this.context.kryLocale;

    var localeCode = kryLocale && kryLocale.locale;

    // 默认显示中文
    if (kryLocale && kryLocale.exist && !localeCode) {
      return locales.zhCN;
    }
    return localeCode;
  };

  LocaleReceiver.prototype.render = function render() {
    return this.props.children(this.getLocale(), this.getLocaleCode());
  };

  return LocaleReceiver;
}(React.Component);

LocaleReceiver.contextTypes = {
  kryLocale: PropTypes.object
};
export default LocaleReceiver;