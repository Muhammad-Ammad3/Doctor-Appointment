import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../../auth";

export default async function HeroSection(){
  const session = await auth()
    return (
        <div className="text-gray-600 body-font my-0">
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-semibold  text-3xl mb-4  text-gray-900">
        DOCTOR APPOINTMENT SYSTEM
        <br className="hidden lg:inline-block" />
        By Batch-11
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center gap-4">
       <Button variant='outline'>
        Find Doctor you Need
       </Button>
       <Link href={session ? '/doctors/apply' : '/signIn'}>
       <Button>
        Apply as Doctor
       </Button>
       </Link>
    
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded flex justify-end"
        height={200}
        width={400}
        alt="hero"
        src="https://images.unsplash.com/photo-1584467735815-f778f274e296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww"
      />
    </div>
  </div>
</section>

        </div>
    )
}