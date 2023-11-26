const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
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
