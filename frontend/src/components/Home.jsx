import { Link } from "react-router-dom";

const Home = () => {

	return (
		<div>
			<h1>Publiviajes</h1>
			<p>Las mejores publicaciones sobre viajes...</p>
			<p>
				Comparte experiencias.
				Perdura tus recuerdos y vivencias poniéndolos en palabras
				e intercambiando experiencias con otros viajeros.
			</p>
			<Link to="/publicaciones">PUBLICACIONES</Link>
			<p>Registrate para publicar e interactuar con otros viajeros</p>
			<p>¿No registrado aún?</p>
			<Link to="/signup">Registrate</Link>
		</div>
	)
  }
  
  export default Home;
  