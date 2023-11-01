import User from "@/models/users"
import dbConnect from "@/config/database"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
    try {
        await dbConnect()
        const user = await User.findOne({ email: params.id })
        return NextResponse.json({ status: 200, data: user })
    } catch (error) {
        return NextResponse.json({ status: 400, error: error })
    }
}