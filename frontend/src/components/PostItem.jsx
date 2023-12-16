import { useContext } from "react";
import { AuthContext } from "../providers/authProvider.jsx";
import { Comment } from "./Comment.jsx";
import { AddComment } from "./AddComment.jsx";
import { Link, useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {

	const { auth } = useContext(AuthContext);
	const navigate = useNavigate();

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
				{/*<button type="button" value={props.post._id} className="btn btn-sm btn-outline-secondary btn-editar">Editar publicación</button>
				<button value={props.post._id} className="btn btn-sm btn-outline-secondary btn-borrar">Borrar publicación</button>*/}
			</div>
		</div>
	)
}

export { PostItem };
