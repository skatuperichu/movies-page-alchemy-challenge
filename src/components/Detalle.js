import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import "../styles/body.css";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

function Detalle() {
  let token = sessionStorage.getItem("token");

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=291df7c7a5b8101ef8c6e54198884ab3&language=es-US`;
    axios
      .get(endPoint)
      .then((response) => {
        const movieData = response.data;
        setMovie(movieData);
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
  }, [setMovie]);
  console.log(movie);

  return (
    <>
      {!token && <Navigate to="/" />}
      {!movie && ( // condicional para: si no tengo movie, mostra el spinner (que es el cosito de Cargando.. de bootstrap)
        <div className="spinner-container">
          <span>
            <UseAnimations animation={loading} />
          </span>
        </div>
      )}
      {movie && ( //en este caso utilizo un condicional. como el state comienza null, si tengo movie mostrame todo lo siguiente. es una accion asincronica.
        <div className="row">
          <h2 className="card-title">{movie.title}</h2>
          <div className="row">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="img-thumbnail"
                alt="movie"
              />
            </div>
            <div className="col-md-8">
              <ul>
                <li>
                  <h>
                    <b>Sinopsis:</b>
                  </h>
                  <p>{movie.overview}</p>
                </li>
                <li>
                  <h>
                    <b>Fecha de estreno: </b>
                    {movie.release_date}
                  </h>
                </li>
                <li>
                  <h>
                    <b>Géneros: </b>
                    <ul>
                      {movie.genres.map((oneGenre) => (
                        <li key={oneGenre.id}>{oneGenre.name}</li>
                      ))}
                    </ul>
                  </h>
                </li>
                <hr />
                <li>
                  <p>
                    <i>
                      Para más información ingresa {`${" "}`}
                      <Link to={`${movie.homepage}`}>aquí</Link>
                    </i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detalle;
