//Libraries
import { Link } from "react-router-dom";
import swal from "sweetalert";
//Components
import Buscador from "./Buscador";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            TUS PELICULAS
          </Link>
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
                <button type="button" className="btn btn-success">
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
                <button type="button" className="btn btn-info">
                  <Link
                    className="nav-link"
                    to="/listado"
                    style={{ color: "#242424" }}
                  >
                    Listado
                  </Link>
                </button>
              </li>
            </ul>
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
