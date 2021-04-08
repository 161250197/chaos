# 1-4 BigInt

在整数末尾添加 `n` 或调用构造函数来创建。

借由 `BigInt` 可以操作超过 `Number` 的安全范围（MAX/MIN_SAFE_INTEGER）。

~~~javascript
var x = 2n ** 53n; // 9007199254740992n
x + 1n; // 9007199254740993n

var y = 2 ** 53; // 9007199254740992
y + 1; // 9007199254740992
~~~

BigInt 不能和 Number 混搭操作，会抛出 `TypeError`。

~~~javascript
1n + 1; // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
~~~

## 参考资料

[JavaScript 数据类型和数据结构 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

[BigInt - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

TODO
