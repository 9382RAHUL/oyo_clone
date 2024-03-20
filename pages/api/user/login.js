import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import  jwt from "jsonwebtoken";


export default async function handler(req,res){
    if(req.method==='POST'){
        connectDB();
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({msg:"Email and password required"})
        }
        const emailexits=await User.findOne({email});
        if(!emailexits){
            return res.status(400).json({msg:"Register first"})
        }
        const passwordmatched= await bcrypt.compare(password,emailexits.password);
        if(!passwordmatched){
            return res.status(400).json({msg:"Invalid credentials"})
        }
        const token=jwt.sign({token:emailexits._id},process.env.JWT_SECRET,{expiresIn:"30d"})
        res.status(200).json({msg:"logged in successfully",token})

    }

}

// import connectDB from "@/db";
// import User from "@/models/user-model";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     connectDB();
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ msg: "Email and password required !" });
//     }
//     const emailExists = await User.findOne({ email });
//     if (!emailExists) {
//       return res.status(400).json({ msg: "Please Register first !" });
//     }
//     const passwordMatched = await bcrypt.compare(
//       password,
//       emailExists.password
//     );
//     if (passwordMatched) {
//       const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
//         expiresIn: "30d",
//       });
//       return res.status(200).json({ msg: "Logged in successfully !", token });
//     }
//     return res.status(400).json({ msg: "Invalid Credentitials !" });
//   }
// }