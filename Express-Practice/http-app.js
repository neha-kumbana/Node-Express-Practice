const http = require('http')
const { readFileSync } = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    //console.log(req.method);
    console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //style page
    else if(req.url === '/styles.css'){
        res.writeHead(200,{'Content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    //logo
    else if(req.url === '/logo.svg'){
        res.writeHead(200,{'Content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    }
    //logic
    else if(req.url === '/browser-app.js'){
        res.writeHead(200,{'Content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }else{
        res.writeHead(404,{'Content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
    
})
server.listen(5000)