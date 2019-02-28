import 'antd/lib/spin/style';
import _Spin from 'antd/lib/spin';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import React from 'react';
import apiStatus from '../../../../consts/asyncStatus';
import propTypes from 'prop-types';

import './AsyncWrapper.less';

var AsyncComponentWrapper = function AsyncComponentWrapper(_ref) {
  var status = _ref.status,
      AsyncComponent = _ref.AsyncComponent,
      prompt = _ref.prompt,
      reload = _ref.reload,
      inline = _ref.inline,
      initial = _ref.initial;

  var Reloader = void 0;
  if (inline) {
    Reloader = React.createElement(
      'div',
      { className: 'supply-component-async-wrapper supply-component-async-wrapper--inline' },
      React.createElement(_Icon, { type: 'exclamation-circle-o' }),
      React.createElement(
        'p',
        { className: 'supply-component-async-wrapper__prompt' },
        prompt
      ),
      React.createElement(
        _Button,
        {
          className: 'supply-component-async-wrapper__btn',
          onClick: reload
        },
        '\u91CD\u65B0\u52A0\u8F7D'
      )
    );
  } else {
    Reloader = React.createElement(
      'div',
      { className: 'supply-component-async-wrapper' },
      React.createElement(
        'p',
        { className: 'supply-component-async-wrapper__prompt' },
        prompt
      ),
      React.createElement(
        _Button,
        {
          className: 'supply-component-async-wrapper__btn',
          onClick: reload
        },
        '\u91CD\u65B0\u52A0\u8F7D'
      )
    );
  }
  if (initial) {
    switch (status) {
      case apiStatus.INIT:
      case apiStatus.SUCCESS:
        return React.createElement(AsyncComponent, null);
      case apiStatus.LOADING:
        return React.createElement(
          'div',
          { className: 'supply-component-async-wrapper' },
          React.createElement(_Spin, { spinning: true })
        );
      default:
      case apiStatus.FAILED:
        return Reloader;
    }
  } else {
    switch (status) {
      case apiStatus.SUCCESS:
        return React.createElement(AsyncComponent, null);
      case apiStatus.LOADING:
      case apiStatus.INIT:
        return React.createElement(
          'div',
          { className: 'supply-component-async-wrapper' },
          React.createElement(_Spin, { spinning: true })
        );
      default:
      case apiStatus.FAILED:
        return Reloader;
    }
  }
};
AsyncComponentWrapper.propTypes = {
  prompt: propTypes.string.isRequired,
  reload: propTypes.func.isRequired,
  AsyncComponent: propTypes.func.isRequired,
  status: propTypes.string.isRequired,
  inline: propTypes.bool,
  initial: propTypes.bool
};
AsyncComponentWrapper.defaultProps = {
  inline: false,
  initial: false
};

export default AsyncComponentWrapper;