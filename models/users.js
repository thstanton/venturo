import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    location: { 
        place_id: String, 
        city: String, 
        country: String,
        geometry:{
            longitude: Number,
            Latitude: Number
        }, 
        formatted_address: String
    },
    lastLoggedIn: {
        type: Date
    }
}, {
    timestamps: true
})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User