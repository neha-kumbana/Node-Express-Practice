const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('Home page')
    }
    else if(req.url === '/about'){
        //Blocking code
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('About page')
    }
    else{
        res.end('Error page')
    }
    
})

server.listen(5000,() => {
    console.log('Server is listening on port 5000');
})