# vue-cli-apicloud

> vue-cli-apicloud

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

在开发时:

可以在 widget 目录下面去执行 apicloud-cli 的命令,将 config.xml 里面的 content 标签 src 属性指向到本机的 wifi 地址和 npm run dev 时监听的地址。这样开发的时候就可以实时预览了。

在发布时：
将打包的静态文件放入到 widget 下面，将 config.xml 里面的 content 标签 src 属性指向到主页面的 html 就可以了。
