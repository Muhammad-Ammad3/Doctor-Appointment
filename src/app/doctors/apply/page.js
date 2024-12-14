import DoctorForm from "@/app/components/ApplyForm";
import { auth } from "../../../../auth";


export default async function ApplyAsDoctor() {

const session = await auth()

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold p-4 mt-6 ">Apply As A Doctor</h1>
            <p className="font-semibold text-gray-700 text-secondary-foreground my-5">We invite qualified doctors to join our healthcare network and offer professional services to our community. This application will help us verify your credentials and set up your profile.Please complete the form below to create your professional profile. Provide accurate and updated information to ensure the best experience for your patients.</p>
            <DoctorForm session = {session} />
        </div>
    )
}