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
        return NextResponse.json({ status: 400, error: error })
    }
}