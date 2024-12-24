"use server"


export async function addRequest(data) {
let add = await fetch(`${process.env.BASE_URL}/api/request`,{
method : 'POST',
body : JSON.stringify(data)
});
add = add.json()

return add;
}

export async function getRequest() {
let requests = await fetch(`${process.env.BASE_URL}/api/request`)
requests = requests.json();
return requests;
}