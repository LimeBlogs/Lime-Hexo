---
title: 我的TMC Java笔记
date: 2026-01-24 15:37:09
top:
cover: /LimePan/MOOCJAVA/java-bg.webp
categories: 教程
description: 本篇目包含了MOOC.fi的java编程课程的部分试题解决思路以及心得体会。
hidden:
tags: 
- java
- 学习
- 入门
- 指南
- 项目
mathjax:
tikzjax:
---

# 前言
之前通过某些渠道了解到MOOC.fi这个网站，我发现里面有java教程，在我学习近两周后发现效果很好。<br>
我因此在我博客上开了一篇新文章，来记录在MOOC中学习TMC的java课程中的心得以及一些笔记。<br>
我将官网的链接放在底下，有兴趣可以去看看。

---

MOOC/Java-Programming
https://java-programming.mooc.fi/

---

>如果看不懂英文可以搭配沉浸式翻译之类的插件来看。

# Part2-Theme4
第二部分主要是For循环与方法的学习，自己花点时间For循环其实就能掌握的差不多了。

## Advanced astrology
这里我简单说一下最后一个练习。`Advanced astrology (高级占星术)
`
<br>
主要是考For循环与方法的运用，前两个部分是要求输出星星与右三角形。
<br>
打开Vscode，能发现为我们定义好了四个无返回值的静态方法。

```java
public static void printStars(int number) {
        // part 1 of the exercise
        
}
```

```java
public static void printSpaces(int number) {
        // part 1 of the exercise

}
```

```java
public static void printTriangle(int size) {
        // part 2 of the exercise

}
```

```java
public static void christmasTree(int height) {
        // part 3 of the exercise

}
```

第一二个的要求是打印指定数量的星星与空格，这很简单，只需要定义一个字符串使其一直加一个字符就行。

```java
public static void printSpaces(int number) {
    String b = "";
    for (int a = 1; a<=number; a++) {
        b = b + " ";
    }
    System.out.print(b)
}
```

然后对于星星也是同理，只需要把空格换成星星即可。另外，当打印星星时需要换行，因此需要使用`System.out.println`。

<br>

接下来是三角形，将这个任务拆成两个部分一个是打印空格，另外一个是打印星星，注意到，首先肯定是打印空格。
<br>

接下来，我们注意到空格的数量一直在递减，而星星的数量一直在增加。<br>
并且空格的数量永远等于`size-星星数量`，思考到这，我们可以发现。<br>
只需要来个for循环，内部的变量一直递增，并将其设定为星星的数量即可。

```java
public static void printTriangle(int size) {
        // part 2 of the exercise
    for (int a = 1; a<=size; a++) {
        int spaceNumber = size-a;
        printSpaces(size);
        printStars(a);
    }
}
```

那么为什么不用`size = size -a`?因为这样会改变size的总量，第一次循环时`size`是3，那么第二次就是`3-a`，会导出打出的形状像鬼。
<br>
分为两个部分，树枝与树干，我们先看树枝部分。
<br>
接下来就是最后一个，这个当时卡了我蛮久，但是最后解决非常简单，依靠于星星和空格的数学关系，给出下表。

| 数量 | 空格 | 星星 |
| :-----| :---- | :---- |
|  | 3| 1 |
|  | 2 | 3 |
|  | 1 | 5 |
|  | 0 | 7 |

简单发现空格的数量永远等于`height-当前行数`，假设我们来个for循环，那么for循环内递增的变量就是当前行数。
<br>
接着，我们来看星星，1，3，5，7?这几把不是奇数合集吗？
<br>
不难发现这些星星永远等于`当前行数*2-1`，所以我们可以开始动手了
<br>

```java
public static void christmasTree(int height) {
        // part 3 of the exercise
    for (int a = 1; a<=height; a++) {
        int spaceNumber = height - a;
        int starsNumber = 2*a-1;  //不使用`height = 2*a=1!`，这样会修改height的数量！
        printSpaces(spaceNumber);
        printStars(starsNumber);
    }
    //树枝部分。
}
```

<br>

![编译](/LimePan/MOOCJAVA/Tree.webp)

OK，编译之后发现这就是我们需要的效果。

<br>
接下来就是树干部分，观察树干，我们不难发现，树干部分永远为三，并且永远居中，那么主要的变量就是空格。<br>
这个空格我们发现，其实就是等于`height-2`，即树干永远和第二行的树枝在一条直线上。<br>
那还说啥了，直接写。<br>

```java
public static void christmasTree(int height) {
        // part 3 of the exercise
    for (int a = 1; a<=height; a++) {
        int spaceNumber = height - a;
        int starsNumber = 2*a-1;  //不使用`height = 2*a=1!`，这样会修改height的数量！
        printSpaces(spaceNumber);
        printStars(starsNumber);
    }
    //树枝部分。
    for (int b = 1; b<=2; b++) {   //因为枝干只有两行，并且星星数量恒为3，我们只需要创建一个循环两次的for循环即可。
        int spacesNumber = height-2;
        printSpaces(spacesNumber);
        printStars(3);
    }
}
```


![再来一次](/LimePan/MOOCJAVA/Tree-Finished.webp)

OK！打完收工！提交满分咯！