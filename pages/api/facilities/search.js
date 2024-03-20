import connectDB from "@/db";
import Hotel from "@/models/hotel-model";
export default async function handler(req,res){
    if(req.method=='GET'){
        connectDB();
        const key=req.query.val;
        console.log(key);
        const hotels=await Hotel.find({'facilities.name':{$in:key}});
        res.status(200).json({msg:"All good bro",hotels})
        
    }
}