const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Task', TaskSchema)
