const express = require('express')
const app = express()

const peopleRouter = require('./routes/people')
const routerLogin = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

app.use('/login',routerLogin)

app.use('/api/people',peopleRouter)

app.listen(5000,() => {
    console.log('Server is listening on port 5000');
})