class CustomAPIError extends Error{

    constructor(StatusCode,message){
        super(StatusCode,message)
        this.StatusCode=StatusCode
        this.message=message
    } 
}

const createCustomError=(StatusCode,message)=>{
    console.log("Called here")
    return new CustomAPIError(StatusCode,message)
}

module.exports={CustomAPIError,createCustomError}