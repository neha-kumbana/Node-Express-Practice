let {people} = require('../data')
const getPeople = (req,res) => {
    res.status(200).json({success:true,data:people})
}

const createPersonPostman = (req,res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide name value'})
    }
    return res.status(201).json({success:true,data:[...people,name]})
}

const createPerson = (req,res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide name value'})
    }
    return res.status(201).json({success:true,person:name})
}

const updatePerson = (req,res) => {
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
}

const deletePerson = (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success:false,msg:'ID that you have provided does not exists'})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true,data:newPeople})
}

module.exports = {createPerson, createPersonPostman,updatePerson,deletePerson,getPeople}