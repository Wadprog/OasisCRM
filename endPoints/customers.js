/**
 * Holds all logic of the tasks
 */

const express = require('express')
const router = express.Router()

let customers = [
  { id: 1, name: 'Paul Mars', phone: '7863447865' },
  { id: 2, title: 'James Colt', phone: '9874321245' },
]

router.post('/', async (req, res) => {
  customers.push(req.body)
  console.log(req.body)
})

router.get('/', async (req, res) => {
  console.log({ customers })
  res.json({ customers })
})

router.get('/:id', async (req, res) => {
  let task = customers.find((customer) => customer.id == req.params.id)
  res.json(task)
})
router.put('/:id', async (req, res) => {
  let index = customers.findIndex((customer) => customer.id == req.params.id)
  let task = customers[index]
  console.log({ index, task })
  customers[index] = req.body
  return res.json(customers[index])
})

module.exports = router
