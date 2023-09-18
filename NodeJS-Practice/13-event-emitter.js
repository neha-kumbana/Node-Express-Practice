const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) => {
    console.log(`data received`);
    console.log(name);
    console.log(id);
})

customEmitter.on('response', (a,b) => {
    console.log(`${a + b}`);
})
customEmitter.emit('response','neha',21)
customEmitter.emit('response',9,28)