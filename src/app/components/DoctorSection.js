import { categories, doctors } from "@/lib/Data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function DoctorsSection( {isHome} ){

const filtered = isHome ?doctors.slice(0,6) : doctors

return(
  <div className="container mx-auto my-5 ">
    <div className="flex justify-between">
      <h1 className="text-5xl font-semibold">Doctors You Need</h1>
      {isHome ? (
        <Link href={'/doctors'}>
        <Button>
          See All
        </Button>
        </Link>
      ):(
      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    {
      categories.map((category)=> (
        <SelectItem key={category} value={category}>{category}</SelectItem>
      ))
    }
  </SelectContent>
</Select>

      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3">
{
    filtered.map((doctor)=> 
    <Card key={doctor.name}>
         <CardHeader className={'flex flex-row'}>
         <Avatar className='self-center h-10 w-10'>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>DAS</AvatarFallback>
</Avatar>
<div className="pl-3">
    <CardTitle>{doctor.name}</CardTitle>
    <CardDescription>{doctor.category}</CardDescription>
</div>
  </CardHeader>
  {
  !isHome && <CardContent>
  <div className="flex justify-between my-2">
    <h1 className="font-semibold">Gender</h1>
    <h1>{doctor.gender}</h1> 
  </div>
  <div className="flex justify-between my-2">
    <h1 className="font-semibold">Hospital</h1> 
    <h1>{doctor.hospital}</h1> 
  </div>
  <div className="flex justify-between my-2">
    <h1 className="font-semibold">Appointment Time</h1> 
    <h1>{doctor.appointmentTime}</h1> 
  </div>
  </CardContent>
  }

<CardFooter>
  <Link href={`/doctors/${doctor.id}`}>
  <Button>See Details</Button>
  </Link>
</CardFooter>
    </Card>)
}
    </div>
  </div>
)
}