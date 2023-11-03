import dbConnect from "@/config/database";
import Blog from "@/models/blogs";
import Collection from "@/models/collections";
import { NextResponse } from "next/server";

// Fetch recent blogs and top locations to populate home page
export async function GET(req, { params }) {
    try {
        await dbConnect()
        const collection = await Collection.findById(params.id)
        // console.log(collection)
        const blogs = await Blog.find({ "collectionIds" : params.id})
        // console.log(blogs)
        return NextResponse.json({ status: 200, blogs: blogs, collection: collection })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}