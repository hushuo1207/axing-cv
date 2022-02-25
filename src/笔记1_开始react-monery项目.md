###  项目开始

- [方方源码](https://github.com/FrankFang/morney-react-1)


    运行 yarn config set registry https://registry.npm.taobao.org/   

    yarn global add create-react-app@3.4.1 （亦可用 npm 全局安装）   
    create-react-app morney --template typescript（项目名可以自定）   
    cd morney   
    yarn start（会自动打开浏览器）   
    不喜欢自动，就运行 echo 'BROWSER=none' > .env 再 yarn start   

    git rm -rf --cached .idea   
    git rm -rf --cached .vscode   

    如果用 WebStorm，就在 .gitignore 添加 /.idea  
    如果用 VSCode，就在 .gitignore 添加 /.vscode  

-  在 index.css 添加 @import-normalize; 即可


    yarn add --dev node-sass@npm:dart-sass@1.25.0  

    yarn add react-router-dom  

    yarn add --dev @types/react-router-dom  

- 目录详解
    ![avatar](./1.png)

### CSS 相关配置

- normalize / SCSS / 绝对路径


    CSS normalize   -  https://create-react-app.dev/docs/adding-css-reset

    做法： 在index.css添加@import-normalize;
    作用： 保证页面在不同浏览器上默认样式相近 
    注意： 编辑器会报错， 无视即可

- SCSS支持  -  [配置详情](https://create-react-app.dev/docs/adding-a-sass-stylesheet)

- 需安装sass---建议用dart-sass替代node-sass


    yarn add --dev node-sass@npm:dart-sass@1.25.0
    上面的命令可用dart-sass代替node-sass webstorm下提示点击no

- 讲故事
    ![avatar](./2.png)

- 让 CSS 用@import引用

    
    Vue项目中可以用 @ 代替 src/ 目录
    
    React中 
        不需要@
        可以直接用 @import 'xxx/yyy' 来引入src/xxx/yyy.scss
        [配置细节](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
    
    JS中 
        在 tsconfig.json 添加一行 "baseUrl": "src"
        可以直接用 import 'xxx/yyy.tsx' 来引入src/xxx/yyy.tsx
        [配置细节](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
    
    helper.scss  
![avatar](./3.png)

- 本次项目用 CSS-in-JS 方案： [styled-components](https://github.com/styled-components/styled-components/blob/master/README.md)


    需要安装 styled-components 和 @types/styled-components
    前者JS源码 后者是TS类型声明文件

    webstorm - settings--plugins-search: Styled Components
    vscode - 安装 - vscode-styled-components

### 配置总结
#### 使用TS开发React应用
1.CSS 方面

- 使用@import-normalize;引入noemalize。css
- 使用dart-sass 编译SCSS文件至CSS
- 直接import"xxx"以应用 src/xxx
- 将变量和函数放入src/helper.scss
- 使用 styled-components 这种 CSS-in-JS
- 编辑器里安装插件 以方便使用 styled-components
2.TS方面

- 配置tsconfig.js后使用import 'xxx' 以使用 src/xxx
3. CRM 学习法
- copy 抄  - run 运行 - modify 修改  



