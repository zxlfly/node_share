## api文件夹下为基础的api入门介绍，只有一小部分详细的可以看[文档](https://nodejs.org/)
很基础的api

## koa
实现一个简版的koa

## socker-im
一个简版聊天室

## http

## mysql
建议安装最新的稳定版本，网上有很详细的教程  
基础的mysql示例  
sequelize-->orm  
## mongodb
建议安装最新的稳定版本，网上有很详细的教程  
helloword.js基础使用实例
example为一个简单的示例  
EventEmitter.js-->发布订阅，在上面的示例中使用到了

## mongoose
可以说就提供了模型这个功能，其他的和原来一样  

一个项目三要素：管理-开发方法-技术框架  
传统sql=>er(核心)=>db=>code先做一个实例关系图，然后建表再写程序
加入数据库ORM时对开发造成的影响  
使用sequelize变动的是开发方法  
sequelize=>code model 模型映射=>db(持久化服务)=>先在code里建立模型以及模型映射(核心)，根据模型映射为中心向两端发展，映射出db，模型代码生成对应的code api CRUD 再生成ui。这种方式所有的东西都在代码里，不需要了解数据库的实现原理  
在一些简单或者需要快速开发的项目来说中间价更方便，不需要sql
## restful
定义模型时候自动生成CRUD接口
- 反向工程 代码生成器
- 动态编程
  - 根据文件夹自动加载模块
  - 自动生成路由（注册通配路由）
## 鉴权
cookie-session  
token  
jwt  

## redis

## egg
前置知识需要了解egg的用法  
实现的技术特点就是科⾥化


## I/O
- I/O的阻塞与非阻塞  
  - 阻塞模式的I/O会造成应用程序等待,直到I/O完成。
  - 非阻塞模式下应用程序的调用将可能在没有拿到真正数据时就立即返回了,为此应用程序需要多次调用才能确认I/O操作完全完成。
- I/O的同步与异步
  - 如果做阻塞I/O调用,应用程序等待调用的完成的过程就是一种同步状况。
  - 相反,I/O为非阻塞模式时,应用程序则是异步的。
