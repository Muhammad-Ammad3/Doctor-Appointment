import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button";


export default function Header(){
  const session = {name:'Ammad'};
    return (
        <div className=" bg-secondary py-3">
            <div className="container flex  mx-auto justify-between ">

            <h1 className="font-bold text-xl font-mono">LOGO</h1>
            {
              session ?    <Menubar>
              <MenubarMenu>
                <MenubarTrigger className='bg-transparent bg-none border-none'><Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DAS</AvatarFallback>
            </Avatar></MenubarTrigger>
                <MenubarContent>
                  <Link href={'/profile'}>
                  <MenubarItem>Profile</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link href={'/appointments'}>
                  <MenubarItem>My Appointment</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <MenubarItem>Logout</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            : 
            
          <Link href={'/SignIn'}>
            <Button variant ='outline'>Login</Button>
            </Link>
            }
             </div>


        </div>
    )
}

      