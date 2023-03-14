//Libraries
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import video from "react-useanimations/lib/video";
//Components
import Buscador from "./Buscador";
//CSS
import "../styles/app.css";

function Header() {
  const logOut = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <UseAnimations animation={video} size={45} strokeColor="white" />
          <div className="navbar-brand">TUS PELICULAS</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button type="button" className="btn btn-light">
                  <Link
                    className="nav-link"
                    to="/"
                    style={{ color: "#242424" }}
                  >
                    Home
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-light">
                  <Link
                    className="nav-link"
                    to="/listado"
                    style={{ color: "#242424" }}
                  >
                    Listado
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-light">
                  <Link
                    className="nav-link"
                    to="/favoritos"
                    style={{ color: "#242424" }}
                  >
                    Favoritos
                  </Link>
                </button>
              </li>
            </ul>
            <button type="button" className="btn btn-danger" onClick={logOut}>
              Cerrar Sesión
            </button>
          </div>
          <Buscador />
        </div>
      </nav>
    </header>
  );
}

export default Header;

//Barra de Navegacion (listado de enlaces)

//Link permite que no se refresque la pagina

//header tiene que estar homnipresente, lo llevo a App
