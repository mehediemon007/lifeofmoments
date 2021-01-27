import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    poster: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    makedAt: {
        type: Date,
        default: new Date(),
    },
})

var postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;