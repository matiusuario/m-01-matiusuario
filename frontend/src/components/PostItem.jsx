import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/authProvider.jsx";
import { Comment } from "./Comment.jsx";
import { domain } from "../configs/utils.js";

const PostItem = ({ post }) => {

	const { auth } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleDeletePost = async () => {
		const req = await fetch(`${domain}/posts/${post._id} `, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: auth.token
			}
		});
		if (req.status >= 400 ) {
			alert("Error al eliminar publicación");
			navigate("/publicaciones");
			return;
		}
		alert("Publicación eliminada con éxito.");
		navigate("/publicaciones");
	}

	return (
		<div className="column my-3 pt-3">
			<div className="px-2 py-3 pub">
				<h2 className="tit mb-3">{post.title}</h2>
				<p className="fechaCr">{post.createdAt.slice(0, 10)}</p>
				{(post.imageUrl) && 
				<div className="col col-md-8 col-lg-6 mb-5 imgurl">
					<img className="img-fluid" src={post.imageUrl} alt="Imagen de la publicacion"/>
				</div>}
				<p className="cont mb-4">{post.description}</p>
				{post.comments.length > 0 && <h4>Comentarios</h4>}
				{post.comments.length > 0 && post.comments.map((c) => <Comment comment={c} key={c._id} />)}
				{auth && <button type="button" value={post._id} 
					onClick={() => navigate(`/publicaciones/${post._id}/comentar`)}
					className="btn btn-sm btn-outline-secondary btn-comment">Comentar</button>
				}
				{auth && auth.user === post.author._id && <button type="button" className="btn btn-sm btn-outline-secondary btn-borrar"
					onClick={handleDeletePost}>Borrar publicación</button>
				}
			</div>
		</div>
	)
}

export { PostItem };
