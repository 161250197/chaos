# 1-2 Number

双精度 64 位二进制格式，范围为 `-2^53 - 1 到 2^53 - 1`，并没有为整数给出特定类型。

还包括 `+Infinity` `-Infinity` 和 `NaN`。

0有两种表达：`+0` 和 `-0`，在除以0的场景下会表现出不同：

~~~javascript
+0 === -0; // true
42 / +0; // +Infinity
42 / -0; // -Infinity

function impossible(num, divisor1, divisor2) {
    const quotient1 = num / divisor1;
    const quotient2 = num / divisor2;
    return (
        divisor1 === divisor2
        && !Number.isNaN(quotient1)
        && !Number.isNaN(quotient2)
        && quotient1 !== quotient2
    );
}
~~~

## 属性

* MAX_VALUE
* MIN_VALUE
* MAX_SAFE_INTEGER
* MIN_SAFE_INTEGER

TODO

## 参考资料

[JavaScript 数据类型和数据结构 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

[Number - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

