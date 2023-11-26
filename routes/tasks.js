const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasks') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, tasksController.getTasks)

router.post('/createTask', tasksController.createTask)

router.put('/markDone', tasksController.markDone)

router.put('/markNotDone', tasksController.markNotDone)

router.delete('/deleteTask', tasksController.deleteTask)

module.exports = router