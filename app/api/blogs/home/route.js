import dbConnect from "@/config/database";
import Blog from "@/models/blogs";
import { NextResponse } from "next/server";

// Fetch recent blogs and top locations to populate home page
export async function GET() {
    try {
        await dbConnect()
        // Get 5 most recent blogs
        const blogs = await Blog.aggregate([
            { $sort: { updatedAt: -1 } },
            { $limit: 5 }
        ])
        // ! Get top locations

        // ! Combine results into one object

        // Return
        return NextResponse.json({ status:200, recent: blogs })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}