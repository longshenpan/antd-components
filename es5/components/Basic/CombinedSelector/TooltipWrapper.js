import 'antd/lib/tooltip/style';
import _Tooltip from 'antd/lib/tooltip';
import React from 'react';
import propTypes from 'prop-types';


var TooltipWrapper = function TooltipWrapper(props) {
  var name = props.name;

  return React.createElement(
    _Tooltip,
    { title: name, placement: 'topLeft', overlay: name },
    name
  );
};

TooltipWrapper.propTypes = {
  name: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired
};
export default TooltipWrapper;