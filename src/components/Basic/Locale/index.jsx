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
export default class LocaleProvider extends React.Component {
  static displayName = 'LocaleProvider 国际化组件';

  static propTypes = {
    /** locale string indicates which language used */
    locale: PropTypes.string,
  };

  static defaultProps = {
    locale: 'zh-cn',
  };

  constructor(props) {
    super(props);
    setMomentLocale(props.locale);
  }

  componentWillReceiveProps(nextProps) {
    const { locale } = this.props;
    const nextLocale = nextProps.locale;
    if (locale !== nextLocale) {
      setMomentLocale(nextProps.locale);
    }
  }

  static childContextTypes = {
    kryLocale: PropTypes.object,
  };

  getChildContext() {
    return {
      kryLocale: {
        ...lang[this.props.locale],
        exist: true,
      },
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
