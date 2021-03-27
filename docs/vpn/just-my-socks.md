# Just My Socks

## 注册

在 [官网](https://justmysocks3.net/members/index.php) 注册账号，然后才可以购买服务，注册账号和登录时需要翻墙获取验证码。

可以在手机端注册，电脑端注册表单有很多是选填项但看不出来。

## 购买服务

优惠码：**JMS9272283** 。

可以从 Service - Order New Service 进入。

## 使用

### Windows 客户端

Windows 客户端使用 [v2rayN](https://github.com/2dust/v2rayN/releases)，下载 v2rayN-Core.zip，解压后打开 exe 文件。

在 Service - My Service 中选择服务，然后扫描 **vmess** 的二维码。

右键桌面右下角的蓝色 V 符号，选择 系统代理 - 自动配置系统代理。

设置 - 路由设置 - 基础功能 - 一键导入基础规则 - 确定。

### 安卓端

安卓端 使用 [v2rayNG](https://github.com/2dust/v2rayNG/releases)，下载 apk 文件安装。

右上角添加，扫描二维码，同上。

然后点击右下角的符号开启。

### mac 客户端

Mac 客户端使用 [clashX](https://github.com/yichengchen/clashX/releases)，下载 dmg 文件安装。

从启动台打开，如果出现安全提示后选择 `打开`，如果出现提示安装辅助程序，点击安装。

* 如果有订阅地址（Subscription link，`https` 开头）

    点击 状态栏上的小猫咪图标 - 配置 - 托管配置 - 管理，在弹窗中选择 `添加`，然后输入订阅地址，点击确定等待 ClashX 更新订阅信息。

* 如果有 VMess 服务端配置

    点击下载 [模板配置文件](https://v2xtls.org/clash_template2.yaml) ，用文本编辑器打开后找到 `# VMess` 行，修改以下项目：

    * server (服务器地址)
    * port
    * uuid
    * alterId

    然后点击 状态栏上的小猫咪图标 - 配置 - 打开本地配置文件夹，然后将修改好的配置文件复制到文件夹中。

    这时点击 状态栏上的小猫咪图标 - 配置，可以找到刚才拖进去的配置文件名（如 clash_template2），点击选择。

以上完成后，点击 状态栏上的小猫咪图标 - 控制台，进入 ClashX 主界面，点击设置，开启 `设置为系统代理`，然后将代理模式设置为 `规则` 即可。
