import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import React from 'react';


var clearMark = '移除 ';

var renderTags = function renderTags(menus, selecteds, onRemove, fields) {
  if (!selecteds) return;
  return menus.map(function (menuItem) {
    var realKey = void 0;

    realKey = menuItem[fields.key];

    if (selecteds.indexOf(realKey + '-noChild') !== -1 && (!menuItem[fields.children] || menuItem[fields.children] && menuItem[fields.children].length === 0)) {
      var tagName = menuItem[fields.title];

      return React.createElement(
        _Row,
        { key: realKey + '-noChild', className: 'list__item' },
        !menuItem.disabled && React.createElement(
          'a',
          {
            name: realKey + '-noChild',
            onClick: function onClick() {
              return onRemove(realKey + '-noChild');
            }
          },
          clearMark
        ),
        React.createElement(
          'div',
          {
            style: {
              width: '160px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }
          },
          tagName
        )
      );
    }
    if (menuItem[fields.children] && menuItem[fields.children].length > 0) {
      return renderTags(menuItem[fields.children], selecteds, onRemove, fields);
    }
    return null;
  });
};
export default function SelectorList(_ref) {
  var data = _ref.data,
      selectedDetail = _ref.selectedDetail,
      onRemoveAll = _ref.onRemoveAll,
      onRemove = _ref.onRemove,
      handlerConfirmClick = _ref.handlerConfirmClick,
      checkedItemsNum = _ref.checkedItemsNum,
      totalItemsNum = _ref.totalItemsNum,
      suffixMsg = _ref.suffixMsg,
      prefixMsg = _ref.prefixMsg,
      clearButton = _ref.clearButton,
      okButton = _ref.okButton,
      index = _ref.index,
      fields = _ref.fields,
      clearTips = _ref.clearTips;

  clearMark = clearTips;

  var showRemoveAll = selectedDetail[index].length > 0;
  return React.createElement(
    'div',
    { className: 'tree-selector__list' },
    React.createElement(
      'div',
      { className: 'list__content' },
      showRemoveAll ? renderTags(data, selectedDetail[index], onRemove, fields) : React.createElement('div', { className: 'combined-selector' })
    ),
    React.createElement(
      'div',
      { className: 'list__action' },
      React.createElement(
        'span',
        { className: 'showMessage' },
        prefixMsg,
        ' ',
        React.createElement(
          'span',
          { className: 'selected' },
          checkedItemsNum
        ),
        '/' + totalItemsNum + ' ' + suffixMsg
      ),
      showRemoveAll && React.createElement(
        'a',
        { onClick: onRemoveAll },
        clearButton
      ),
      React.createElement(
        _Button,
        {
          type: 'primary',
          className: 'confirm_btn',
          disabled: !showRemoveAll,
          onClick: handlerConfirmClick
        },
        okButton
      )
    )
  );
}