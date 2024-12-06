import { Button } from "@/components/ui/button";
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";


export default async function SignIn(){
    const session = await auth();
    if(session) redirect('/')
    return(
        <div className="min-h-screen flex container max-auto justify-center items-center">
               <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
<Button variant = 'outline'>Continue With Google</Button>
</form>
        </div>
    )
}