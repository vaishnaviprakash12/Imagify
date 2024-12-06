import jwt from 'jsonwebtoken'
//created userAuth middleware that will find user id through token genrated and add id in request body
const userAuth=async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json(
            {
                sucess:false,
                message:'not Authorized,Login Again'
            }
        )
    }
    try {
        //decoded token
        const tokenDecode=jwt.verify(token,process.env.JWTSECRET);
        //finding user id
        if(tokenDecode.id){
            //add id in body to fetch later using this middleware
            req.body.userId=tokenDecode.id;
        }
        //if id is not available
        else {
            return res.json(
                {
                    sucess:false,
                    message:'not Authorized,Login Again'
                }
            )
        }
        next();
    } catch (error) {
        console.log(error);
        return res.json(
            {
                sucess:false,
                message:error.message
            }
        )
    }
}
export default userAuth;


