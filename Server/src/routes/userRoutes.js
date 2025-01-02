import express from 'express';
import { loginUser, adminLogin, registerUser } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/login', loginUser)
userRouter.post('/register', registerUser)
userRouter.post('/admin', adminLogin)

export default userRouter