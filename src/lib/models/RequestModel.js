import mongoose from "mongoose"


const {Schema} = mongoose;

const requestSchema = new Schema({
    // name: z.string().min(2, "Name should be at least 2 characters long").max(50, "Name should not exceed 50 characters"),
    user : {type : mongoose.Types.ObjectId, ref : 'Users'},
    status : {type : String, enum : ['pending', 'approved', 'rejected'], default : 'pending'},
    bio: String,
    hospital: String,
    // days: z.array(z.string()),
    gender:String,
    fees: String,
    appointmentTime: String,
    degree: String,
    specialization: String,
    experience:String,
    // profileImage: z.string(),
    number: String,
    email: String,
    address: String,
    })

export const RequestModel = 
mongoose.models.User ||  mongoose.model("User",userSchema)