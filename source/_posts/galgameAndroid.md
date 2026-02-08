---
title: 安卓如何使用Tyranor游玩Galgame
date: 2026-02-06 19:19:42
top:
cover: /LimePan/androidGalgame/cover.webp
categories: 教程
description: 本片介绍了如何在安卓上快速游玩Galgame以及常用资源的分享，同时还说明了什么是Krkr2与Ons。
hidden:
tags:
- 教程
- 安卓
- 资源
- 入门
- 指南
mathjax:
tikzjax:
---

# 配套视频教程

我在[Bilibili](https://www.bilibili.com/video/BV1xQFkzmEGE/)发布了视频教程，欢迎支持我

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116023944548325&bvid=BV1xQFkzmEGE&cid=35868510916&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>



# 安装Tyranor

>Tyranor是安卓上的Galgame模拟器，现已支持基于Ons/Krkr2引擎的游戏。基本大众些的Galgame基本都可以运行。

![TyranorLogo - 这几把有点糊(我压缩的问题)](/LimePan/androidGalgame/Tyranor_icon.webp)<br>

![Telegram Update Log](/LimePan/androidGalgame/tg_ty.webp)<br>

这里给一下官方的Telegram频道，有兴趣的同学可以加入并支持开发者。

---

Telegram/tyranor
https://t.me/Tyranor

---

当然，如果你无合适的网络环境，我也提供了蓝奏云链接供你下载。

---

蓝奏云/Tyranor2.3.4
https://lime.lanzout.com/ieuyZ3hysbgf

---

安装之后使用`MT管理器`打开压缩包，然后选择安装包安装即可。

![h2 install](/LimePan/androidGalgame/install_ty.webp)<br>

# 获取更多资源
Galgame资源你可以从很多地方获取，接下来我会提供些你可能用的到的网站去获取`Krkr2/Ons`移植过的Galgame资源。<br>

!!! todo 提示
    视频中有许多内容我没有提到，一个是因为平台敏感缘故，还有原因是Galgame无需太过出圈，只留给真正感兴趣的同学。

## GalSites

>免费GalGame资源站目录，收录了诸多免费的gal资源站，是一个收藏夹类的项目。

!!! fail 提示
    由于奇怪的原因，你可能无法正常访问Github，开始前请先准备好合适的网络环境。

![站点截图](/LimePan/androidGalgame/galsites.webp)<br>


---

Github/Galsites
https://github.com/Shrans/GalSites

---

## 真红小站(失落小站)

>真红小站（原 失落小站）一个galgame资源站, 收录了大部分的汉化galgame, 大部分的生肉galgame资源，krkr资源，visual novel，等等。


该站点大陆用户可以非常快速访问，并且无广告，下载速度快速。十分推荐！<br>
用爱发电这块没得说，是很良心的站点。

![站点截图](/LimePan/androidGalgame/shinnku.webp)<br>


---

真红小站
https://shinnku.com/

---

## 梓澪の妙妙屋

!!! fail 提示
    由于奇怪的原因，你可能无法正常访问它，开始前请先准备好合适的网络环境。

推荐这个站点的原因和真红小站的原因类似，都是可以高速直链下载。
<br>
实测可以跑满带宽，唯一的缺点在于可能需要魔法访问。
<br>
在该网站搜索资源时，你可以使用搜索工具。

![站点截图](/LimePan/androidGalgame/zi0.webp)<br>

在检索资源时，你需要留意文件名，这会包含游戏的运行引擎，否则你将可能下载解压后也无法打开。

![文件都带有后缀 仔细留意游戏运行的引擎](/LimePan/androidGalgame/zi0_krkr.webp)<br>

---

梓澪の妙妙屋
https://zi0.cc/

---

# 什么是Krkr2与Ons？

>在视频中由于篇幅限制我无法展开来说明，在这里详细说说。

!!! fail 提示
    内容由Gemini-3.0-Pro生成。

## 引言：手机玩 Galgame 的两把“万能钥匙”

如果你是一个刚接触 Galgame（美少女游戏/视觉小说）的玩家，或者想在被窝里用手机推几部 PC 上的经典大作，你绝对绕不开两个词：**Krkr** 和 **Ons**。<br>

很多新人会误以为它们是某个具体的游戏，或者是某个下载平台。**错。**<br>

简单来说，它们是**模拟器（或解释器）**。PC 上的 Galgame 是为了 Windows 系统开发的，安卓手机看不懂那些代码。Krkr 和 Ons 就像是两个“翻译官”，它们在手机上搭建了一个环境，让原本只能在电脑上运行的游戏，得以在手机屏幕上跑起来。<br>

下面我们把这两个概念彻底拆解。<br>

---

## 第一部分：Krkr2 (吉里吉里2)

### 1. 它的本质是什么？
在 Galgame 开发圈，有一款非常著名的**游戏引擎**叫 **Kirikiri (吉里吉里)**。<br>
 **PC 端：** 它是开发工具。像《Fate/stay night》、《由于世界在之后终结》、《死馆》等无数著名大作，都是用这个引擎写出来的。<br>
 **手机端 (你所理解的 Krkr)：** 指的是一个名为 **Kirikiroid2 (吉里吉里2模拟器)** 的 APP。<br>

**核心逻辑：**<br>
Kirikiroid2 这个 APP 做到了在安卓上直接“原生”运行 PC 版 Kirikiri 引擎的代码。它不是简单的投屏，而是实打实地调用手机 CPU 去渲染游戏画面和脚本。<br>

### 2. 如何识别 Krkr 游戏？
当你下载到一个压缩包，解压后看到以下文件特征，它就是 Krkr 游戏：<br>
 核心数据文件后缀为 **`.xp3`** (如 `data.xp3`, `patch.xp3`)。<br>
 启动文件通常是 `startup.tjs` 或 `data.xp3`。<br>
 通常包含 `plugin` 文件夹（存放插件）。<br>

### 3. Krkr 的优缺点
 **优点（画质与性能）：**<br>
     **还原度极高：** 因为它是直接运行原版脚本，所以原本 PC 上的动态立绘（E-mote）、复杂的粒子特效、菜单交互，在手机上都能完美呈现。<br>
     **资源通用：** 很多时候，你把电脑上安装好的游戏文件夹直接复制到手机里，就能直接用模拟器打开玩（只要没有加密限制）。<br>
 **缺点（门槛）：**<br>
     **兼容性地狱：** 不同的游戏用了不同版本的插件，经常会出现“打不开”、“报错”、“乱码”的情况，需要打特定的补丁（Patch）。<br>
     **操作：** 虽然支持触屏模拟鼠标，但有些复杂的右键菜单操作在手机上并不顺手。<br>

---

## 第二部分：Ons (ONScripter)

### 1. 它的本质是什么？
ONS 的全称是 **ONScripter**。它的历史比 Krkr 更有“极客”味。<br>
 **起源：** 日本有一个叫 NScripter 的闭源引擎（曾制作过《月姬》、《寒蝉鸣泣之时》）。<br>
 **开源复刻：** 一位叫 Ogapee 的大神为了让非 Windows 系统（如 Linux）也能玩这些游戏，写了一个开源的解释器，叫 **ONScripter**。<br>
 **移植狂潮：** 因为它是开源的，各路大神把它移植到了 PSP、塞班、iOS 和安卓上。<br>

**核心逻辑：**<br>
手机上的 Ons 模拟器（如 ONScripter-JH, ONScripter-Plus），读取的是**经过移植处理**的脚本。这意味着，大部分 Ons 游戏并非直接拿 PC 版就能跑，而是经过了“移植组”的修改，把图片压缩、脚本重写，变成了手机能读懂的格式。

### 2. 如何识别 Ons 游戏？
解压游戏包后，看到以下“三件套”特征，它就是 Ons 游戏：<br>
 **`0.txt`** 或 **`nscript.dat`**：这是剧本文件（核心代码）。<br>
 **`arc.nsa`**：这是资源包（图片、音乐的压缩包）。<br>
 **`default.ttf`**：字体文件（虽然现在模拟器通常自带字体，但游戏包里常有）。<br>

### 3. Ons 的优缺点
 **优点（稳定与便携）：**<br>
     **傻瓜式运行：** 只要文件完整，极少报错。它不需要像 Krkr 那样折腾各种补丁。<br>
     **配置要求低：** 十年前的手机都能流畅运行，因为它显示的通常是静态图片配合文字，极少有复杂的实时渲染。<br>
     **体积小：** 经过移植压缩，几个 G 的游戏可能被压到几百 M。<br>
 **缺点（体验阉割）：**<br>
     **特效缺失：** 很多原本 PC 上的动态效果、复杂的动画，在转制成 Ons 版本时会被不得不删减，变成简单的“图片切换”。<br>
     **画质压缩：** 为了体积和流畅度，图片分辨率往往较低（早期多为 800x600 甚至更低）。<br>

---

## 第三部分：核心区别总结 (省流版)

| 特性 | Krkr2 (吉里吉里) | Ons (ONScripter) |
| :--- | :--- | :--- |
| **文件特征** | `.xp3` | `0.txt`, `arc.nsa` |
| **运行原理** | 接近原生运行 PC 脚本 | 运行经过移植/重写的脚本 |
| **画质/特效** | **高** (原汁原味) | **中/低** (往往有阉割) |
| **折腾程度** | **高** (需找补丁、解决报错) | **低** (解压即玩) |
| **适用年代** | 2010年后的多数新作 | 2010年前的老物/经典作 |

---

## 结语：时代的眼泪与传承

讲透了这两个概念，你实际上看到的是 Galgame 在移动端的**进化史**。<br>

 **Ons 是拓荒者：** 在智能手机刚起步、性能不足的年代，Ons 靠着开源和低配置要求，让无数玩家第一次在被窝里推完了《Clannad》和《Fate》。它是情怀，也是功臣。<br>
 **Krkr 是继承者：** 随着手机性能暴涨，大家不再满足于看“PPT”，想要 PC 级的动态演出，Krkr 应运而生，成为了现在的硬核主流。<br>

现在，虽然 **Ren'Py** 引擎（原生支持安卓）和官方直接发行的安卓版 Galgame 越来越多，但 Krkr 和 Ons 依然是二次元资源库里两座绕不开的大山。
