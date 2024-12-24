import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import { getRequest } from "@/actions/requests"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default async function Requests() {
  const session = await auth()

  if (!session || session?.user?.role !== 'admin') {
    redirect('/')
  }

  const { requests } = await getRequest()
  console.log("requests=>", requests)
  // console.log("request.user=>",requests.user);
  

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl my-3">Doctors Request</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {requests.map((request) => {
          return (
            <Card key={request._id}>
              <CardHeader className={'flex flex-row'}>
                <Avatar className='self-center h-10 w-10'>
                  <Image
                    src={request?.picture} 
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                  <AvatarFallback>DAS</AvatarFallback>
                </Avatar>
                <div className="pl-3">
                  <CardTitle>
                    {request.user ? `${request?.firstName} ${request?.lastName}` : "Unknown User"}
                  </CardTitle>
                  <CardDescription>{request.status}</CardDescription>
                </div>
              </CardHeader>


              <CardContent>
                <div className="flex justify-between my-2">
                  <h1 className="font-semibold">Gender</h1>
                  <h1>{request.gender}</h1>
                </div>
                <div className="flex justify-between my-2">
                  <h1 className="font-semibold">Hospital</h1>
                  <h1>{request.hospital}</h1>
                </div>
                <div className="flex justify-between my-2">
                  <h1 className="font-semibold">Appointment Time</h1>
                  <h1>{request.appointmentTime}</h1>
                </div>
              </CardContent>

              <CardFooter>
                <Link href={`/doctors/${request._id}`}>
                  <Button>See Details</Button>
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}


