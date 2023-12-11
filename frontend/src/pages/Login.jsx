import { Link } from "react-router-dom";

const Login = () => {

	return (
		<div>
			<h1>Inicia sesión</h1>
			<p>¿No tienes una cuenta? <Link to="/signup">Registrate</Link></p>
		</div>
	)
  }
  
  export default Login;
