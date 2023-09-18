const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end("Welcome")
// })

//Using Event Emitter

const server = http.createServer()
//emits request event
//subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end("Welcome")
})

server.listen(5000,() => {
    console.log("Server is listening on port 5000");
})