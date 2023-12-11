import { Link } from "react-router-dom";

const SignUp = () => {

	return (
		<div>
			<h1>Registrate</h1>
			<p>¿Ya estás registrado? <Link to="/login">Inicia sesión</Link></p>
		</div>
	)
  }
  
  export default SignUp;
