const Tasks = require('../models/taskModel')
const jwt = require('jwt')

const taskCtrl = {
    getTask: async (req, res) => {
        try{
            const user = User.findOne({_id: req.user._id})
            if(!user) return res.json({msg: "Please login"})
            const tasks = user.tasks
            res.json({result: tasks.length, tasks: tasks})

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    createTask: async (req, res) => {
        try{
            const user = User.findOne({_id: req.user._id})
            if(!user) return res.json({msg: "Please login"})
            const {title, description, risk, category, creation_date, due_date} = req.body
            const task = findOne({title})
            if(task) return res.json({msg: "Task already exists"})
            const newTask = new Tasks({title, description, risk, category, creation_date, due_date})
            


        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateTask: async (req, res) => {
        try{

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    deleteTaskk: async (req, res) => {
        try{

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    createTask: async (req, res) => {
        try{

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}