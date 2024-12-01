import express from 'express'
import { registerUser, loginUser } from '../controllers/userControllers.js';
const userRouter=express.Router()
userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser)

export default userRouter; 

//localhost:3000/api/user/register or login=Api EndPoints