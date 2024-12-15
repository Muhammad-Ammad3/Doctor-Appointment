"use server"

import { revalidatePath } from "next/cache"


export async function addRequest(data) {
let add = await fetch(`${process.env.BASE_URL}/api/request`,{
method : 'POST',
body : JSON.stringify(data)
});
add = add.json()
return add;
}
export async function getRequest() {
const add = await fetch(`${process.env.BASE_URL}/api/request`,{
method : 'POST',
body : JSON.stringify(data)
})
}