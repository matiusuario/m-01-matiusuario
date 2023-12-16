import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../providers/authProvider.jsx";
import logo from "../assets/logo-aforo.webp";
import "../styles/style.css";

const Header = () => {

	const { auth, logout } = useContext(AuthContext);

	return (
	  <header>
		<nav className="navbar navbar-expand fixed-top bg-dark" data-bs-theme="dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src={logo} alt="logo" className="logo"/>
				</Link>
				<div className="navbar-collapse navbar-nav jus">
					<div>
						<Link to="/publicaciones" className="nav-link">Publicaciones</Link>
					</div>
					<div className="end">
						{auth && <Link to="/publicaciones/nueva" className="nav-link">Crear publicación</Link>}
						{!auth && <Link to="/login" className="nav-link">Ingresar</Link>}
						{auth && <button type="button" className="nav-link" onClick={logout}>Cerrar sesión</button>}
					</div>
				</div>
			</div>
		</nav>
	  </header>
	)
  }
  
  export default Header;
