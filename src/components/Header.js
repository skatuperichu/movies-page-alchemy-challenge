//Libraries
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav justify-content-center my-ul">
          <li className="nav-item li-nav-item">
            <button type="button" className="btn btn-light">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </button>
          </li>
          <li className="nav-item li-nav-item">
            <button type="button" className="btn btn-light">
              <Link className="nav-link" to="/listado">
                Listado
              </Link>
            </button>
          </li>
          <li className="nav-item li-nav-item">
            <button type="button" className="btn btn-light">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

//Barra de Navegacion (listado de enlaces)

//Link permite que no se refresque la pagina

//header tiene que estar homnipresente, lo llevo a App
