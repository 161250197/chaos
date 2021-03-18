# 1 js-name

## 描述

![1 trick 示例](.\img\1 js-name\1 trick 示例.png)

当在浏览器中进行以上操作时会出现上述 `trick`。

## 补充

但是在 `node` 环境下、使用 `IIFE` 执行命令、或将 `var` 修改为 `let`，均可以规避此问题：

![2 在 node 环境下执行](.\img\1 js-name\2 在 node 环境下执行.png)

![3 使用 IIFE 执行](.\img\1 js-name\3 使用 IIFE 执行.png)

![4 使用 let](.\img\1 js-name\4 使用 let.png)

## 原因

猜想可能与浏览器端的全局对象 `window` 有关，在 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/name#description) 查找到了对应的说明：

> Note: `window.name` 会调用 `toString` 将赋给它的值转换成对应的字符串表示。

在 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/namehttps://developer.mozilla.org/en-US/docs/Web/API/Window/name) 上关于 `name` 属性的描述总结如下：

1. `name` 属性主要用于为超链接和表单设置目标，一般的浏览上下文并不需要该属性；
2. 当浏览器打开标签页加载跨域的新页面时，浏览器会将 `name` 属性重置为空字符串，而在返回原始页面时（如使用浏览器的`后退`键）恢复 `name` 属性，从而防止不受信任的页面访问前一个页面可能存储在属性中的信息（新加载的页面也可能会修改这些信息，但这些信息可以在返回原始页面时被原页面读取）；
3. [中文译文](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/name#%E5%A4%87%E6%B3%A8) 中提到，转换字符串表示可能并不是单纯使用 `toString` 方法，在将 `Symbol` 赋值给 `name` 时会出现 `TypeError`。

## 深入

1. 寻找应用 `name` 属性的超链接和表单实例；
2. 了解应用 `name` 属性的跨域信息保护等相关技术；
3. 了解 [中文译文](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/name#%E5%A4%87%E6%B3%A8) 中提到的 `ToString` 抽象方法；
4. 了解 `Symbol` 类型；
5. 了解 ECMA 规范定义的的类型转换 `Type Conversion` 流程。
