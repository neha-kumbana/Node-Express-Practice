const express = require('express')
const app = express()

const logger = require('./logger.js')
const authorize = require('./authorize.js')
//req => middleware => res
app.use([logger,authorize])   //app.use should always be called before app.get or other methods, if u provide the argument /api now logger is applied to all the routes which starts with /api
                              //if u remove the 'path' then it will be applied to all the paths

app.get('/',(req,res) => {
    console.log(req.user);
    res.send('Home')
})

app.get('/about',(req,res) => {
    res.send('About')
})

app.get('/api/products',(req,res) => {
    res.send('Products')
})

app.get('/api/items',(req,res) => {
    res.send('About')
})

app.listen(5000,() => {
    console.log('Server is listening on port 5000');
})