import React from 'react';
import apiStatus from '../../../../consts/asyncStatus';
import propTypes from 'prop-types';
import { Icon, Spin, Button } from 'antd';
import './AsyncWrapper.less';

const AsyncComponentWrapper = ({
  status,
  AsyncComponent,
  prompt,
  reload,
  inline,
  initial,
}) => {
  let Reloader;
  if (inline) {
    Reloader = (
      <div className="supply-component-async-wrapper supply-component-async-wrapper--inline">
        <Icon type="exclamation-circle-o" />
        <p className="supply-component-async-wrapper__prompt">{prompt}</p>
        <Button
          className="supply-component-async-wrapper__btn"
          onClick={reload}
        >
          重新加载
        </Button>
      </div>
    );
  } else {
    Reloader = (
      <div className="supply-component-async-wrapper">
        <p className="supply-component-async-wrapper__prompt">{prompt}</p>
        <Button
          className="supply-component-async-wrapper__btn"
          onClick={reload}
        >
          重新加载
        </Button>
      </div>
    );
  }
  if (initial) {
    switch (status) {
      case apiStatus.INIT:
      case apiStatus.SUCCESS:
        return <AsyncComponent />;
      case apiStatus.LOADING:
        return (
          <div className="supply-component-async-wrapper">
            <Spin spinning />
          </div>
        );
      default:
      case apiStatus.FAILED:
        return Reloader;
    }
  } else {
    switch (status) {
      case apiStatus.SUCCESS:
        return <AsyncComponent />;
      case apiStatus.LOADING:
      case apiStatus.INIT:
        return (
          <div className="supply-component-async-wrapper">
            <Spin spinning />
          </div>
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
  initial: propTypes.bool,
};
AsyncComponentWrapper.defaultProps = {
  inline: false,
  initial: false,
};

export default AsyncComponentWrapper;
