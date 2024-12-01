import userModel from "../models/userModels.js";
import FormData from 'form-data'
import axios from 'axios';
export const genrateImage=async(req,res)=>{
     try {
        //taking prompt and userId from body
        const {userId,prompt}=req.body;
         console.log("Fetched user sucessfully",userId)
        //fetching user
        const user=await userModel.findById(userId);
        console.log("Fetched user sucessfully from database",userId)
        console.log('User ID added to request body:', req.body.userId);
        if(!prompt){
            return res.json({
                sucess:false,
                message:"Missing prompt Details"
            })
        }
        //if there is no user login and no prompt also
        if(!user){
            return res.json({
                sucess:false,
                message:"Missing user Details"
            })
        }
        

        const formData=new FormData()
        formData.append('prompt',prompt)
        //api request call
        //storing that arraybuffer response in data
        //then using arraybuffer we need to convert the image to base-64
       const {data}= await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType:'arraybuffer'
        })

        const base64Image=Buffer.from(data,'binary').toString('base64')
        //using this base64Image we will create image url
        const resultImage=`data:image/png;base64,${base64Image}`

        res.json({
            sucess:true
            ,message:"Image Genrated",
            resultImage
        })

     } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.message})
     }
}