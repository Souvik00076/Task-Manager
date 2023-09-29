const Task=require('../models/Task')
const asyncWrapper=require("../middleware/async")
const {CustomApiError,createCustomError}=require("../errors/CustomError")
const createTask=async (req,res)=>{
    const task= await Task.create(req.body)
    if(!task){
        return next(createCustomError(500,"Internal Server Error"));
    }
    res.status(201).send(task)  
}
const getSingleTask=async (req,res)=>{
    const {id:_id}=req.params
    const task=await Task.findById(_id)
    if(!task){
        return next(createCustomError(404,"No files Exist"));
    }

    res.send(task)
}
const getAllTask=async (req,res)=>{
        const task=await Task.find()
        if(!task){
            return next(createCustomError(404,"No files Exist"));
        }
        res.send(task)
}

const deleteAllTask=asyncWrapper(async (req,res)=>{
    const task=await Task.deleteMany()
    if(!task){
        return next(createCustomError(404,"No files Exist"));
    }
    res.status(201).send("All deleted")
})

const updateTask=(req,res)=>{
    res.send({'message':'Task Updated'})
}

const deleteTask=async (req,res)=>{
    const {id:_id}=req.params
    const task=await Task.findByIdAndRemove(_id)
    if(!task){
        return next(createCustomError(404,"Id not found"));
    }
    res.status(201).send(task)
}

module.exports={
    createTask,
    getSingleTask,
    getAllTask,
    deleteAllTask,
    updateTask,
    deleteTask
}