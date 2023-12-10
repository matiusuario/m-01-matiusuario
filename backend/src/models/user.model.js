import { Schema, model } from "mongoose";

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		minlength: 5
	},
	password: {
		type: String,
		required: true,
		minlength: 5
	},
	email: {
		type: String,
		required: true
	},
	avatarUrl: {
		type: String,
		required: false
	}
});

const User = model("User", UserSchema);

export { User };
