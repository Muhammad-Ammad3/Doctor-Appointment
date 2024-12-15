import { redirect } from "next/navigation"
import { auth } from "../../../../auth"


export default async function Request(){

const session = await auth()
if(!session && session?.user?.role !=='admin') redirect('/')

    return(
        <div>

        </div>
    )
}