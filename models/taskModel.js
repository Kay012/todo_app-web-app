const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    risk:{
        type: String
    },
    category:{
        type: String,
        required: true
    },
    creation_date:{
        type: String
    },
    due_date:{
        type: String,
        default: ''
    }
},{
    timestamp: true
})


module.exports = mongoose.model('Tasks', taskSchema)