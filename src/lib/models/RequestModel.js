import mongoose from "mongoose"


const {Schema} = mongoose;

const requestSchema = new Schema({
    user : {type : mongoose.Types.ObjectId, ref : 'Users'},
    status : {type : String, enum : ['pending', 'approved', 'rejected'], default : 'pending'},
    bio: String,
    hospital: String,
    gender:String,
    fees: String,
    appointmentTime: String,
    degree: String,
    specialization: String,
    experience:String,
    number: String,
    email: String,
    address: String,
    })

export const RequestModel = 
mongoose.models.Requests ||  mongoose.model("Requests",requestSchema)