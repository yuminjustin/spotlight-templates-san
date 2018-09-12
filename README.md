
## spotlight-templates-san
spotlight scaffold template for san<br>

## Use：

     spotlight init san my-project

     cd my-project

     npm install

     npm run dev

     npm run build

此模板是webpack、san环境<br>
This template is base on webpack, support for san development <br>

1.配置在build/config.js 当中；<br>
  Configures in build/config.js <br><br>
2.关于san <a href="https://ecomfe.github.io/san/tutorial/start/" target="_blank">start</a>；<br>
  About san ↑<br><br>
3.引入gulp对webpack打包后的js做关键字替换让它能支持更低版本IE，经过测试已支持IE7。<br>
（gulp会在执行build之后自动执行，无需手动操作，为保证兼容性请尽量使用es5做开发）<br>
  Use gulp to replace javascript keywords in the files packs by webpack, so we can run it on IE7!<br>
（gulp will execute automatically after executing build, no manual operation required, To ensure compatibility please try to use es5 to develop）<br><br>
4.webpack的热替换好像并不能生效，只会刷新页面。<br>
Webpack hot reload can't work well，just refresh when you edit your files。<br>
<br>
5.gulp需要全局安装。<br>
gulp  install globally.<br>
<br>
6.webpack3 only<br><br>

<br>
注：开发状态只支持IE11，打包后的代码可以支持到IE7。<br>
<br>
notice:When you developing the codes just can run on IE7, then you execute build they can works on IE7.
