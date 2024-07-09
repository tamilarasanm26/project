import UserModel from "../models/user.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res.status(401).json({ success: false, message: "User already exists" });
    }

    const hasepassword = await bcryptjs.hashSync(password, 10)


    const user = await UserModel.create({ name, email, password: hasepassword });

    res.status(200).json({ success: true, newUser: user });

  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
    console.log(error);
  }
};


const Login = async (req, res) => {
  try {
        const {email,password} = req.body

        const user = await UserModel.findOne({email})

        if(!user)
        {
          return res.status(404).json({success:false,message:"User not found"})
        }

        const ispasswordValid = await bcryptjs.compare(password,user.password)
        if(!ispasswordValid)
        {
          return res.status(404).json({success:false,message:"User not found"})
        }

        const token = jwt.sign({userId:user._id},process.env.JWT_SECRETE)

        res.cookie('token',token,{
          httpOnly:true,
          secure: false,
          maxAge: 3600000
        })
        res.status(200).json({success:true,message:"Login Successfull",user,token})
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
    console.log(error);
  }
}


const Logout = async(req,res) =>{
  try{
    res.clearCookie('token')
    res.status(200).json({message:"Logout successfully"})
  }catch(error){
    res.status(500).json({success:false,message:"Internal server error"})
  }
}
export { register, Login,Logout};
