// Buffer - 用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。 八位字节组成的数组，可以有效的在JS中存储二进制数据
// 创建一个程度为2字节以0填充的buffer
const buf1 = Buffer.alloc(2)
console.log(buf1);
// 创建一个buffer包含utf-8 ASCII码
const buf2 = Buffer.from('a')
console.log(buf2,buf2.toString());
// 创建buffer包含utf-8字节
// utf-8:一种变长的编码方案，使用1-6个字节来存储
// utf-32:一种固定长度的编码方案，不管字符编码大小，始终使用4个字节来存储
// utf-16:介于上面两者之间，使用2个或6个字节来存储
const buf3 = Buffer.from('buffer创建方法')
console.log(buf3);
// 写入buffer数据
buf1.write('aa')
console.log(buf1);
// 读取buffer数据
console.log(buf1.toString());
// 合并buffer
const buf4 = Buffer.concat([buf1,buf3])
console.log(buf4.toString());