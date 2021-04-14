# 安装 node & npm

在 node 官网下载最新版本的压缩包，在自定目录（如/app/software)下解压：

~~~bash
tar -xvf node-v6.10.0-linux-x64.tar.xz   
mv node-v6.10.0-linux-x64 nodejs 
~~~

> node-v6.10.0-linux-x64 为示例，具体以下载的压缩包名称为准。

确认 nodejs/bin 目录下存在 node 和 npm 文件，然后进行软连接（需要使用绝对路径）：

~~~bash
ln -s /app/software/nodejs/bin/npm /usr/bin/npm
ln -s /app/software/nodejs/bin/node /usr/bin/node
ln -s /app/software/nodejs/bin/npm /usr/bin/npm
~~~

开启命令行执行版本测试。

~~~bash
npm --version
node --version
~~~
