## nvm安装
### [下载地址](https://github.com/coreybutler/nvm-windows/releases)
### 下载nvm-setup.exe
### 设置安装地址D:\nvm
### 设置nodejs安装地址D:\nvm\nodejs
### 安装完成后打开setting.txt,将下列命令复制进去
- node_mirror: https://npm.taobao.org/mirrors/node/
- npm_mirror: https://npm.taobao.org/mirrors/npm/
### 常用命令
- nvm -v 查看当前版本
- nvm --config 
- nvm list 查看已安装node版本列表
- nvm install 版本号 下载对应node版本
- nvm use 版本号 切换node版本
- nvm on 开启nvm
- nvm off 关闭nvm

## 设置/修改node全局默认下载地址
### npm文件夹下创建node_global和node_cache文件夹, 然后命令行执行下列命令
npm config set prefix "D:\nvm\nodejs\node_modules\npm\node_global"
npm config set cache "D:\nvm\nodejs\node_modules\npm\node_cache"
### 修改环境变量
系统变量path内添加D:\nvm\nodejs\node_modules\npm\node_global否则失效无法使用
### npm查看命令
npm config ls

