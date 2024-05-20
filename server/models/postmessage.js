import mongoose from "mongoose";

const postSchema = mongoose.Schema({
title: String,
message: String,
creator: String,
tags: [String],
likeCount:[{type: String,
    default: ""}],
createdAt: {
    type: Date,
    default: new Date()
},
image: String
});
const postMessage = mongoose.model('postMessage',postSchema);
export default postMessage;