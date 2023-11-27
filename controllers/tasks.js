const Task = require('../models/Task')

module.exports = {
    getTasks: async (req,res)=>{
        console.log(req.user)
        try{
            const taskItems = await Task.find({userId:req.user.id})
            const itemsLeft = await Task.countDocuments({userId:req.user.id,done: false})
            res.render('tasks.ejs', {tasks: taskItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createTask: async (req, res)=>{
        try{
            await Task.create({task: req.body.taskItem, name: req.body.name, address: req.body.address, phoneNumber: req.body.phoneNumber, notes: req.body.notes, done: false, userId: req.user.id})
            console.log('Task has been added!')
            res.redirect('/tasks')
        }catch(err){
            console.log(err)
        }
    },
    markDone: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                done: true
            })
            console.log('Marked Done')
            res.json('Marked Done')
        }catch(err){
            console.log(err)
        }
    },
    markNotDone: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                done: false
            })
            console.log('Marked Not Done')
            res.json('Marked Not Done')
        }catch(err){
            console.log(err)
        }
    },
    deleteTask: async (req, res)=>{
        console.log(req.body.taskIdFromJSFile)
        try{
            await Task.findOneAndDelete({_id:req.body.taskIdFromJSFile})
            console.log('Deleted Task')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    