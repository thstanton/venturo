import dbConnect from "@/config/database";
import Blog from "@/models/blogs";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbConnect()
        const blog = await req.json()
        
        // get User object from database and set it to userId 
        const user = await User.findOne({ email: blog.userId.email })
        if(user !== null) blog.userId = user;

        const newPost = new Blog(blog)
        await newPost.save()
        return NextResponse.json({ body: newPost, status: 200 })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}