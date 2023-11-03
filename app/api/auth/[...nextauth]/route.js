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
                    // console.log(`Start Login User : ${JSON.stringify(res)}`);
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