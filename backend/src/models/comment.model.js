import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
	description: {
		type: String,
		required: true,
		minlength: 2
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	}
});

const Comment = model("Comment", CommentSchema);

export { Comment };
