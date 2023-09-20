const express = require('express')
const router = express.Router()

const {createPerson, createPersonPostman,updatePerson,deletePerson,getPeople} = require('../controllers/people')

// router.get('/',getPeople)
// router.post('/',createPerson)
// router.put('/:id',updatePerson)
// router.delete('/:id',deletePerson)
// router.post('/postman',createPersonPostman)

//another way
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router