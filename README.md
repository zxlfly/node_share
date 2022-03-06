# node
Node.js进程不是单线程，内部有很多线程。用户写的Node.js程序只在一个线程中执行。  
为了防止线程太多，Node.js内部有一个线程池，用于处理需要OS支持的行为。  
Node.js不是一个单线程模型，从设计上它的用户程序和EventLoop在一个线程上执行——因此也在一个CPU核心上执行。因为，一个线程同一时刻只在一个CPU上执行。在Node.js进程被创建到销毁的这段时间，EventLoop将一直存在，因此这个线程会在一个CPU上完成所有的工作。  
所以Node.js是单线程吗？你说是不是单线程都可以，毕竟用户程序+EventLoop是在单线程执行的。 但是Node.js进程内部是有多线程模型的，之所以用户程序+EventLoop单线程，是因为在非计算密集型（也就是I/O密集型）的工作场景下，这样效率最高。
## api文件夹下为基础的api入门介绍，只有一小部分详细的可以看[文档](https://nodejs.org/)
很基础的api

## koa
实现一个简版的koa

## socker-im
一个简版聊天室

## http

## HTTP缓存机制
**web缓存**
常见的网页资源比如图片、css、js都不经常变化，如果每次都重新请求资源，就会浪费资源，也增加了页面加载时间，影响用户体验。
**解决方法**
- HTTP 1.0
  - **expires**是HTTP1.0中定义的缓存字段。强缓存
    - 服务器返回时在``Response Headers``中增加该字段表示过期时间``expires: Thu, 03 Jan 2019 11:43:04 GMT``
    - 当客户端再次请求该资源的时候，会把客户端时间与该时间戳进行对比,但是客户端时间是不可靠的。所以这个方法不太行
- HTTP1.1
  - **cache-control**和上面那个方法一样都是强缓存
  - **cache-control** 优先级更高
  - 该字段是一个时间长度，单位是秒，表示多少秒之后资源失效
  - 不依赖客户端时间
- 协商缓存
  - 上面的两种方法都会访问本地的缓存直接验证是否过期，如果没有过期，就返回200。
  - 如果设置了``no-cache``和``no-store``则本地缓存会被忽略，去请求服务器验证资源是否更新。如果没有更新就返回304使用本地缓存
  - ``last-modified & if-Modified-Since``这是一组通过协商修改时间为基础的策略
    - 静态资源应答都会通过``last-modified``来标记修改时间
    - 下次请求会将``last-modified``时间作为``if-Modified-Since``字段放在请求报文中，用来询问服务器是否过期
      - 过期直接返回200和资源
      - 如果为过期则返回304
  - ``etag & if-None-Match``这种方法是通过内容来判断
    - 在初次加载的时候会吧内容的摘要hash返回``etag``
    - 下次请求相同资源会带上``etag``作为``if-None-Match``字段放在请求报文中询问服务器是否过期
      - 过期直接返回200和资源
      - 如果为过期则返回304


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

## 哈希算法
- 明文-密文 一一对应
- 雪崩效应-明文小幅变化密文剧烈变化
- 密文-明文无法反推
- 密文固定长度md5 sha1 sha256

## redis
redis是一个key-value存储系统。和Memcached类似，它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hash（哈希类型）。

## egg
前置知识需要了解egg的用法  
实现的技术特点就是柯里化

## ts(typescript)
搭建Node TS开发环境  
ts实现装饰器和方法  
基于装饰器的RouterValidation Models 
>装饰器模式允许像一个现有的对象添加新的功能，同事又不改变其结构。这种类型的设计模式属于结构型模式。它是作为现有类的一个包装
>这种模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整的前提下，提供了额外的功能

## docker
基于Linux的高效、敏捷、轻量级的容器（轻量虚拟）方案。一次封装，到处执行  
Docker是一种隔离技术而非虚拟化  
虚拟化技术最明显的特征是执行层面的虚拟化―—虚拟CPU指令。比如你本机的Windows不管理vmware中运行的进程，因为vmware中的进程已经完全运行在虚拟化技术上。  
Docker将自己直接嫁接在操作系统上，Docker中的进程也是真实的进程，Docker使用的文件系统也是真实的文件系统(只不过做了隔离)。  
Docker使用的网络也是真实的网络，只不过做了隔离。(网络本身就是虚拟的概念)

## I/O
 I/O就是把数据从一个地方拷贝到另一个地方。文件读写是数据在内存和磁盘间的拷贝，网络请求是数据在网卡和内存间的拷贝。
