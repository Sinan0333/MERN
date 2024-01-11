import jwt from 'jsonwebtoken'

const authUser = async (req,res,next) =>{

    let token = req.cookies.jwt
    if(token){
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            next()
        } catch (error) {
            res.status(401)
        }
    }else{
        res.status(401)
    }
}

export{
    authUser
}