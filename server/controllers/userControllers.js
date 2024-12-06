import userModel from "../models/userModels.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//register user controller

const registerUser=async (req,res)=>{
    try {
        const {name,email,password} =req.body;
        if(!name||!email||!password){
            return res.json({sucess:false,message:"Missing Details"})
        }
        //encryption
        const salt= await bcrypt.genSalt(10)  //Add the moderate encryption
        const hashPassword=await bcrypt.hash(password,salt);
        //store hash password in database
        const userData={
            name,email,password:hashPassword
        }
        // const existingUser = await userModel.findOne({ email });
        // if (existingUser) {
        //     return res.json({ success: false, message: "Email already exists" });
        // }
        //added new user in model
        const newUser=new userModel(userData);
        //save new user in database
        const user=await newUser.save();
        //_id auto genrated in mongodb database for every user
        //genrating token for each id
        const token=jwt.sign({id:user._id},process.env.JWTSECRET)
        //send token in response
        res.json({sucess:true,token,user:{name:user.name}})
    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.message})
    }
}

//user login controllers
const loginUser=async(req,res)=>{
   try {
    //taking email and password data
    const {email,password}=req.body;
    //find user with email id in database
    const user=await userModel.findOne({email})
    //if no user found
    if(!user){
        return res.json({sucess:false,message:"User doesn't exists"})
    }
    else console.log("user found");
    //if found user check for passwords validation
    const isMatch=await bcrypt.compare(password,user.password);
    //if password matched then create token 
    if(isMatch){
        const token=jwt.sign({id:user._id},process.env.JWTSECRET);
        res.json({sucess:true,token,user:{name:user.name}})
    }
    else{
        return res.json({sucess:false,message:"Invalid Credentials"})
    }
   } catch (error) {
    console.log(error);
    res.json({sucess:false,message:error.message})
   }
}
export { registerUser, loginUser };