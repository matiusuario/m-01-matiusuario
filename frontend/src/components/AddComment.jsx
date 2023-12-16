import { useContext } from "react";
import { AuthContext } from "../providers/authProvider.jsx";
import { domain } from "../configs/utils.js";
import { useNavigate, useParams } from "react-router-dom";

const AddComment = () => {

	const { auth } = useContext(AuthContext);
	const navigate = useNavigate();
	const { _id } = useParams();

	const handleAddComment = async ({ comm }) => {
		console.log("en handleaddcomment en addcomment");
		const req = await fetch(`${domain}/posts/${_id}/comments`, {
			method: "PUT",
			body: JSON.stringify(comm),
			headers: {
				"Content-Type": "application/json",
				Authorization: auth.token
			}
		});
		if (req.status >= 400 ) {
			alert("Error al publicar comentario");
			return;
		}
		setTimeout(() => navigate("/publicaciones"), 1000);
	}

	const handleSubmit = async (e) => {
		console.log("en handle submit en addcoment");
		e.preventDefault();
		const formData = new FormData(e.target);
		const comm = {};
		comm.description = formData.get("description");
		comm.author = auth.user;
		await handleAddComment({ comm });
	}

	return (
		<div className="container my-3 pt-3">
			<form onSubmit={handleSubmit} className="column p-2">
				<h4 className="row addComm mb-2">Escribir comentario</h4>
				<textarea name="description" cols="30" className="row" />
				<button type="submit">Comentar</button>
			</form>
		</div>
	)
}

export { AddComment };
