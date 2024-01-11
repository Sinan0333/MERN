import User from '../model/userModel.js'
import generateToken from '../utils/generateToken.js'

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

       const result = await data.save()
       generateToken(res,result._id)
        res.status(200).json(req.body)

    } catch (error) {
        
    }
}

export{
    sample,
    signup,
}