//Imports
const express = require('express')
const Account = require('./accounts-model') //Object W/ Methods
const md = require('./accounts-middleware.js');


//Miniature Instance Of Express Server
const router = require('express').Router()


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

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})


//Error-Handling
router.use((err, req, res, next) => {
  // DO YOUR MAGIC
  res.status(err.status || 500).json({ message: err.message,})
})


//Exports; Exposing
module.exports = router;
