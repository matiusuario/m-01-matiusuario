import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { domain } from "../configs/utils";
import { AuthContext } from "../providers/authProvider.jsx";

const Login = () => {

	const navigate = useNavigate();
	const { login } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const user = {};
		user.username = formData.get("username");
		user.password = formData.get("password");

		const req = await fetch(`${domain}/login`, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			}
		});
		if (req.status >= 400 ) {
			alert("Error al iniciar sesión");
			return;
		}
		const res = await req.json();
		login(res);
		navigate("/publicaciones");
	}

	return (
		<div>
			<h1>Inicia sesión</h1>
			<p>¿No tienes una cuenta? <Link to="/signup">Registrate</Link></p>
			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Nombre de usuario: </label>
				<br/>
				<input required type="text" name="username" className="inTask" />
				<br/>
				<label>Contraseña: </label>
				<br/>
				<input required type="password" name="password" className="inTask" />
				<br/>
				<button type="submit" className="btn btnSubmit">Ingresar</button>
			</form>
		</div>
	)
  }
  
  export default Login;
