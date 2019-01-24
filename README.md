# antd-components
基于antd开发的组件

## react-styleguidist 问题

组件中目录下如果有readme.md文件， 则在组件中不用加入

```
    //@example [path.md]
    或者
    /**
     * @example [path.md]
     */
```

来引入markdown文件，否则会加载两遍组件在section区域

例如 indexl.jsx文件

```jsx
    /**
     * 具有星期提示信息和前缀信息的基础日期选择器
     * @example ./readme.md
     */
    export default class BasicDatePicker extends React.Component {
      static displayName = 'BasicDatePicker 日期选择框';

      static defaultProps = {
        width: '250px',
      };

      static propTypes = {
        /** input width */
        width: PropTypes.string,
        /** datePicker prefix info */
        prefixTxt: PropTypes.string.isRequired,
        /** show week info when select certain date */
        week: PropTypes.string.isRequired,
        /** function call on select certain date */
        onChange: PropTypes.func.isRequired,
      };

      render() {
        const { prefixTxt, width, week, onChange } = this.props;
        return (
          <span className="basic-container">
            <DatePicker
              className="basic-datepicker"
              style={{ width }}
              onChange={onChange}
            />
            <span className="prefix-text">{prefixTxt}</span>
            <span className="suffix-text">{week}</span>
          </span>
        );
      }
    }

```



