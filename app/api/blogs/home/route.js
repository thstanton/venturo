import dbConnect from "@/config/database";
import Blog from "@/models/blogs";
import { NextResponse } from "next/server";

// Fetch recent blogs and top locations to populate home page
export async function GET() {
    try {
        await dbConnect()
        const blogs = await Blog.find()
        return NextResponse.json({ status:200, data: blogs })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}