- I/O的阻塞与非阻塞  
  - 阻塞模式的I/O会造成应用程序等待,直到I/O完成。
  - 非阻塞模式下应用程序的调用将可能在没有拿到真正数据时就立即返回了,为此应用程序需要多次调用才能确认I/O操作完全完成。
- I/O的同步与异步
  - 如果做阻塞I/O调用,应用程序等待调用的完成的过程就是一种同步状况。
  - 相反,I/O为非阻塞模式时,应用程序则是异步的。
## Stream
流代表随着时间产生的数据。 流抽象的是数据从A拷贝到B的过程。
### Duplex（一般不会使用到）
既可以读取又可以写入的流。只要继承Duplex，那么实现出来的流就是双向的。
### 缓冲区
流的设计中，读取和写入都会用缓冲区存储临时数据。这样可以提速，节省内存。缓冲区中的数据以二进制形式存在的。
#### 创建缓冲区
- Buffer.from
- Buffer.alloc
- Buffer.allocUnsafe
```
// 第一种
const buf = Buffer.from("你好")
// 第二种（每个字节都是0）
const buf = Buffer.alloc(1024*4)
// 第三种（每个字节的值不确定）
const buf = Buffer.allocUnsafe(1024*4)
```
#### Buffer
Buffer.length内部数据的字节数。  
Buffer工作起来很像数组：
```
const buf = Buffer.from("Hello")
const newBuf = buf.slice(0, 2)
newBuf[1]++
console.log(newBuf.toString('utf8'))
// Hf
console.log(buf.toString('utf8'))
// Hfllo
```
读取目录
```
import {readdir, readdirSync,statSync} from 'fs'
import path from 'path'
function* walk(dir : string, pattern : RegExp) : Generator<string> {
  const files = readdirSync(dir)
  for(let file of files) {
    const fullpath = path.resolve(dir， file)
    const info = statSync(fullpath)
    if( info.isDirectory() ) {
      yield * walk(fullpath,pattern)
      continue
    }
    if( file.match(pattern) ){
      yield fullpath
    }
  }
}
[. ..walk(path.resolve(process.argv[2])，/\.ts$/ )]

```
## child_process子进程
- 进程创建
  - fork
  - spawn
- 执行程序
  - exec
    - 衍生 shell，然后在该 shell 中执行 command，缓冲任何生成的输出。
- 进程通信
  - send
  - on
父进程脚本
```
const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);

n.on('message', (m) => {
  console.log('PARENT got message:', m);
});

// 引起子进程打印：CHILD got message: { hello: 'world' }
n.send({ hello: 'world' });
```
子进程脚本 ``sub.js``
```
process.on('message', (m) => {
  console.log('CHILD got message:', m);
});

// 引起父进程打印：PARENT got message: { foo: 'bar', baz: null }
process.send({ foo: 'bar', baz: NaN });
```
### 集群模式cluster
用户在Node.js上书写的是单线程程序，如果用户想要利用多核计算的特性，就可以使用集群模式。  
集群模式创建的是进程，而创建进程的成本是很高的。
```
import cluster from 'cluster';
import http from 'http';
import { cpus } from 'os';
import process from 'process';

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // 衍生工作进程。
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // 工作进程可以共享任何 TCP 连接
  // 在本示例中，其是 HTTP 服务器
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```
### 加密解密
加密解密也是我们经常会使用的一个库，集中在crypto中
- 加密/解密
  - 公私钥加密解密
  - 对称加密/解密
- 摘要
  - MD5
  - SHA1
```
//摘要
import { createHash，createCipheriv,randomBytes,createDecipheriv } from "crypto"
import RSA from 'node-rsa'
const password = "123456"
//hex 16进制编码
// const md5Password = createHash( "md5" ).update(password).digest("hex")
const shaPassword = createHash("sha256").update(password).digest( "hex")
console.log(shaPassword)

// 对称加密
const key = randomBytes(32)
const iv = randomBytes(16)
const chipher = createCipheriv( "aes-256-gcm", key, iv)
const buffer = chipher.update( "123456")
const dechipher = createDecipheriv("aes-256-gcm", key, iv)
const output = dechipher.update(buffer)
console.log(output.toString( 'utf8 ' ))

//非对称加密node-rsa
// 需要ssh公私钥
const bobsPubKey = fs.readFileSync(resolve(__dirname，“xxx_rsa.pub"),'utf8')
const bobsPrivKey = fs.readFileSync(resolve(__dirname,“xxx_rsa"), 'utf8 ')
const bob = new RSA(bobsPrivKey
const alice = new RSA(bobsPubKey)
console.log( bob.decrypt( alice.encrypt("hi bob! " ) ).toString( "utf8") )

```
### 爬虫
puppetee（无头浏览器）  
crawler