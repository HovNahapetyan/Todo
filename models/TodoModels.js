const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    isDone : {
        type : Boolean,
        required : true
    }
}, {
    timestamps : true
})

module.exports = mongoose.model('todos', TodoSchema)