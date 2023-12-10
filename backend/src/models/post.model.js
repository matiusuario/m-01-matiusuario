import { Schema, model } from "mongoose";

const PostSchema = new Schema({
	title: {
		type: String,
		required: true,
		minlength: 2
	},
	description: {
		type: String,
		required: true,
		minlength: 2
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: "Comment"
	}],
	imageUrl: {
		type: String,
	}
}, {
	timestamps: true
});

const Post = model("Post", PostSchema);

export { Post };
