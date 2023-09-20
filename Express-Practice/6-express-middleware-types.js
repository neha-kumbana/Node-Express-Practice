const express = require('express')
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()

//1.use vs route
//2.options - our own / express / third party

// app.use([logger,authorize])   //own middleware
// app.use(express.static('./public'))  //express middleware
// app.use(morgan('tiny'))   //third party middleware

app.get('/',(req,res) => {
    res.send('Home')
})

app.get('/about',(req,res) => {
    res.send('About')
})

app.get('/api/products',(req,res) => {
    res.send('Products')
})

app.get('/api/items',[logger,authorize],(req,res) => {
    res.send('Items')
})

app.listen(5000,() => {
    console.log('Server is listening on port 5000');
})