import User from '../model/userModel.js'
import jwt from 'jsonwebtoken'

const sample = async (req,res)=>{
    try {
        res.status(200).json({message:'in smaple funcion'})
    } catch (error) {
        
    }
}


const signup = async (req,res)=>{
    try {

       const data = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
       })

       const userData = await data.save()
       const token = jwt.sign({userId:userData._id},process.env.JWT_SECRET,{expiresIn:'30d'})
       console.log(token);
       res.json({userData,token,status:true})

    } catch (error) {
        console.log(error.message);
    }
}

export{
    sample,
    signup,
}