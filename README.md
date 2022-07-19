# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

http://docs.thingspanel.io/

2.0搭建  查看在package.json  
    @docusaurus/core": "2.0.0-rc.1",

左脚上面logo  
  docusaurus.config.js 文件
    themeConfig {
      navbar：{
         logo: {
          alt: 'ThingsPanel',
          src: 'img/logo.svg',
        },
      }
    }
域名绑定 
   docusaurus.config.js 文件
      url: 'http://docs.thingspanel.io',
      baseUrl: '/',


版本构建  根据版本切换文档
versioned_docs 版本列表
  version-v2  //版本文件夹 v2是版本号
    hollow.md  //版本文件
  version-v3  //版本文件夹 v3是版本号
    hollow.md  //版本文件
versioned_sidebars 版本左侧列表
  version-v2-sidebars  //版本侧边栏
  version-v3-sidebars  //版本侧边栏
versions.json   版本管理器  最新版本在最前面 ['0.4','0.3','0.2','0.1']
                                            最新   次级  ---    ---

翻译命令 需要购买token 路径  crowdin.yml 这个文件 
  api_token_env: "我的令牌"   //我的令牌就是需要替换的地方
  npm run write-translations 生成 npm run crowdin upload 上传  npm run crowdin download 下载  
自动化翻译脚本   设置 CROWDIN_PERSONAL_TOKEN 环境变量
在构建 Docusaurus 站点之前，在 CI 中调用 npm run crowdin:sync 脚本
  "crowdin:sync": "docusaurus write-translations && crowdin upload && crowdin download"

链接到代码库
    docusaurus.config.js 文件
    themeConfig {
      navbar：{
         items: [
          {
            href: 'https://github.com/ThingsPanel', //链接到代码库的链接
            label: 'GitHub',
            position: 'right',
          },
         ]
      }
    }

菜单配置
     {
      type: 'doc',
      docId: 'intro',
      position: 'left',
      label: 'Docs',
    },
    { to: '/blog', label: 'Blog', position: 'left' },