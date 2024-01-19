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

        const checkExist =await User.findOne({email:req.body.email})
        if(checkExist){
            res.json({status:false,error:'User is already exist'})
        }else{
            const data = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                is_Admin:false
               })
        
               const userData = await data.save()
               const token = jwt.sign({userId:userData._id},process.env.JWT_SECRET,{expiresIn:'30d'})
               res.json({userData,token,status:true})
        }

    } catch (error) {
        console.log(error.message);
    }
}


const login = async (req,res)=>{
    try {

     const userData = await User.findOne({email:req.body.email})

     if(userData){
        if(userData.password === req.body.password){
            const token = jwt.sign({userId:userData._id},process.env.JWT_SECRET,{expiresIn:'30d'})
            res.json({userData,token,status:true})
        }else{
            res.json({status:false,error:"Incorrect password"})
        }
     }else{
        res.json({status:false,error:"Eamil not found"})
     }
      
    } catch (error) {
        console.log(error.message);
    }
}


const updateprofile = async(req,res)=>{
    try {

        const {id,name,email,phone}=req.body
        const oldData = await User.findOne({_id:id})
        const file = req.file ? req.file.filename : oldData.image
        const userData = await User.findOneAndUpdate(
            {_id:id},
            {
                $set:{
                    name:name,
                    phone:phone,
                    email:email,
                    image:file
                }
            },
            {new:true}
        )
        res.json({userData,status:true})
    } catch (error) {
        console.log(error.message);
    }
}
export{
    sample,
    signup,
    login,
    updateprofile
}