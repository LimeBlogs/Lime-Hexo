---
title: LAB
date: 2025-01-15 22:06:35
cover: /LimePan/HexoLAB/cover.webp
tags: 
- 实验室
- 测试
- Hexo
- 博客
categories: 主站建设
top: 499
mathjax: true
tikzjax: true
---
# 起因



在更新日志撰写完毕后，我觉得开设一个帖子，专门存放一些Hexo与Markdown之类的代码与功能，这就是LimeLAB的由来。<br>主要还是没东西写罢了，只不过是为赋新词强说愁

# 实验性功能[测试]
以下存放代码以及功能实现，一方面是便于我调用，另一方面是为了水一篇帖子

## Solitude部分功能测试

{% subtabs 演示1 %}
<!-- tab test1 -->
**这是标签 1。**
<!-- endtab-->
<!-- tab test2 -->
**这是标签 2。**
<!-- endtab-->
<!-- tab test3 -->
**这是标签 3。**
<!-- endtab-->
{% endsubtabs %}

## Ruby与Spoiler

😋请先确保安装hexo-renderer-markdown-it

!!! fail 提示
    我在solitude无法使用Ruby这个插件，可能和我其它安装的插件有关系，也可能是主题问题。

``` bash
$ npm un hexo-renderer-marked --save #卸载自带渲染器
$ npm i hexo-renderer-markdown-it --save #安装渲染器
```

之后在config.yml中添加配置内容

``` yaml
markdown:
  preset: 'default'
  render:
    html: true
    xhtmlOut: false
    langPrefix: 'language-'
    breaks: true
    linkify: true
    typographer: true
    quotes: '“”‘’'
  enable_rules:
  disable_rules:
  plugins:
  anchors:
    level: 2
    collisionSuffix: ''
    permalink: false
    permalinkClass: 'header-anchor'
    permalinkSide: 'left'
    permalinkSymbol: '¶'
    case: 0
    separator: '-'
  images:
    lazyload: false
    prepend_root: false
    post_asset: false
  inline: false  # https://markdown-it.github.io/markdown-it/#MarkdownIt.renderInline
```

>Ruby是一个文字注释插件，可以在文字上方标注注释信息

<ruby>我是Lime.<rt>不玩原神</rt></ruby>{% spoiler 这其实是我用html写的 %}

``` html
<ruby>我是Lime.<rt>不玩原神</rt></ruby>
```

>Spoiler是一个文字遮盖插件，可以将文本进行遮盖，支持纯色遮盖与模糊遮盖。

很简单，安装插件即可
``` bash
$ npm install hexo-spoiler --save
```
接着，在config.yml中添加

``` yaml
spoiler:
  style: blur # 或者box blur是模糊效果，box是纯色填充
  color: black # 仅当 style 为 box 时起效
  p: false 
```

``` markdown
{% spoiler Lime世界第一帅 %}与
{% spoiler style:box Lime世界第一帅 %}
```

{% spoiler Lime世界第一帅 %}与{% spoiler style:box Lime世界第一帅 %}

## Tikz几何支持
如图所示，
```tikz
\begin{document}
  \begin{tikzpicture}[domain=0:4,scale=1.1]
    \draw[very thin,color=white] (-0.1,-1.1) grid (3.9,3.9);
    \draw[->, white] (-0.2,0) -- (4.2,0) node[right] {$x$};
    \draw[->, white] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
    \draw[color=red]    plot (\x,\x)             node[right] {$f(x) =x$};
    \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$f(x) = \sin x$};
    \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$f(x) = \frac{1}{20} \mathrm e^x$};
  \end{tikzpicture}
\end{document}
```

