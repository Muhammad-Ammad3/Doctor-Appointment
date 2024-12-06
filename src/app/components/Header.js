import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { auth, signOut } from "../../../auth";
import Image from "next/image";


export default async function Header(){
  const session = await auth()
  console.log(session)
    return (
        <div className=" bg-secondary py-3">
            <div className="container flex  mx-auto justify-between ">

            <h1 className="font-bold text-xl font-mono">LOGO</h1>
            {
              session ? <Menubar>
              <MenubarMenu>
                <MenubarTrigger className='bg-transparent bg-none border-none'>
              <Image src={session?.user?.image}
              height={40}
              width={40}
              className="rounded-full"
              />
             </MenubarTrigger>
                <MenubarContent>
                  <Link href={'/profile'}>
                  <MenubarItem>Profile</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link href={'/appointments'}>
                  <MenubarItem>My Appointment</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <form
      action={async () => {
        "use server"
        await signOut("google")
      }}
    >
<Button variant = 'outline'>LogOut</Button>
</form>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            : 
            
          <Link href={'/signIn'}>
            <Button variant ='outline'>Login</Button>
            </Link>
            }
             </div>


        </div>
    )
}

      