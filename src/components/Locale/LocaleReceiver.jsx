import React from 'react';
import PropTypes from 'prop-types';
import locales from '../../consts/languages';

export default class LocaleReceiver extends React.Component {
  static contextTypes = {
    kryLocale: PropTypes.object,
  };

  getLocale() {
    const { localeContext, defaultLocale } = this.props;
    const { kryLocale } = this.context;
    const localeFromContext = kryLocale && kryLocale[localeContext];
    return {
      ...(typeof defaultLocale === 'function'
        ? defaultLocale()
        : defaultLocale),
      ...(localeFromContext || {}),
    };
  }

  getLocaleCode() {
    const { kryLocale } = this.context;
    const localeCode = kryLocale && kryLocale.locale;

    // 默认显示中文
    if (kryLocale && kryLocale.exist && !localeCode) {
      return locales.zhCN;
    }
    return localeCode;
  }

  render() {
    return this.props.children(this.getLocale(), this.getLocaleCode());
  }
}
