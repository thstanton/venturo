import dbConnect from "@/config/database";
import Collection from "@/models/collections";
import { NextResponse } from "next/server";

// Create new collection
export async function POST(req) {
    try {
        await dbConnect()
        const collection = await req.json()
        const newCollection = new Collection(collection)
        await newCollection.save()
        return NextResponse.json({ body: newCollection, status: 200, message: 'New collection created' })
    } catch (error) {
        console.error('POST')
        return NextResponse.json({ status: 400, error: error })
    }
}

// Update existing collection
export async function PUT(req) {
    try {
        await dbConnect()
        const collection = await req.json()
        const updatedCollection = await Collection.findByIdAndUpdate(collection._id, {
            name: collection.name,
            desc: collection.desc,
            image: collection.image
        })
        return NextResponse.json({ body: updatedCollection, status: 200, message: `Collection id: ${updatedCollection._id} updated` })
    } catch (error) {
        console.error('PUT')
        return NextResponse.json({ status: 400, error: error })
    }
}

// Delete collection
export async function DELETE(req) {
    try {
        await dbConnect()
        const id = await req.json()
        const deletedCollection = await Collection.findByIdAndDelete(id)
        return NextResponse.json({ body: deletedCollection, status: 200, message: `Collection id: ${deletedCollection._id} deleted` })
    } catch (error) {
        console.error('DELETE')
        return NextResponse.json({ status: 400, error: error })
    }
}

// Get all collections
export async function GET(req) {
    try {
        await dbConnect()
        const collections = await Collection.find()
        return NextResponse.json({ data: collections, status: 200 })
    } catch (error) {
        console.error('GET')
        return NextResponse.json({ status: 400, error: error })
    }
}