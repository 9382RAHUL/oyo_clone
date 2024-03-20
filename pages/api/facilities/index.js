import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req,res){
connectDB();
if(req.method=='GET'){
    const facilties =await Hotel.find({}).distinct("facilities.name");
    // console.log(facilties)
    res.status(200).json({msg:"success",facilties});

}
}