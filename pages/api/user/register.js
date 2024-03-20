import connectDB from "@/db";
import User from "@/models/user-model"
import bcrypt from "bcrypt";
import  jwt from "jsonwebtoken";
export default async function handler(req, res) {
    const {name,email,password}=req.body;
    if(req.method==='POST'){
        connectDB();
        if(!name || !email || !password){
            return res.status(400).json({msg:"All fields are required"});
        }
        const emailexit=await User.findOne({email});
        if(emailexit){
            return res.status(400).json({msg:"User already exists"});
        }
        const hashedpassword=await bcrypt.hash(password,10);
        const newuser=new User({
            name,
            email,
            password:hashedpassword,
        });
        const result= await newuser.save();

        const token=jwt.sign({token:result._id},"Code_AJ",{
            expiresIn:'30d',
        })
        return res.status(200).json({msg:"Successfully registered",token})
    }
  }