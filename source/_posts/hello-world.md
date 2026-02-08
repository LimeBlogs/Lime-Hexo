---
title: 如何只使用一部安卓手机搭建Hexo并部署至GithubPages？
date: 2025-01-13 22:06:35
cover: /LimePan/LimeHello.webp
categories:
- 教程
tags:
- 建站
- 博客
- Hexo
- 入门
---

# 这是？

![封面](/LimePan/LimeHello.webp)
欢迎来到 [莱姆Lime](https://LimeBlogs.github.io) 平时在这里与大家一起聊聊天（好像还没做评论功能┐(´-｀)┌）叙叙事<br>扯些有的没的<br>该帖子为一切的起点！<br>见证这一切的开始吧！<br>`此帖子基于一开始生成的hello-world 所修改`<br>
``` bash
$ hexo g
```

## 前言

本教程并不会很详细，不过大概的步骤都会给你，照做即可。

### 关于本站是怎么来的

之前早就听过[Hexo](https://hexo.io/)这一博客的大名<br>其实心里早就想要花时间去搭建一个博客<br>于是，纷争开始了

### 问题

关键是我只有部手机，这怎么玩，装这玩意是要[Git](https://git-scm.com/?hl=zh-cn)的啊，在安卓上，折腾的过程中出现了很多问题
<br>而且操作并不方便，这可咋办咋办咋办T^T<br>可是你们还是可以看到这篇文章，说明我已经成功了

### 解决方法

基于[这篇教程](https://ghjayce.github.io/p/system/android/env/install-git/)，可以在安卓设备上安装[termux](https://termux.dev/cn/)以在终端里安装并使用[node.js](https://nodejs.org/)与git<br>
在参照上篇教程安装git后，在termux使用以下命令安装Node.js<br>
``` bash
$ apt install nodejs
```
在跑完进度条后即算作安装成功，接着，按[照该教程](https://tech.yemengstar.com/hexo-tutorial-deploy-githubpages-beginner/)一路走即可
不要按照他的方式在别的目录安装hexo！会出现问题！<br>先cd到根目录，再使用npm安装hexo
``` bash
$ cd
$ npm install hexo-cli -g
```
安装之后，目录是在`/data/user/0/com.termux/files/home/hexo/(至少安卓12是这样的)`<br>
将这一切完成后，在修改`_config.yml`就是部署到github这一步时，请按照如下方式修改`踩坑踩出来的教训`

!!! info 注意
    未Root的安卓设备无法修改data目录，这时可以在cd到一个可以修改的目录，然后在该目录安装hexo。



``` _config.yml
#文本末尾
deploy:
  type: git
  repo: #这里按照他的方式做即可
  branch: main  #将那篇文章的gh-pages改成main，后面改分支的操作就不需要了
```
将这一切做好后，即可使用你专属的Github.io域名来访问独属于你自己的Hexo！

### 注意事项

- 请确保你创建`id_rsa.pub`时的网络环境与你在Github添加时的网络环境`（不要翻墙/更换局域网）`一致！
- 开始前，请把`“所有文件的访问权限”给termux！`以确保不会出现文件无法访问这一类的错误
- 需要安装主题可以去网络上搜索教程，主要是在`_config.yml`中修改：

``` _config.yml
# Extensions      【第96行】
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: #将此处修改为你要启用的主题名称
```

### 总结

算是水了一篇帖子，这真的走了我好久的弯路，实在不会的可以查度娘捏<br>



 