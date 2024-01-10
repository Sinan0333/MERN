import express from 'express'
import { sample } from '../controllers/userController.js'


const user_route = express.Router()


user_route.get('/',sample)


export default user_route