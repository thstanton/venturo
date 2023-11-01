import mongoose, { Schema } from "mongoose"

const collectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Collection = mongoose.models.Collection || mongoose.model('Collection', collectionSchema)
export default Collection