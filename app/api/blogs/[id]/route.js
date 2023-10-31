import dbConnect from "@/config/database"
import Blog from "@/models/blogs"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
    try {
        await dbConnect()
        const data = await Blog.findById(params.id)
        return NextResponse.json({ status: 200, data: data })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}