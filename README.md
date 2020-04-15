### 1、项目目录


```
app.js      
node_modules        第三方包
public              公共的静态资源
views               视图存储目录
.gitignore          git上传忽略文件
package-lock.json   第三方包版本锁定文件（npm5后出现的）
package.json        包描述文件
README.md           项目说名文档

```


---

### 2、路由设计
路径 | 方法 | get参数 | get参数 | post参数 | 是否需要登录 | 备注
-----|------|---------|---------|----------|--------------|-----
/ | Get | | | | | 渲染首页
/register | Get | | | | | 渲染注册页面
/register | Post | | email、username、password | | | 处理注册请求 
/login | Get | | | | | 渲染登录页面
/login | Post | | username、password | | | 处理注册请求 
/logout | Get | | | | | 处理退出请求





