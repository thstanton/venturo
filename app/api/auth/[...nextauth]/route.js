import NextAuth from 'next-auth/next' 
import GoogleProvider from 'next-auth/providers/google'
import { cookies } from 'next/headers'

const handler = NextAuth({

    site: process.env.SITE,
    providers:[
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID ?? "",
                clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
            })
        ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn: async (user, account, profile) => {
            
            const URL = `${process.env.API_URL}/user`
            await fetch(URL,{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name: user.user.name,
                    email: user.user.email,
                    avatar: user.user.image
                })
            })
            .then(res => 
            {
                if(res.status === 200){
                    console.log(`Start Login User : ${JSON.stringify(res)}`);
                    console.log('Saved Successfully');
                    // TODO retrive user object from response
                    const userObject = {
                        
                            _id: "65417970c1f3efbcf29d947b",
                            name: "Heba Arafat",
                            email: "heba.arafat159@gmail.com",
                            avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ-hZOO8ktTqhN1i5QCmMSTd5L21m37olBzu4UPWcxuXsM=s96-c",
                            location: 
                                {
                                    place_id:"ieegdiegiuqiwywoe3e", 
                                    city:"London", 
                                    country:"UK",
                                    longitude: 0.1234, 
                                    Latitude: 9.765, 
                                    formatted_address: "London, UK"
                                },
                            createdAt: "2023-10-31T09:00:11.150Z",
                            updatedAt: "2023-10-31T09:00:11.150Z",    
                    }
                    const cookieStore = cookies();
                    cookieStore.set("user_object",userObject);
                }
            }).catch (error => {
                console.log(`Saving error : ${error}`);
            })
            return Promise.resolve(true);
        },
    },
    // session: {
    //     jwt: true,
    // }
})

export {handler as GET, handler as POST}