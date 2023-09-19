const express = require('express')
const path = require('path')

const app = express()

//setup static and middleware
app.use(express.static('./public'))   

// app.get('/',(req,res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//  u can just add the index.html file to public folder and not have this app.get('/') function and still works
//  SSR
// })

app.all('*',(req,res) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(5000,() => {
    console.log('Server is listening on port 5000');
})