import express from 'express'
import { genrateImage } from '../controllers/imageControllers.js'
import userAuth from '../middlewares/auth.js'
const imageRouter=express.Router()

imageRouter.post('/genrate-image',userAuth,genrateImage)

export default imageRouter