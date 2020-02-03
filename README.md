Hi～欢迎使用由Viva基于vuepress官方文档的知识， 
自行搭建的满足自身大部分需求的vuepress文档框架，使用说明如下：  
  
### 开发：
- 步骤1: 安装node([Windows](https://blog.csdn.net/cai454692590/article/details/86093297)/[Mac](https://blog.csdn.net/m0_37896739/article/details/83545890))  
- 步骤2: git clone https://github.com/FVIVA/vuepress-template-demo.git
- 步骤3: 进入vuepress-template-demo文件夹，运行npm run install
- 步骤4: 运行 npm run docs:dev

**运行成功，开始你的VuePress之旅！**

### 部署：
- 步骤1: npm run build 获得dist包
- 步骤2: 将dist部署到服务器中
- 或 配置github pages。在库详情中 设置settings > 选项options > GitHub Pages 部分选择资源。设置后就可以使用 <用户名>.github.io 进行访问了。也可以设置下面的自定义域名Custom domain，把自己的二级域名使用CNAME别名解析到 <用户名>.github.io 上去，看着更好看
