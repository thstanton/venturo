import dbConnect from "@/config/database";
import Collection from "@/models/collections";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbConnect()
        const collection = await req.json()
        const newCollection = new Collection(collection)
        await newCollection.save()
        return NextResponse.json({ body: newCollection, status: 200 })
    } catch (error) {
        console.error('POST')
        return NextResponse.json({ status: 400, error: error })
    }
}

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