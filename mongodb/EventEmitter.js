const {EventEmitter} = require("events")
const event = new EventEmitter()
event.on('func',res=>{
    console.log('func触发'+res);
})
let num =0
setInterval(()=>{
    event.emit('func',++num)
},1000)