import mongoose from "mongoose"



export async function  connectDB(){
    let connection
    if(connection?.connection?.readyState != 1){
        connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB connect successfully');
        
    }
}