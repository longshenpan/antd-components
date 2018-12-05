import React from 'react';
import { Row, Button } from 'antd';

let clearMark = '移除 ';

const renderTags = (menus, selecteds, onRemove, fields) => {
  if (!selecteds) return;
  return menus.map(menuItem => {
    let realKey;

    realKey = menuItem[fields.key];

    if (
      selecteds.indexOf(`${realKey}-noChild`) !== -1 &&
      (!menuItem[fields.children] ||
        (menuItem[fields.children] && menuItem[fields.children].length === 0))
    ) {
      const tagName = menuItem[fields.title];

      return (
        <Row key={`${realKey}-noChild`} className="list__item">
          {!menuItem.disabled && (
            <a
              name={`${realKey}-noChild`}
              onClick={() => onRemove(`${realKey}-noChild`)}
            >
              {clearMark}
            </a>
          )}
          <div
            style={{
              width: '160px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {tagName}
          </div>
        </Row>
      );
    }
    if (menuItem[fields.children] && menuItem[fields.children].length > 0) {
      return renderTags(menuItem[fields.children], selecteds, onRemove, fields);
    }
    return null;
  });
};
export default function SelectorList({
  data,
  selectedDetail,
  onRemoveAll,
  onRemove,
  handlerConfirmClick,
  checkedItemsNum,
  totalItemsNum,
  suffixMsg,
  prefixMsg,
  clearButton,
  okButton,
  index,
  fields,
  clearTips,
}) {
  clearMark = clearTips;

  const showRemoveAll = selectedDetail[index].length > 0;
  return (
    <div className="tree-selector__list">
      <div className="list__content">
        {showRemoveAll ? (
          renderTags(data, selectedDetail[index], onRemove, fields)
        ) : (
          <div className="combined-selector" />
        )}
      </div>
      <div className="list__action">
        <span className="showMessage">
          {prefixMsg} <span className="selected">{checkedItemsNum}</span>
          {`/${totalItemsNum} ${suffixMsg}`}
        </span>
        {showRemoveAll && <a onClick={onRemoveAll}>{clearButton}</a>}
        <Button
          type="primary"
          className="confirm_btn"
          disabled={!showRemoveAll}
          onClick={handlerConfirmClick}
        >
          {okButton}
        </Button>
      </div>
    </div>
  );
}
