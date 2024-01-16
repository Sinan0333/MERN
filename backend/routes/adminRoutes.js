import express from 'express'
import {login ,users,delteUser,loadEditUser,updateUser} from '../controllers/adminController.js'
import {authUser} from '../middleware/userAuth.js'

const admin_route = express.Router()

admin_route.post('/login',login)
admin_route.get('/list',users)
admin_route.post('/delete',delteUser)
admin_route.post('/edituser',loadEditUser)
admin_route.post('/updateUser',updateUser)


export default admin_route