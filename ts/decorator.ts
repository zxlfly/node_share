// class Log{
//     print(message){
//         console.log(message);
//     }
// }
// // 修饰函数
// const decorator =(target,prototype)=>{
//     const old = target.prototype[prototype]
//     target.prototype[prototype]= message=>{
//         // AOP的机会
//         console.log('执行print');
//         message = `${message}--decorator`
//         old(message)
//     }
// }

// decorator(Log,'print')

// function decorator(target,prototype,descriptor){
//     var oldValue = descriptor.value
//     descriptor.value=message =>{
//         message = `@${message}`
//         return oldValue.apply(null,[message])
//     }
//     return descriptor
// }
// class Log{
//     @decorator
//     print(message){
//         console.log(message);
//     }
// }
// const log = new Log()
// log.print('Decorator')
function decorator(target,prototype,descriptor){
    var oldValue = descriptor.value
    descriptor.value=message =>{
        message = `@${message}`
        return oldValue.apply(null,[message])
    }
    return descriptor
}
class Log{
    // @decorator
    print(message){
        console.log(message);
    }
}
const anotation = (target, prototype, decorate) => {
    const descriptor = decorate(target.prototype, prototype, Object.getOwnPropertyDescriptor(target.prototype, prototype))
    Object.defineProperty(target.prototype, prototype, descriptor)
}
anotation(Log,'print',decorator)
const log = new Log()
log.print('Decorator')