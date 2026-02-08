---
title: SillyTavern酒馆部署教程
date: 2025-07-12 21:46:33
top:
cover: /LimePan/SillyTavern.webp
categories: 教程
description: 本文章是一篇SillyTavern酒馆从零到基础的部署教程，并含有配套B站教程
hidden:
tags:
- 酒馆
- SillyTavern
- 教程
- 指南
- 资源
mathjax:
tikzjax:
---

# 捐赠

**教程录制与文档撰写不易，需要经过多次测试后发出**
<br>
**如果可以的话，请支持我哦**
<br>
**感激不尽 ฅ( ̳• ◡ • ̳)ฅ**
<br>

```bash
echo 蟹蟹！ꉂ(ˊᗜˋ*)
```

![捐赠](/LimePan/zanzhu.webp)<br>


# Termux安装与配置镜像源

**本教程在B站同步更新，欢迎查看视频教程**

<br>

[点我跳转至B站](https://www.bilibili.com/video/BV1yoGuzEEKc)

<br>

**如果教程能帮到你，求个三连，谢谢你啦**

<br>

**该教程已于2025年7月12日完结**

<br>

**本以为完事大吉了，在2025年7月16日再次更新**

<br>

*修改软件源为阿里源，清华源…呵呵*

<br>

**复制命令时确保全部复制到了!**

---

*操作步骤均不需要Root与魔法，仅仅只是无脑复制粘贴命令而已*
<br>
您需要先下载Termux


[点我跳转至GithubRelease](https://github.com/termux/termux-app)
<br>
[国内镜像源高速下载](https://github.akams.cn/https://github.com/termux/termux-app/releases/download/v0.118.3/termux-app_v0.118.3+github-debug_arm64-v8a.apk)

---

在安装Termux后，输入以下命令来修改镜像源

```bash
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.aliyun.com/termux/termux-packages-24 stable main@' $PREFIX/etc/apt/sources.list
# 修改为阿里镜像源，清华源谁用谁倒霉…
```


```bash
apt update && apt upgrade
# 更新软件包管理器
```

安装必要软件

```bash
apt install vim wget git nodejs -y
# 安装必要工具，添加参数-y无需手动输入y
```

配置nodejs镜像源

```bash
npm config set registry https://registry.npmmirror.com
# 配置npmMirror镜像源，以便国内用户可以高速下载
```

# 开始部署

使用wget获取酒馆源码

```bash
wget -O ST.zip https://github.akams.cn/https://github.com/SillyTavern/SillyTavern/archive/refs/tags/1.13.1.zip
# 使用代理Github加速下载原文件，下载为ST.zip
```

解压该文件

```bash
unzip ST.zip
```

```bash
mv SillyTavern-1.13.1 st
# 将Sillyxxxxx这个目录重命名为ST，方便cd和后续启动
```

```bash
cd st
# 进入st这个目录
```

```bash
./start.sh
# 运行启动脚本
```

# 后续如何启动

关闭Termux再启动后通过以下命令再次启动

```bash
cd st
#切换到st目录
```

```bash
./start.sh
# 运行启动脚本
```

# 自定义启动脚本（可选）

觉得每次启动都要cd和运行个sh?<br>你可以尝试写一个脚本来一条命令直接启动
```bash
cd
# 返回到根目录
```

```bash
vim <脚本名称>.sh
# 选择一个方便好记忆的内容
```

```bash
cd st
./start.sh
echo 酒馆已启动
echo 浏览器：127.0.0.1:8000
echo 默认用户：user
echo 默认密码：password
# 低下的shell水平，见谅。
```

使用vim保存，先按下*ESC*然后输入*：（英文）wq*即可，保存后你就可以直接运行

```bash
sh <你设置的脚本名称>.sh
```

来快速启动！

# 清理剩余文件

你可以使用ls命令和rm/rmdir来清理下载的文件

```bash
cd #回到根目录
ls #列出文件与文件夹
```

```bash
rm <文件名>
rm -r <文件夹名>
```

这玩意会问你要不要删，打个y回他就行

# API导入与拓展管理

**首先，你需要一个魔法环境，这是必须的**
<br>
在完事大吉（部署完毕后），你可以正式来配置API以开始游玩SillTavern。

**在文档里写有点干巴，所以这一节也有配套教程～**
<br>
[点我跳转至B站](https://www.bilibili.com/video/BV1sqMQztEH7)

整理了以下文档/链接，有兴趣你可以去看看

>1.[SillTavern傻酒馆中文文档](https://sillytavern.wiki/)<br>2.[艾萝工坊](https://www.erocraft.com/silly-tavern/)<br>3.[类脑ΟΔΥΣΣΕΙΑ](https://discord.gg/6kdVgVgcRx)<br>4.[酒馆助手](https://n0vi028.github.io/JS-Slash-Runner-Doc/)

其中1与2都是教程文档，从部署到角色卡/预设的获取写的都非常详尽 是很优秀的酒馆文档<br>而三是在*Discord上的中文酒馆频道*，有很多大大在这里发布他制作的角色卡与模型预设<br>4是一个**酒馆拓展**，可以说是玩酒馆必装了。

## API配置
**除了国内的AI以外，其它所有的，如Grok，Gemini等AI均需要魔法环境才能使用**

## 酒馆助手的安装
按照视频教程找到**拓展**选项卡，然后选择**安装拓展**，后输入以下仓库链接。

```code
https://gitlab.com/novi028/JS-Slash-Runner
```

等待后即可安装。

# 后续可能的问题

因为评论区反馈的人太多，故单开一个板块来说说可能遇到的问题。
<br>
**请确保自己认真阅读并使用文档之后再在评论区提问，否则这将会浪费你我的时间**
<br>
**大多数错误都是命令复制漏了/镜像没配置到/干脆就是没复制命令**
<br>
**这种问题出现在评论区将不予回复，如果是文档内标注过的问题将会直接删除**


## 输出过程卡顿

1**这可能是由于你使用是Google Gemini模型，而且没用配置预设和正则的情况下发生的**
<br>
2**可能是安卓后台机制的原因，确保给Termux后台运行权限/开小窗**

## 软件安装问题

如果你遇到wget/nodejs not install 这一情况，输出以下命令即可

```bash
apt install wget nodejs
```

**这很有可能是你没复制安装必要软件那一步的命令**


# 捐赠

**教程录制与文档撰写不易，需要经过多次测试后发出**
<br>
**如果可以的话，请支持我哦**
<br>
*给点吧😭*
<br>

```bash
echo 蟹蟹！ꉂ(ˊᗜˋ*)
```


![捐赠](/LimePan/zanzhu.webp)<br>
