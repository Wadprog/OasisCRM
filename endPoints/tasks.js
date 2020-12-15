/**
 * Holds all logic of the tasks
 */

const express = require('express')
const router = express.Router()

let tasks = [
  { id: 1, title: 'title', body: 'This is a body' },
  { id: 2, title: 'Better title', body: 'This is another body' },
]

router.post('/', async (req, res) => {
  tasks.push(req.body)
  console.log(req.body)
})

router.get('/', async (req, res) => {
  console.log({ tasks })
  res.json({ tasks })
})

router.get('/:id', async (req, res) => {
  let task = tasks.find((task) => task.id == req.params.id)
  res.json(task)
})
router.put('/:id', async (req, res) => {
  let index = tasks.findIndex((task) => task.id == req.params.id)
  let task = tasks[index]
  console.log({ index, task })
  tasks[index] = req.body
  return res.json(tasks[index])
})

module.exports = router
