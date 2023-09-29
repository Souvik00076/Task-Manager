
const express=require('express')
const app=express()
require('express-async-errors')
const taskRoute=require('./routes/taskroutes')
const connectDB=require('./databases/connection.js')
const errorHandlerMiddleware=require('./middleware/error-handler')
const notFoundHandler=require('./middleware/not-found')
const {CustomApiError,createCustomError}=require("./errors/CustomError")
const notFound = require('./middleware/not-found')
app.use(express.json())
app.use('/api/v1/tasks',taskRoute)
app.use(notFoundHandler)
app.use(errorHandlerMiddleware)

require('dotenv').config()

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









