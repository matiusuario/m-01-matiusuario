import { Post } from "../models/post.model.js";
import { Comment } from "../models/comment.model.js";

const postCtrl = {};

postCtrl.getPosts = async (req, res) => {
	try {
		const posts = await Post.find()
			.populate("author", ["username", "avatarUrl"])
			.populate({
				path: "comments",
				select: "description",
				populate: { path: "author", select: "username avatarUrl" }
			});
		return res.json(posts);
	} catch (err) {
		console.error("Error al obtener posts de la BD", err);
		res.status(500).send("Error al obtener las publicaciones de la base de datos");
	}
}

postCtrl.postPost = async (req, res) => {
	try {
		const { title, description, author, imageUrl } = req.body;
		const newPost = new Post({
			"title": title,
			"description": description,
			"author": author,
			"imageUrl": imageUrl
		});
		const saved = await newPost.save();
		return res.json(saved);
	} catch (err) {
		console.error("Error al guardar post en la BD", err);
		res.status(500).send("Error al guardar la publicación en la base de datos");
	}
}

postCtrl.deletePost = async (req, res) => {
	try {
		const { _id } = req.params;
		const deleted = await Post.findByIdAndDelete(_id);
		if (!deleted) {
			return res.json({"message": "No se encontró la publicación"});
		}
		return res.json(deleted);
	} catch (err) {
		console.error("Error al eliminar post de la BD", err);
		res.status(500).send("Error al eliminar la publicación de la base de datos");
	}
}

postCtrl.addComment = async (req, res) => {
	try {
		const { _id } = req.params;
		const { description, author } = req.body;
		const post = await Post.findById(_id);
		if (!post) {
			return res.json({"message": "No se encontró la publicación"});
		}
		const newComm = new Comment({
			"description": description,
			"author": author,
		});
		await newComm.save();
		post.comments.push(newComm);
		const updated = await post.save();
		return res.json({"message": "Comentario guardado", "post": updated});
	} catch (err) {
		console.error("Error al guardar comentario en la BD", err);
		res.status(500).send("Error al guardar comentario en la publicación");
	}
}
export { postCtrl };
