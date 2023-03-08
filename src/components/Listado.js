import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

function Listado(props) {
  let token = sessionStorage.getItem("token"); // el token puede ser un string o null.

  //LLAMADA A LA API:

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=291df7c7a5b8101ef8c6e54198884ab3&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios
      .get(endPoint)
      .then((response) => {
        const dataDeLaApi = response.data;

        setMoviesList(dataDeLaApi.results);
      })
      .catch((error) => {
        swal(
          <div>
            <h4>Lamentamos los inconvenientes</h4>
            <br />
            <h5>Intenta ingresar más tarde</h5>
          </div>
        );
      });
  }, [setMoviesList]);

  return (
    //renderizado condicional (short circuit) "si no tengo el token redirijime a traves de <Navigate />"
    // "&&" operador AND logico, si lo primero es falso devuelve lo primero, si es verdadero devuelve lo segundo.
    // un string es verdadero, si lo niego (!token) es falso.
    // si el token llega a ser null, estare negando un valor null (!token) y lo convierto en verdadero, por lo tanto devolvera lo segundo.
    <>
      {!token && <Navigate to="/" />}
      <div className="row">
        {moviesList.map((oneMovie, indice) => {
          return (
            <div className="col-md-4" key={indice}>
              <div className="card my-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <button
                  className="favourite-btn"
                  onClick={props.addOrRemoveFromFavs} //ejecutar la funcion que viajo en las props, osea la funcion addOrRemoveFromFavs.
                  data-movie-id={oneMovie.id} // A traves de "atributos de datos" me guardo el id.
                >
                  🖤
                </button>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p>Estreno: {oneMovie.release_date}</p>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 200)}...
                  </p>
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    Conoce más
                  </Link>
                </div>
              </div>
            </div> // my-4 es margen de arriba y de abajo, 4 rem.
          );
        })}
      </div>
    </>
  );
}

export default Listado;

//voy a querer que: no pueda ingresar a este componente listado si no tengo el token
//acerca del return... es una api de una card de bootstrap, tuve que corregir el cierre de <img />, href='#' cambie a href='/' y quite un style.