> 参照本文[Tikz On Hexo](https://prinsss.github.io/graphics-with-tikz-in-hexo/)



## 数学公式支持

!!! fail 警告
    在安装本文的两个插件前，请先卸载其它的hexo数学公式类插件（渲染）

测试一下


> 没啥可说的，安装以下两个插件即可

``` bash
pkg install pandoc
npm i hexo-filter-mathjax --save
npm i hexo-renderer-pandoc --save
```

接着，在hexo根目录下的config.yml下添加：

``` yaml
mathjax:
  tags: none # or 'ams' or 'all'
  single_dollars: true # enable single dollar signs as in-line math delimiters
  cjk_width: 0.9 # relative CJK char width
  normal_width: 0.6 # relative normal (monospace) width
  append_css: true # add CSS to pages rendered by MathJax
  every_page: false # if true, every page will be rendered by MathJax regardless the `mathjax` setting in Front-matter
  packages: # extra packages to load
  extension_options: {}
    # you can put your extension options here
    # see http://docs.mathjax.org/en/latest/options/input/tex.html#tex-extension-options for more detail

pandoc:
  args:
    - "-f"
    - "markdown"
    - "-t"
    - "html"
    - "--mathjax"
```

在md顶部添加mathjax: true即可在页面生效，例如：

``` md
૧(●´৺`●)૭
---
title: LAB
date: 2025-01-15 22:06:35
cover: 
tags: 
- 实验室
- 测试
- Hexo
- 博客
categories: 日常
top: 499
mathjax: true "这是我加是哈”
---
```

如何使用呢？使用LateX的语法即可生效，在公式上下添加，如下
<br>$\tiny{f(x)=f(x+T)，T\in N^{*}}$

``` LaTeX
$$
f(x)=f(x+T)，T\in N^{*} 什么周期
$$

调整字号大小
\tiny{ }, \scriptsize{ }, \small{ }, \normal{ }, \large{ }, \Large{ }, \LARGE{ }, \huge{ }, \Huge{ }
```

$$
f(x)=f(x+T)，T\in N^{*} 什么周期
$$


## Hexo-Admonition

> Hexo 内容辅助插件，支持将类似 reStructuredText 的警告提示块添加到 Markdown 文档中。<br>

[官方Github](https://github.com/lxl80/hexo-admonition)
<br>其实也没啥好说的，安装之后直接看示例就可以了<br>

``` bash
npm install hexo-admonition --save
```

``` Markdown
!!! note 原神
    这是一条note提示块
!!! warning 原神
    这是一条warning提示块
```

以此类推，接下来我将会把所有可用的提示块样式列举出来<br>

!!! note 原神
    这是一条note提示块

!!! warning 原神
    这是一条warning提示块

!!! info 原神
    这是一条info提示块

!!! todo 原神
    这是一条todo提示块

!!! attention 原神
    这是一条attention提示块

!!! caution 原神
    这是一条caution提示块

!!! error 原神
    这是一条error提示块

!!! failure 原神
    这是一条failure提示块

!!! missing 原神
    这是一条missing提示块

!!! fail 原神
    这是一条fail提示块

<br>就是这样子，个人感觉在md中使用还是很方便的！
<br>其中

``` markdown
!!! info ""
    这是一条不带标题的info提示块
```

!!! info ""
    这是一条不带标题的info提示块

等等，请在自定义css目录下创建`Hexo-admonition.css`然后在其中添加以下css代码，以确保该插件可以正常显示以及字体颜色正确。

!!! info 提示
    如果你不知道什么是自定义css目录，请在博客搜索相关内容
    
    >或者[单击这里查看教程](https://limeblogs.github.io/2025/01/21/customcss/)

``` Css
.admonition {
  margin: 1.5625em 0;
  padding: .6rem;
  overflow: hidden;
  color: #808080;
  font-size: .64rem;
  page-break-inside: avoid;
  border-left: .3rem solid #42b983;
  border-radius: .3rem;
  box-shadow: 0 0.1rem 0.4rem rgba(0,0,0,.05), 0 0 0.05rem rgba(0,0,0,.1);
  background-color: #fafafa;
}

p.admonition-title {
  color: #808080;
  position: relative;
  margin: -.6rem -.6rem .8em -.6rem !important;
  padding: .4rem .6rem .4rem 2.5rem;
  font-weight: 700;
  background-color:rgba(66, 185, 131, .1);
}

.admonition-title::before {
  position: absolute;
  color: #808080;
  top: .9rem;
  left: 1rem;
  width: 12px;
  height: 12px;
  background-color: #42b983;
  border-radius: 50%;
  content: ' ';
}

