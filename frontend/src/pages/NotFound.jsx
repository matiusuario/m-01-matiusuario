import { Link } from 'react-router-dom';

const NotFound = () => {

	return (
		<div>
			<p>No se encontró lo que buscabas...</p>
			<Link to="/">Ir al inicio</Link>
		</div>
	)
  }
  
  export default NotFound;
  