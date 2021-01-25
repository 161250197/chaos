# eslint setup

## 参考

eslint 官网有 [Getting Started with ESLint - ESLint中文文档](https://eslint.bootcss.com/docs/user-guide/getting-started) 可以参考，流程说明十分详尽，无须参考其他博客。

## 1. 创建 npm 项目

~~~
npm init
~~~

## 2. 添加 eslint 依赖

~~~
npm install eslint --save-dev
~~~

## 3. 添加配置文件

~~~
./node_modules/.bin/eslint --init
~~~

Windows 系统需调用 .cmd :

~~~
./node_modules/.bin/eslint.cmd --init
~~~

按照命令行提示进行操作即可。

### 注意

> ? Where does your code run? ...  (Press \<space\> to select, \<a\> to toggle all, \<i\> to invert selection)

根据提示需要使用空格和其他操作进行选择，而非直接使用回车选择。

## 4. 添加提交检查

使用 [husky](https://www.npmjs.com/package/husky) 库进行钩子操作；使用 [lint-staged](https://www.npmjs.com/package/lint-staged) 库进行提交检查。

### 4.1 添加依赖

~~~
npm install husky lint-staged --save-dev
~~~

### 4.2 修改配置

在 npm 项目的 package.json 文件中加入以下内容：

~~~json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": "eslint --fix"
  },
}
~~~
