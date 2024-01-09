const jwt=require('jsonwebtoken')
const verifyToken=async(req,res,next)=>{
    const token=req.cookies.jwt
    if(!token){
        res.json("Authentication required")
    }
jwt.verify(token,process.env.key, async(error,decode)=>{
    if(error){
         res.json("can't authorize")
    }

    req.VerifyEmail=decode
    console.log(res.VerifyEmail);
    next()
})

}
module.exports=verifyToken