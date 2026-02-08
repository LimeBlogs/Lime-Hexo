# Lime | 莱姆

>这是我在一月份基于hexo+Solitude主题二次魔改的博客。

我在原有基础上对原Solitude主题进行深度配置，并且完善了许多插件以及添加了许多新特性。

由于部分原因，我无法将_config.yml一并上传，因为它包含太多敏感信息。

不过我会在这里提供一个完整的_config.yml供你使用。


## 快速开始

首先，安装`Hexo-Cli`

```bash
npm install -g hexo-cli
```

接着拉取本仓库代码并打开。


```bash
git clone https://github.com/LimeBlogs/Lime-Hexo.git myblog
```


```bash
cd Lime-Hexo
```

安装依赖。

```bash
npm install
```

新建文章

```bash
hexo new HelloWorld
```

## 其他特性

我Hexo内置多种插件，你大多可以在`https://Sudachi.top`的实验室内找到具体用法。


## 配置文件

```yaml
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: 莱姆Lime
subtitle: 聚是火簇，散作繁星。
description: 莱姆のBlog｜LimeBlogs｜数码｜科技｜碎笔，在生命中感受活着的意义！理解这一段仅有一次的过程！
keywords: 莱姆 Lime 博客
author: Lime
language: zh-CN
timezone: Asia/Shanghai

# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://Sudachi.top/
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
# APlayer
# https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md
# Directory
source_dir: source
public_dir: public
tag_dir: tags
givebase_dir: give
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link:
  enable: true # Open external links in new tab
  field: site # Apply to the whole site
  exclude: ''
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
syntax_highlighter: highlight.js
highlight:
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  preprocess: true
  line_number: true
  tab_replace: ''

# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
  path: ''
  per_page: 10
  order_by: -date

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Metadata elements
## https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
meta_generator: true

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss
## updated_option supports 'mtime', 'date', 'empty'
updated_option: 'mtime'

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Include / Exclude file(s)
## include:/exclude: options only apply to the 'source/' folder
include:
exclude:
ignore:

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
    - markdown-it-abbr
    - markdown-it-attrs
    - markdown-it-cjk-breaks
    - markdown-it-container
    - markdown-it-deflist
    - markdown-it-emoji
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-mark
    - markdown-it-sub
    - markdown-it-sup
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

hexo_submit_urls_to_search_engine:
  # 提交最新的 n 个链接
  count: 8
  # 提交修改时间在 n 秒内的链接，单位秒。例如：
  # 有两个文件 a.txt 和 b.txt，分别对应 https://yoursite.com/a.txt 和 https://yoursite.com/b.txt
  # 其更新时间距当前分别为 800s 和 1000s（period 字段设为 900）
  # 则 https://yoursite.com/a.txt 会被提交，https://yoursite.com/b.txt 不会
  period: 900
  # 提交链接的条件，可选值：count | period。不同取值的含义如下：
  # count ：应用上述的 count  配置项，现仅支持此方式
  # period：应用上述的 period 配置项
  submit_condition: count
  # 是否向 Google 提交，可选值：1 | 0（0：否；1：是）
  google: 1
  # 是否向 Bing 提交，可选值：1 | 0（0：否；1：是）
  bing: 1
  # 是否向 Baidu 提交，可选值：1 | 0（0：否；1：是）
  baidu: 0
  # 文本文档的地址，要推送的链接会保存在此文本文档里
  txt_path: submit_urls.txt
  # 在百度站长平台中注册的域名
  baidu_host: https://yoursite.com/
  # 百度自动推送 API 的 token（获取方式见插件文档：https://cjh0613.com/20200603HexoSubmitUrlsToSearchEngine.html）
  baidu_token: xxxxx
  # 在必应站长平台中注册的域名
  bing_host: https://Sudachi.top/
  # 必应自动推送 API 的 token（获取方式见插件文档：https://cjh0613.com/20200603HexoSubmitUrlsToSearchEngine.html）
  bing_token: 
  # 在谷歌站长平台中注册的域名
  google_host: https://sudachi.top/
  # 存放 google key 的 json 文件，放于网站根目录
  google_key_file: google_key.json
  replace: 0  # 是否替换链接中的部分字符串，可选值：1 | 0（0：否；1：是）
  find_what: https://Sudachi.top/
  replace_with: https://Sudachi.top/
  google_proxy: "http://127.0.0.1:7890"

# Extensions主题捏
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: solitude

#搜索功能
search:
  path: search.xml
  field: post
  content: true
  format: html
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  - type: git
    repo: git@github.com:LimeBlogs/LimeBlogs.github.io.git
    branch: main
    ignore_hidden: false # 忽略隐藏文件及文件夹(目录)
  - type: cjh_google_url_submitter
  - type: cjh_bing_url_submitter
# hexo-safego安全跳转插件
# see https://blog.liushen.fun/posts/1dfd1f41/
hexo_safego:
  # 基本功能设置
  general:
    enable: true                # 启用插件
    enable_base64_encode: true  # 使用 Base64 编码
    enable_target_blank: true   # 从新窗口打开跳转页面

  # 安全设置
  security:
    url_param_name: 'u'         # URL 参数名
    html_file_name: 'go.html'   # 重定向页面的文件名
    ignore_attrs:               # 忽略处理的 HTML 结构
      - 'data-fancybox'

  # 容器与页面设置
  scope:
    apply_containers:           # 应用的容器选择器
      - '#article-container'
    apply_pages:                # 应用的页面路径
      - "/posts/"
      - "/devices/"
    exclude_pages:              # 排除的页面路径

  # 域名白名单
  whitelist:
    domain_whitelist:           # 允许的白名单域名，通过字符串匹配实现
      - "qyliu.top"
      - "liushen.fun"

  # 页面外观设置
  appearance:
    avatar: /info/avatar.ico    # 跳转页面头像路径
    title: "清羽飞扬"            # 跳转页面标题
    subtitle: "安全中心"         # 跳转页面副标题
    darkmode: false             # 是否启用深色模式
    countdowntime: 4            # 跳转页面倒计时秒数，如果设置为负数则为不自动跳转

  # 调试设置
  debug:
    enable: false               # 启用调试模式

hexo_indexnow:
  count: latest # 数字或者 "latest"(=1)
  txt_name: indexnow.txt # 链接文件名
  apikey:  # 你的 apikey
  server: bing # indexnow 服务器，可选值有:bing、yandex、indexnow

  deploy:
    - type: indexnow_url_submitter   
    
    
hexo_google_adsense:
  enable: true
  log_msg: true
  tag_name: 'GoogleAdsense'
  file_path: 'source/ads/google/article_ads.html'

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

tikzjax:
  # Enable TikZ rendering for all posts and pages.
  # Or you can enable it per post by adding `tikzjax: true` to the front-matter.
  every_page: false
  # Add CSS to pages which contain TikZ graphs.
  append_css: true
  # URL of the font CSS file.
  font_css_url: 'https://cdn.jsdelivr.net/npm/node-tikzjax@latest/css/fonts.css'
  # Additional options that will be passed to node-tikzjax.
  # See: https://github.com/prinsss/node-tikzjax/#usage
  # tikzjax_options:
  #   showConsole: false

pandoc:
  args:
    - "-f"
    - "markdown"
    - "-t"
    - "html"
    - "--mathjax"
 
spoiler:
  style: blur # 或者box
  color: black # 仅当 style 为 box 时起效
  p: false # 没懂啥意思，不管它
  
hide_posts:
  # 是否启用 hexo-hide-posts
  enable: true

  # 隐藏文章的 front-matter 标识，也可以改成其他你喜欢的名字
  filter: hidden

  # 为隐藏的文章添加 noindex meta 标签，阻止搜索引擎收录
  noindex: true
  allowlist_generators: ['archive', 'category']

  # 设置白名单，白名单中的 generator 可以访问隐藏文章
  # 常见的 generators 有：index, tag, category, archive, sitemap, feed, etc.
  # allowlist_generators: []

  # 设置黑名单，黑名单中的 generator 不可以访问隐藏文章
  # 如果同时设置了黑名单和白名单，白名单的优先级更高
  # blocklist_generators: ['*']

# 注意在此处配置
```


# 致谢

[Solitude](https://github.com/everfu/hexo-theme-solitude)

[Hexo](https://github.com/hexojs/hexo)