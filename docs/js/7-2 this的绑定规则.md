# 5 this的绑定规则

## 例题

~~~
window.name="window";
function A() {
    this.name = "A";
}
A.prototype.getName = function() {
    return this.name;
}
let a = new A();
let getName = a.getName;
getName();
~~~

window上为什么会有name属性
那如果把name换一个名字呢
为什么this是指向A的
this是在执行时确定还是编译时确定
