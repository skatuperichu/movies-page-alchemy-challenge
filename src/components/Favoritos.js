import swal from "@sweetalert/with-react";
import { Navigate } from "react-router-dom";
import "../styles/body.css";
function Favoritos(props) {
  let token = sessionStorage.getItem("token");
  if (!Array.isArray(props.favorites)) {
    return <div>No hay favoritos por mostrar.</div>;
  }
  return (
    <>
      {!token &&
        swal({
          text: "¡Debes iniciar sesión para ver tus peliculas favoritas!",
        }) && <Navigate to="/" />}
      <h2
        style={{
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "30px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Tus favoritos ❤️️
      </h2>
      <div
        style={{
          color: "red",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "30px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        {props.favorites.length === 0 ? ( //or: !props.favorites.length ? ()
          <>{props.favorites.length} 😕</>
        ) : (
          <>{props.favorites.length} 😎</>
        )}
      </div>
      <div className="row m-1">
        {props.favorites.map((oneMovie, indice) => {
          return (
            <div className="col-md-4" key={indice}>
              <div className="card my-4">
                <img src={oneMovie.imgURL} className="card-img-top" alt="..." />
                <button
                  className="favourite-btn"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={oneMovie.id}
                >
                  🖤
                </button>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p>Estreno: {oneMovie.release_date}</p>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 200)}...
                  </p>
                </div>
              </div>
            </div> // my-4 es margen de arriba y de abajo, 4 rem.
          );
        })}
      </div>
    </>
  );
}

export default Favoritos;
