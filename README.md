## api文件夹下为基础的api入门介绍，只有一小部分详细的可以看[文档](https://nodejs.org/)
很基础的api

## koa
koa2的相关知识


- I/O的阻塞与非阻塞  
  - 阻塞模式的I/O会造成应用程序等待,直到I/O完成。
  - 非阻塞模式下应用程序的调用将可能在没有拿到真正数据时就立即返回了,为此应用程序需要多次调用才能确认I/O操作完全完成。
- I/O的同步与异步
  - 如果做阻塞I/O调用,应用程序等待调用的完成的过程就是一种同步状况。
  - 相反,I/O为非阻塞模式时,应用程序则是异步的。
