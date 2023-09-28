
const express=require('express')
const app=express()
const taskRoute=require('./routes/taskroutes')
const connectDB=require('./databases/connection.js')
const errorHandlerMiddleware=require('./middleware/error-handler')
const {CustomApiError,createCustomError}=require("./errors/CustomError")
app.use(express.json())
app.use(errorHandlerMiddleware)
app.use('/api/v1/tasks',taskRoute)
app.use((req,res)=>{
    return next(createCustomError(404,"URL does Not Exist"))
})
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send("Hello Task Manager")
})


const PORT=3000
const startServer=async ()=>{
    try{
        console.log(`Trying connecting to ${PORT}`)
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT,
        console.log(`The server is listening at port ${PORT}`));
    }catch(error){
        console.log(error)
        console.log("Could not connect to database")
    }
}
startServer()









