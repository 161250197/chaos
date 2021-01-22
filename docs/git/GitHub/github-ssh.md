# 使用 SSH 连接到 GitHUb

## 文档参考

GitHub 有 [官方文档 - 使用 SSH 连接到 GitHub](https://docs.github.com/cn/github/authenticating-to-github/connecting-to-github-with-ssh) 可以参考，流程说明十分详尽，无须参考其他博客。

## 什么是 SSH ？

[GitHub 官方文档 - 关于 SSH](https://docs.github.com/cn/github/authenticating-to-github/about-ssh) 有对 SSH 的简单介绍：

> 使用 SSH 协议可以连接远程服务器和服务并向它们验证。 利用 SSH 密钥可以连接 GitHub，而无需在每次访问时都提供用户名和个人访问令牌。

## Tips

* 在 git bash 使用命令 *eval \`ssh-agent -s\`* 启动 ssh-agent 后，可以使用命令 *ps* 查看所有进程，查看对应pid然后使用命令 *kill* 结束进程；

* ssh 相关资源在 Windows 系统上，默认存储在 C:\Users\\`你的用户名`\\.ssh 目录下，该文件夹为隐藏文件；

* 需要上传的密钥信息保存在 .ssh 目录下的 .pub 文件中；

* 新增 SSH 密钥到 GitHub 账户后，连接时会进行询问是否确认连接，确认时需要输入 yes，不可以直接敲回车；

    ~~~
    > Are you sure you want to continue conencting (yes/no)?
    ~~~

* 可以参考 [GitHub 官方文档 - 测试 SSH 连接](https://docs.github.com/cn/github/authenticating-to-github/testing-your-ssh-connection) 进行 SSH 连接测试。

    * 确认后在.ssh目录下会生成 `known_hosts` 文件。

## 故障排除

有问题先查阅 [GitHub 官方文档 - SSH 故障排除](https://docs.github.com/cn/github/authenticating-to-github/troubleshooting-ssh) 。