'use client'
import { DatePicker } from "@/app/components/DatePicker"
import { Button } from "@/components/ui/button"
import { doctors } from "@/lib/Data"
import Image from "next/image"
import Link from "next/link"

export default function DoctorDetail( {params} ){

const doctorInfo = doctors.find((doctor) => doctor.id == params.id)

    return(
        <div className="min-h-screen">
  <div className="container py-10 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 relative w-full lg:h-auto h-64 object-cover object-center rounded">
      <Image
      fill ={true}
        alt="ecommerce"
        src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww"
      />
    </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
{doctorInfo.category}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        {doctorInfo.name}
        </h1>
        <p className="leading-relaxed">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
          shorts keytar banjo tattooed umami cardigan.
        </p>
     
      <div className="flex justify-between my-3">
    <h1 className="font-semibold">Gender</h1>
    <h1>{doctorInfo.gender}</h1> 
  </div>
  <div className="flex justify-between my-3">
    <h1 className="font-semibold">Hospital</h1> 
    <h1>{doctorInfo.hospital}</h1> 
  </div>
  <div className="flex justify-between my-3">
    <h1 className="font-semibold">Appointment Time</h1> 
    <h1>{doctorInfo.appointmentTime}</h1> 
  </div>
  <div className="flex justify-between my-3">
    <h1 className="font-semibold">Fees</h1> 
    <h1>${doctorInfo.fees}</h1> 
  </div>
    <DatePicker/>
  <Button className ='w-full'>Book Your Appointment</Button>
      
      </div>
    </div>
  </div>
        </div>
    )
}