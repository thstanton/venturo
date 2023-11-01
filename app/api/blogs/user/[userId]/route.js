import dbConnect from "@/config/database";
import Blog from "@/models/blogs";
import { NextResponse } from "next/server";

// Fetch recent blogs and top locations to populate home page
export async function GET(req,{ params }) {
    try {
        await dbConnect()
        const blogs = await Blog.find({ "userId" : params.userId});
        console.log(`User Blogs List :::: ${JSON.stringify(blogs)}`);
        // Return
        return NextResponse.json({ status:200, blogs: blogs })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}