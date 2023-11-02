import dbConnect from "@/config/database";
import Blog from "@/models/blogs";
import { NextResponse } from "next/server";

// Fetch recent blogs and top locations to populate home page
export async function GET(req,{ params }) {
    try {
        await dbConnect()
        const blog = await Blog.findOne({ "_id" : params.id})//.populate([userId, collectionIds]);
        // Return
        return NextResponse.json({ status: 200, blog: blog })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}

export async function DELETE(req,{ params }) {
    try {
        await dbConnect()
        const blog = await Blog.findOneAndDelete({ "_id" : params.id});
        // Return
        return NextResponse.json({ status:200, blogs: blog })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}

export async function PUT(req,{ params }) {
    try {
        await dbConnect()
        const blog = await req.json()
        // console.log(`Start Editing :::::: ${blog._id} ::::::: ${blog._id}`)
        const updatedBlog = await Blog.findOneAndUpdate({ "title": blog.title },
            {
                "location": blog.location,
                "introduction": blog.introduction,
                "body": blog.body,
                "photos": blog.photos,
                "collectionIds": blog.collectionIds
            })
        // Return
        return NextResponse.json({ status:200, blog: updatedBlog })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}

// import dbConnect from "@/config/database"
// import Blog from "@/models/blogs"
// import { NextResponse } from "next/server"

// export async function GET({ params }) {
//     try {
//         await dbConnect()
//         const data = await Blog.findById(params.id)
//         return NextResponse.json({ status: 200, data: data })
//     } catch (error) {
//         return NextResponse.json({ status: 400, error: error })
//     }
// }

// export async function DELETE({ params }) {
//     try {
//         console.log(`Deleting Object : ${params.id}`)
//         await dbConnect()
       
//         const data = await Blog.findOneAndDelete({"_id" : "654154e26d573c87a0cb6088"})
//         return NextResponse.json({ status: 200, data: data })
//     } catch (error) {
//         console.log(`Error :::: ${error.code}`)
//         return NextResponse.json({ status: 400, error: error })
//     }
// }

// export async function PUT({ params }) {
//     try {
//         await dbConnect()
//         const data = await Blog.findById(params.id)
//         console.log(`Updating Object : ${params.id}`)
//         return NextResponse.json({ status: 200, data: data })
//     } catch (error) {
//         return NextResponse.json({ status: 400, error: error })
//     }
// }

