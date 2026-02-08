---
title: 【Solitude】Hexo如何引入自定义css?
date: 2025-01-21 22:17:57
cover: /LimePan/customcss.webp
tags:
- 博客
- 建站
- Hexo
categories:
- 教程
---

!!! warning 警告
    该教程仅适用于Solitude主题！
    <br>不过大概思路以及方法都是类似的

说到自定义css，这是个很美妙的东西，在一定程度上，扩展了主题的实用性以及开发性，因此有许多以solitude的自定义css与js为基础的拓展存在于互联网。

!!! info 作用
    自定义字体
    <br>拓展主题功能
    <br>美化
    <br>…

那么话不多说，其实很简单，新建个目录，一行代码即可
<br>首先在`hexo-theme-solitude/source/css/`<br>其实就是你的Solitude主题的`source`目录下的`css`目录下创建一个`custom`文件夹，名称也是随意的<br>接着，使用文本编辑器打开`css`目录下的`index.styl`<br>在顶部添加这样一行代码。

``` styl
@import 'custom/*.css'
```

这样，在custom目录下的所有css都会起作用。
即操作完毕。


 