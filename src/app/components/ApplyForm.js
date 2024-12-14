"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "./DatePicker"
import { addRequest } from "@/actions/requests"
import { useToast } from "@/hooks/use-toast"


const formSchema = z.object({
  name: z.string().min(2).max(50),
  bio: z.string().min(2).max(120),
  hospital: z.string().min(2).max(50),
  days: z.array(z.string()),
  fees: z.string(),
  gender: z.string(),
  appointmentTime: z.date(),
  degree: z.string(),
  specialization: z.string(),
  experience: z.string(),
  profileImage: z.string(),
  number: z.string(),
  email: z.string().email(),
  address: z.string(),
})

export const DoctorForm = ({ session }) => {
  const { toast } = useToast()
  const { register, handleSubmit,} = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      hospital: "",
      days: [],
      fees: "",
      gender: "",
      appointmentTime: new Date(),
      degree: "",
      specialization: "",
      experience: "",
      profileImage: "",
      number: "",
      email: "",
      address: "",
    },
  })

  async function onSubmit(values){
    console.log(values)
    values.user = session.user._id
    await addRequest(values)
    reset()
    toast({
      title: "Your application is submitted",
      description: "You will be inform by email in 3 business days.",
    })

  }
  const form = useForm()

  return (
<Form {...form}>
  <form 
    onSubmit={form.handleSubmit(onSubmit)} 
    className="h-screen flex items-center justify-center p-6 bg-white w-full shadow-lg rounded-lg"
  >
    <div className="w-full max-w-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

      {/* Username */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Username</FormLabel>
            <FormControl>
              <Input  className="w-auto" placeholder="Enter Your Name" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Bio */}
      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Bio</FormLabel>
            <FormControl>
              <Textarea className="w-auto" placeholder="Enter Bio" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Hospital */}
      <FormField
        control={form.control}
        name="hospital"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Hospital</FormLabel>
            <FormControl>
              <Input className="w-auto" placeholder="Enter Hospital Name" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Available Days */}
      {/* <FormField
        control={form.control}
        name="days"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Available Days</FormLabel>
            <FormControl>
              <DatePicker />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      /> */}

      {/* Fees */}
      <FormField
        control={form.control}
        name="fees"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Fees</FormLabel>
            <FormControl>
              <Input className="w-auto" placeholder="Enter Your Fees" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Gender */}
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Gender</FormLabel>
            <FormControl>
              <Select>
                <SelectTrigger className="w-auto border rounded-md p-2">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Appointment Time */}
      {/* <FormField
        control={form.control}
        name="appointmentTime"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Appointment Time</FormLabel>
            <FormControl>
              <Input className="w-auto" type="time" placeholder="Enter Appointment Time" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      /> */}

      {/* Degree */}
      <FormField
        control={form.control}
        name="degree"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Degree</FormLabel>
            <FormControl>
              <Input className="input" placeholder="Enter Your Degree" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Specialization */}
      <FormField
        control={form.control}
        name="specialization"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Specialization</FormLabel>
            <FormControl>
              <Input className="w-auto" placeholder="Enter Your Specialization" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Experience */}
      <FormField
        control={form.control}
        name="experiance"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Experience</FormLabel>
            <FormControl>
              <Input className="w-auto" placeholder="Enter Your Experience" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Contact Number */}
      <FormField
        control={form.control}
        name="number"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Contact Number</FormLabel>
            <FormControl>
              <Input className="w-auto" type="number" placeholder="Phone Number" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Email */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Email</FormLabel>
            <FormControl>
              <Input className="w-auto" type="email" placeholder="Enter Your Email Address" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Address */}
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-medium">Address</FormLabel>
            <FormControl>
              <Input className="w-auto" placeholder="Enter Your Address" {...field} />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      {/* Submit Button */}
      <div className="col-span-2 flex justify-center mt-6">
        <Button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          {isSubmitted? "Loading" : 'Submit'}
        </Button>
      </div>

    </div>
  </form>
</Form>





  )
}

export default DoctorForm;
