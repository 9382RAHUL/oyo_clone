import connectDB from "@/db";
import Hotel from "@/models/hotel-model";
export default async function handler(req,res){
    if(req.method==='GET'){
        connectDB();
        const hotels=await Hotel.find({price:{$lte : req.query.price}});
        res.status(200).json({msg:"All good na ",hotels})
    }
}


// import connectDB from "@/db";
// import Hotel from "@/models/hotel-model";
// export default async function handler(req,res){
//     const price = parseInt(req.query.price, 10);
//     const priceFilter = {
//         price: {
//           $lte: price // The price should be less than or equal to the specified price
//         }
//       };
//     if(req.method==='GET'){
//         connectDB();
//         const hotels=await Hotel.find({price:{$lte : priceFilter}});
//         res.status(200).json({msg:"All good na ",hotels})
//     }
// }

// import connectDB from "@/db"
// import Hotel from "@/models/hotel-model"

// export default async function handler(req, res) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method not allowed' })
//   }

//   const price = parseInt(req.query.price, 10)
//   if (isNaN(price)) {
//     return res.status(400).json({ error: 'Invalid price query parameter' })
//   }

//   try {
//     await connectDB()
//     const hotels = await Hotel.find({ price: { $lte: price } })
//     res.status(200).json({ msg: "All good na", hotels })
//   } catch (error) {
//     res.status(500).json({ error: 'Error connecting to database' })
//   }
// }