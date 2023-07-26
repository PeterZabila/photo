import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    text: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('comment', postSchema);

export default PostMessage;