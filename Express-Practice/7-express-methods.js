const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

app.get('/api/people',(req,res) => {
    res.status(200).json({success:true,data:people})
})

app.post('/login',(req,res) => {
    const { name } = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide the credentials')
})

app.post('/api/postman/people',(req,res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide name value'})
    }
    return res.status(201).json({success:true,data:[...people,name]})
})

app.post('/api/people',(req,res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide name value'})
    }
    return res.status(201).json({success:true,person:name})
})

app.put('/api/people/:id',(req,res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:'Id you have provided does not exists'})
    }
    const newPerson = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    return res.status(200).json({success:true,data:newPerson})
})

app.delete('/api/people/:id',(req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success:false,msg:'ID that you have provided does not exists'})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true,data:newPeople})
})

app.listen(5000,() => {
    console.log('Server is listening on port 5000');
})