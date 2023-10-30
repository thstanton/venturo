import User from "@/models/users"
import dbConnect from "@/config/database"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await dbConnect()
        // Check whether user exists
        const userReq = await req.json()
        const user = await User.findOne({ email: userReq.email })
        
        // If so, return data
        if (user) return NextResponse.json({ status: 200, data: user })
        
        // If not, create new user
        const newUser = new User(userReq)
        await newUser.save()
        return NextResponse.json({ status: 200, created: newUser })

    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}