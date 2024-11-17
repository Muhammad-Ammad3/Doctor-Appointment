import mongoose from "mongoose"





export async function  connectDB(){
    let connection
    connection = await mongoose.connect('')
}