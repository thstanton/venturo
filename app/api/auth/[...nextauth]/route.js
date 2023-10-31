import NextAuth from 'next-auth/next' 
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({

    site: process.env.SITE,
    providers:[
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID ?? "",
                clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
            })
        ],
    // database: process.env.MONGODB_URI,
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn: async (user, account, profile) => {
        // Doesnt appear in my console, by either signing in via Google or Email
        console.log("the best user,", user);
        // console.log(`the rest user data ${user.user.name}`);
        
        const URL = "http://localhost:3000/api/user"
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
                    //setUserSaved(true)
                    console.log(`Start Login User : ${JSON.stringify(res)}`);
                    console.log('Saved Successfully');
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