const asyncWrapper=(task)=>{
    return async(req,res,next)=>{
        try{
            await(task(req,res,next))
        }catch(error){
            next(error)
        }
    }
}

module.exports=asyncWrapper