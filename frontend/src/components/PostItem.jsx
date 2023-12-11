const PostItem = (props) => {

	return (
		<div className="column my-3 pt-3">
			<div className="px-2 py-3 pub">
				<h2 className="tit mb-3">{props.post.title}</h2>
				<p className="fechaCr">{props.post.createdAt.slice(0, 10)}</p>
				{(props.post.imageUrl) && 
				<div className="col col-md-8 col-lg-6 mb-5 imgurl">
					<img className="img-fluid" src={props.post.imageUrl} alt="Imagen de la publicacion"/>
				</div>}
				<p className="cont mb-4">{props.post.description}</p>
				{/*<button type="button" value={props.post._id} className="btn btn-sm btn-outline-secondary btn-editar">Editar publicación</button>
				<button value={props.post._id} className="btn btn-sm btn-outline-secondary btn-borrar">Borrar publicación</button>*/}
			</div>
		</div>
	)
}

export { PostItem };
