const mongoose=require('mongoose')
const {schema}=mongoose

const taskSchema=new mongoose.Schema({
    name:String,
    description:{
        type:String,
        default:'No Name'
    },
    priority:{
        type:Number,
        default:0,
        min:0,
        max:2
    },
    is_completed:{
        type:Number,
        default:0,
        min:0,
        max:2
    }
})

const taskModel=mongoose.model('Tasks',taskSchema)

module.exports=taskModel