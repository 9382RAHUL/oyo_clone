import connectDB from "@/db";
import Hotel from "@/models/hotel-model"
export default async function handler(req,res){
    connectDB();
    // if(req.method==="POST"){
    //     const newhotel= new Hotel(req.body);
    //     const result= await newhotel.save();
    //     res.status(200).json({msg:"Hotel added successfully",result});
    // }
    if(req.method==="GET"){
        const hotels=await Hotel.find({location:req.query.city});
        if(hotels.length>0){
        
        return res.status(200).json({msg:"good",hotels})
        }
        const allhotels=await Hotel.find({});
        return res.status(200).json({msg:"good",allhotels})
    }
}