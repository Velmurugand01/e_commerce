const jwt=require('jsonwebtoken')
const Schema=require('./schema_2')
// const VerifyToken=require('./middleware')
const Signup=async(req,res)=>{
    const Register=new Schema({
        ...req.body
    })
    const{Email}=req.body
    const verify=await Schema.find({Email})

    if(verify){
        res.json("You Have Already Account")
    }
    await Register.save()
    .then(()=>{
        res.json("Register successfully")
    })
    .catch(()=>{
        res.json("Something Wrong while register")
    })
}

const Login = async(req,res)=>{
    const{Email,Password}=req.body
    const VerifyEmail= await Schema.find({Email})
    if(!VerifyEmail){
        res.json("You don't have Account Pls Register")
    }
    const PasswordVerify=(Password===VerifyEmail.Password)
   if(!PasswordVerify){
       res.json("User password or password is incoorect")
   }

   const token=jwt.sign({id:VerifyEmail._id},process.env.key,{expiresIn:"3h"})
   res.cookies('jwt',token,{httpOnly:true})
   res.json('Login Successfully')

}

const postData=async(req,res)=>{
     
}