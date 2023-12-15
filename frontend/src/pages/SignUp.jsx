import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { domain } from "../configs/utils";

const SignUp = () => {

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const user = {};
		user.username = formData.get("username");
		user.password = formData.get("password");
		user.email = formData.get("email");
		user.avatarUrl = formData.get("avatarUrl");

		const req = await fetch(`${domain}/signup`, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			}
		});
		if (req.status >= 400 ) {
			alert("Error al registrar usuario");
			setTimeout(() => navigate("/signup"), 4000);
			return;
		}
		alert("Registrado con éxito");
		setTimeout(() => {
			navigate("/login");
		}, 4000);
	}

	return (
		<div>
			<h1>Registrate</h1>
			<p>¿Ya estás registrado? <Link to="/login">Inicia sesión</Link></p>
			<form onSubmit={handleSubmit} className="signUpForm">
				<label>Email: </label>
				<br/>
				<input required type="text" className="inTask" name="email"/>
				<br/>
				<label>Nombre de usuario: </label>
				<br/>
				<input required type="text" className="inTask" name="username"/>
				<br/>
				<label>Contraseña: </label>
				<br/>
				<input required type="password" className="inTask" name="password"/>
				<br/>
				<label>Avatar (sólo el enlace a la imagen): </label>
				<br/>
				<input required type="text" className="inTask" name="avatarUrl"/>
				<br/>
				<button type="submit" className="btn btnSubmit">Registrarse</button>
			</form>
		</div>
	)
  }
  
  export default SignUp;
