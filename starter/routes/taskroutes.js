const express=require('express')
const router=express.Router()
const {createTask,getSingleTask,getAllTask,
    deleteAllTask,updateTask,deleteTask}=require('../controllers/TaskController')

router.route('/').get(getAllTask).post(createTask).delete(deleteAllTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports=router