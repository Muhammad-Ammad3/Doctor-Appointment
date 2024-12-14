"use server"

import { revalidatePath } from "next/cache"


export async function addRequest(data) {
const add = await fetch(`${process.env.BASE_URL}/api/request`,{
method : 'POST',
body : JSON.stringify(data)
})
// if(add.ok){
//     revalidatePath()
// }
}