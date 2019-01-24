const path = require('path');

module.exports = {
  pagePerSection: true,
  title: '自定义组件',
  theme: {
    color: {
      link: '#314659',
      linkHover: '#5badfc',
      border: '#ebf5ff',
      sidebarBackground: '#fff',
    },
    sidebarWidth: 300,
    spaceFactor: 4,
    borderRadius: 5,
    maxWidth: 10000,
  },
  getComponentPathLine(componentPath) {
    return ``;
  },
  // 编辑区域的样式设置
  editorConfig: {
    theme: 'base16-dark',
    lineNumbers: true,
  },
  styles: {
    Playground: {
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
      },
    },
    Markdown: {
      pre: {
        border: 0,
        background: 'none',
      },
      code: {
        fontSize: 14,
      },
    },
  },
  styleguideComponents: {
    // 在渲染组件包一层
    Wrapper: path.join(__dirname, 'styleguideconfig/styleguideComponents/Wrapper.js'),
    // logo图片
    // LogoRenderer: path.join(__dirname, 'styleguideconfig/styleguideComponents/Logo.js'),
    // 修改整个页面的布局
    // StyleGuideRenderer: path.join(__dirname, 'styleguideconfig/styleguideComponents/StyleGuide.js'),
    // 内容区域wrapper
    // SectionsRenderer: path.join(__dirname, 'styleguideconfig/styleguideComponents/SectionsRenderer.jsx'),
  },
  usageMode: 'expand',
  exampleMode: 'expand',
  sections: [
    {
      name: '基础组件',
      content: './src/components/Basic/readme.md',
      components: 'src/components/Basic/**/index.jsx',
      sectionDepth: 1,
    },
    {
      name: '组合组件',
      content: './src/components/Combination/readme.md',
      components: './src/components/Combination/**/index.jsx',
      sectionDepth: 1,
    },
    {
      name: '业务组件',
      content: './src/components/Business/readme.md',
      components: './src/components/Business/**/index.jsx',
      sectionDepth: 1,
    },
  ],
  // webpackConfig: {
  //   module: {
  //     rules: [
  //       // Babel loader, will use your project’s .babelrc
  //       {
  //         test: /\.jsx?$/,
  //         exclude: /node_modules/,
  //         loader: 'babel-loader'
  //       },
  //       {
  //         test: /\.css$/,
  //         use: ['style-loader', 'css-loader'],
  //       },
  //       {
  //         test: /\.less$/,
  //         use: [
  //           'style-loader',
  //           'css-loader',
  //           'less-loader'
  //         ],
  //       },
  //     ]
  //   }
  // }
}

// https://github.com/styleguidist/react-styleguidist/tree/master/examples/customised  参考地址