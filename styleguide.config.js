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
  getComponentPathLine: function(componentPath) {
    return ``;
  },
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
    Wrapper: path.join(__dirname, 'styleguideconfig/styleguideComponents/Wrapper.js'),
    // LogoRenderer: path.join(__dirname, 'styleguide/components/Logo'),
    // StyleGuideRenderer: path.join(__dirname, 'lib/styleguide/StyleGuide'),
    SectionsRenderer: path.join(__dirname, 'styleguideconfig/styleguideComponents/SectionsRenderer.jsx'),
  },
  usageMode: 'expand',
  exampleMode: 'expand',
  sections: [
    {
      name: '组件使用指南',
      sections: [{
        name: '子元素',
        content: './markdown/original.md',
      }],
      sectionDepth: 1,
    },
    {
      name: '组件使用指南2',
      content: './markdown/radio.md',
    },
    {
      name: '自定义UI组件',
      content: './markdown/customized.md',
      components: 'src/components/**/index.jsx',
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