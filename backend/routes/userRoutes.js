import express from 'express'
import { sample, signup } from '../controllers/userController.js'
import {authUser} from '../middleware/userAuth.js'

const user_route = express.Router()


user_route.get('/',sample)
user_route.post('/signup',signup)


export default user_route