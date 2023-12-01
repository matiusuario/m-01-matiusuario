import { Schema } from "mongoose";

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
	autor: {
		type: String,
		required: true,
	},
	comments: {
		type: String,
	},
	imageUrl: {
		type: String,
	},
	createdAt: {
		type: DateTime,
	}
});

export const Post = model("Post", PostSchema);
