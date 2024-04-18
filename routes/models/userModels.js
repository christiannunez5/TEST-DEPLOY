
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    notifications: [{
        email: String,
        profilePic: String,
        description: String,
        time: {
            type: Date,
            default: Date.now()
        }
    }],
    friendRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }],

}, { timestamps: true })

export const User = mongoose.model('Users', userSchema);