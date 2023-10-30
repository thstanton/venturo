import mongoose, { Schema } from "mongoose"

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photos: [{ url: String, isMain: Boolean }],
    location: [],
    userId: {
        type: Schema.Types.ObjectId,
    },
    collectionIds: [{ type: Schema.Types.ObjectId }],
}, {
    timestamps: true
})

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)
export default Blog