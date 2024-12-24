import { connectDB } from "@/lib/connectDB"
import { RequestModel } from "@/lib/models/RequestModel";


export async function POST(req){
    await connectDB();
 try {
    const obj = await req.json()
    const isUserRequestedBefore = await RequestModel.findOne({
        user : obj.user,
    });
    if(isUserRequestedBefore){
        return  Response.json({
            error: true,
            msg: "You had already applied as a doctor",
        },
        {status: 403}
    ) 
    }

    let newRequest = await new RequestModel({ ...obj })
    newRequest = await newRequest.save()
    return  Response.json({
        error: false,
        msg: "Request Register Successfully",
        request: newRequest,
    },{
        status: 201
    })
 } catch (error) {
    return  Response.json({
        error: true,
        msg: "Something Went Wrong",
    },{
        status: 400
    })
 }
}           

export async function GET(req){
    await connectDB();
    const requests = await RequestModel.findOne();
    return  Response.json({
        error: false,
        msg: "Requests Fetched Successfully",
        requests,
    },{
        status: 200
    })
}

export async function PUT(req){}

export async function DELETE(req){}