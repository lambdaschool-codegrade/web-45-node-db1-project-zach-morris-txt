//Imports
const express = require('express')
const Account = require('./accounts-model') //Object W/ Methods
const md = require('./accounts-middleware.js');


//Miniature Instance Of Express Server
const router = express.Router()


//Endpoints
router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.getAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId, 
  async (req, res, next) => {
  // DO YOUR MAGIC
  res.json(req.account)
})

router.post('/', md.checkAccountPayload, 
  md.checkAccountNameUnique, 
  async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.create(req.body)
    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', 
  md.checkAccountId,
  md.checkAccountPayload, 
  async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.updateById(req.params.id, req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', 
  md.checkAccountId, 
  async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.deleteById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})


//Error-Handling
router.use((err, req, res, next) => {
  // DO YOUR MAGIC
  res.status(err.status || 500).json({ message: err.message,})
})


//Exports; Exposing
module.exports = router;
