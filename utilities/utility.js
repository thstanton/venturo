import { getSession } from "next-auth/react"

export async function checkUserObject(){
    const session = await getSession()
    if(session && session.user)
    {
        // console.log(`Session ::::: ${JSON.stringify(session.user.email)}`);
        // TODO get user object from database
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${session.user.email}`)
            const data = await res.json()
            // console.log(`Database Request Object:::: ${JSON.stringify(data.data)}` )
            return data.data
          } catch (error) {
            return null
          }
    }
}