.info>.admonition-title, .todo>.admonition-title {
  background-color: rgba(0,184,212,.1);
  color: #808080;
}

.warning>.admonition-title, .attention>.admonition-title, .caution>.admonition-title {
  background-color: rgba(255,145,0,.1);
  color: #808080;
}

.failure>.admonition-title, .missing>.admonition-title, .fail>.admonition-title, .error>.admonition-title {
  background-color: rgba(255,82,82,.1);
  color: #808080;
}

.admonition.info, .admonition.todo {
  border-color: #00b8d4;
  color: #808080;
}

.admonition.warning, .admonition.attention, .admonition.caution {
  border-color: #ff9100;
  color: #808080;
}

.admonition.failure, .admonition.missing, .admonition.fail, .admonition.error {
  border-color: #ff5252;
  color: #808080;
}

.info>.admonition-title::before, .todo>.admonition-title::before {
  background-color: #00b8d4;
  border-radius: 50%;
  color: #808080;
}

.warning>.admonition-title::before, .attention>.admonition-title::before, .caution>.admonition-title::before {
  background-color: #ff9100;
  border-radius: 50%;
  color: #808080;
}

.failure>.admonition-title::before,.missing>.admonition-title::before,.fail>.admonition-title::before,.error>.admonition-title::before{
  background-color: #ff5252;;
  border-radius: 50%;
  color: #808080;
}

.admonition>:last-child {
  margin-bottom: 0 !important;
  color: #808080;
}
```


## 在md中引入Geogebra
这个功能就是使用``</iframe>``来引入网页<br>功能如下
<iframe src="https://www.geogebra.org/material/iframe/id/aybe2kg6/width/400/height/400/" width="400px" height="400px" style="border:0px;"> </iframe>
如果是几何的话甚至可以拖动！这样就可以很方便的在Hexo引入数学函数图像，方便易用。

``` html
<iframe src="https://www.geogebra.org/material/iframe/id/aybe2kg6/width/400/height/400/"   
width="400px" 
height="400px">
</iframe>
```

### 如何创建分享链接？
`首先，你需要一个账户，这太简单了，使用邮箱即可注册，这里跳过不讲`<br>
打开[Geogebra Classic](https://www.geogebra.org/classic)输入你要的函数之后点击“分享”

> 如果你不知道如何正确使用Geogebra，[点击这里开始入门](https://help.geogebra.org/hc/zh-cn/articles/10445800380957)

![如图](/LimePan/HexoLAB/Geogebra1.webp)<br>
在输入需要保存的文件名后选择保存即可
![输入文件名后保存](/LimePan/HexoLAB/Geogebra2.webp)<br>
之后，选择链接`插入`进行复制
![复制插入](/LimePan/HexoLAB/Geogebra3.webp)<br>
你大概率会得到这样一串这样的代码

``` html
<iframe scrolling="no" title="test" src="https://www.geogebra.org/material/iframe/id/aybe2kg6/width/360/height/801/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="360px" height="801px" style="border:0px;"> </iframe>
```

你要做的，就是对以下链接进行净化

``` html
https://www.geogebra.org/material/iframe/id/aybe2kg6/width/360/height/801/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false
```

<br>以下为净化后的链接<br>就是把height之后的参数删除了而已
``` html

https://www.geogebra.org/material/iframe/id/aybe2kg6/width/360/height/801/
```

<br>如果你需要开启额外的功能，可以参照[这篇文档](https://geogebra.github.io/docs/reference/en/Material_Embedding_(Iframe)/)<br>通过输入 `参数`/`布尔值`的方式来决定你是否要在插入的链接里开启部分功能！<br>
接着，将链接放回代码中<br>建议将链接里和代码里的`width`与`height`的值修改为400！在我看来这样的阅读效果是最佳的！

``` html
<iframe scrolling="no" title="test" src="https://www.geogebra.org/material/iframe/id/aybe2kg6/width/400/height/400/" width="400px" height="400px" style="border:0px;"> </iframe>
```

就像这样子！完事！接着将代码直接粘贴到你的md文件中即可被正确加载！


 