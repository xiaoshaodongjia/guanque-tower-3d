# 鹳雀凌云 · 鹳雀楼数字化漫游

以参考照片制作鹳雀楼三维模型，结合程序生成的黄河、远山与天空，在浏览器里体验楼阁与山河。

**在线漫游：<https://xiaoshaodongjia.github.io/guanque-tower-3d/>**

## 操作

- 电脑：拖拽旋转，滚轮缩放。
- 手机：单指旋转，双指缩放。
- 点击「山河四境」中的任一场景，开始对应的自动巡航；拖拽或缩放即可接管镜头。
- 点击「白日晴空 / 黄昏落日」切换光照。
- 第四境「诗诵千年，白日依山尽」展示落日与王之涣《登鹳雀楼》。

## 页面与资源

这是一个可部署在 GitHub Pages 的静态网站，无需构建或后端服务。

- `index.html`：界面、场景与交互逻辑。
- `assets/guanque-tower.glb`：网页使用的鹳雀楼模型，材质贴图已内嵌。
- `assets/vendor/`：Three.js 0.170.0 及所需附加模块。
- `.nojekyll`：使 GitHub Pages 直接发布静态文件。

页面使用相对资源路径，运行时无需连接外部 CDN。首次访问需下载约 18.4 MB 的模型。请使用支持 WebGL 2 的现代浏览器。

## 本地预览

在仓库目录启动任意静态文件服务器，例如：

```sh
python3 -m http.server 8000
```

然后访问 <http://localhost:8000/>。此发布版本通过 HTTP/HTTPS 加载独立模型与模块。

## 部署

GitHub 仓库的 **Settings → Pages → Build and deployment** 选择 **Deploy from a branch**，使用 `main` 分支的 `/ (root)` 目录。后续推送到 `main` 会自动更新网站。

## 第三方库

Three.js 及其附加模块使用 MIT 许可证，许可证原文保存在 [`assets/vendor/LICENSE`](assets/vendor/LICENSE)。
