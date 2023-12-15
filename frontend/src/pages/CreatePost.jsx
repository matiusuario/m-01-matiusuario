import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";
import { domain } from "../configs/utils";

const CreatePost = () => {
	
	const navigate = useNavigate();
	const { auth } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const post = {};
		post.title = formData.get("title");
		post.description = formData.get("description");
		post.createdAt = formData.get("createdAt");
		post.imageUrl = formData.get("imageUrl");
		post.author = auth.user;

		const req = await fetch(`${domain}/posts`, {
			method: "POST",
			body: JSON.stringify(post),
			headers: {
				"Content-Type": "application/json",
				Authorization: auth.token
			}
		});
		if (req.status >= 400 ) {
			alert("Error al crear la publicación");
			return;
		}
		alert("Publicación creada con éxito");
		setTimeout(() => navigate("/publicaciones"), 1000);
	}

	return (
		<div>
			<h1>Crear una nueva publicación</h1>
			<form onSubmit={handleSubmit} className="createPostForm">
				<label>Título: </label>
				<br/>
				<input required type="text" className="inTask" name="title"/>
				<br/>
				<label>Descripción: </label>
				<br/>
				<input required type="text" className="inTask" name="description"/>
				<br/>
				<label>Imagen (sólo el enlace a la imagen): </label>
				<br/>
				<input type="text" className="inTask" name="imageUrl"/>
				<br/>
				<button type="submit" className="btn btnSubmit">Publicar</button>
			</form>
		</div>
	)
  }
  
  export default CreatePost;
  