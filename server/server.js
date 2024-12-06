import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/db.js'
import userRouter from './Routes/userRoutes.js'
import imageRouter from './Routes/imageRoutes.js'
import path from 'path'
const PORT=process.env.PORT||3000
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
await connectDb();
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
//---------------Deployment-----------------
const __dirname1=path.resolve();
if(process.env.NODEENV==='production'){
    app.use(express.static(path.join(__dirname1, '/client/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1, 'client', 'dist', 'index.html'));
    });
    
}
else {
    console.log("could not able to parse file");
    app.get('/',(req,res)=>{
        res.send("API running")
    })
}
app.listen(
    PORT,()=>console.log("server running on "+PORT));
    //console.log("MONGODB_URL in deployment:", process.env.MONGODB_URL);
