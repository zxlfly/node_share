// 定时格式是符合linux的crobtab  

// 6个占位符从左到右分别代表：秒、分、时、⽇、⽉、周⼏, ''表示通配符，匹配任
// 意，当秒是''时，表示任意秒数都触发，其它类推  

// 每分钟的第30秒触发： '30 * * * * *'
// 每⼩时的1分30秒触发 ：'30 1 * * * *'
// 每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'
// 每⽉的1⽇1点1分30秒触发 ：'30 1 1 1 * *'
// 2020年的1⽉1⽇1点1分30秒触发 ：'30 1 1 1 2020 *'
// 每周1的1点1分30秒触发 ：'30 1 1 * * 1'
// 每三秒 ：'*/3 * * * *
module.exports = {
    interval: '*/3 * * * * *',
    handler() {
        console.log('我是定时任务------三秒执⾏⼀次' + new Date())
    }
}