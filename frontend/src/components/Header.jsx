import { Link } from 'react-router-dom';
import logo from "../assets/logo-aforo.webp";
import "../styles/style.css";

const Header = () => {

	return (
	  <header>
		<nav className="navbar navbar-expand fixed-top bg-dark" data-bs-theme="dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src={logo} alt="logo" className="logo"/>
				</Link>
				<div className="navbar-collapse navbar-nav jus">
					<Link to="/publicaciones" className="nav-link">Publicaciones</Link>
					<Link to="/login" className="nav-link">Ingresar</Link>
				</div>
			</div>
		</nav>
	  </header>
	)
  }
  
  export default Header;
