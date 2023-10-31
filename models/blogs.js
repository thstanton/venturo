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
    location: [{ 
        place_id: String, 
        city: String, 
        country: String,
        geometry:{
            longitude: Number,
            Latitude: Number
        }, 
        formatted_address: String
    }],
    userId: {
        type: Schema.Types.ObjectId,
    },
    collectionIds: [{ type: Schema.Types.ObjectId }],
}, {
    timestamps: true
})

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)
export default Blog