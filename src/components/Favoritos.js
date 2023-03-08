import { useState, useEffect } from "react";

function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");

    console.log(favsInLocal);

    if (favsInLocal !== null) {
      let favsArray = JSON.parse(favsInLocal);
      setFavorites(favsArray);
    }
  }, []);
  return (
    <>
      <h2>Seccion de favoritos</h2>
      <div className="row">
        {favorites.map((oneMovie, indice) => {
          return (
            <div className="col-md-4" key={indice}>
              <div className="card my-4">
                <img src={oneMovie.imgURL} className="card-img-top" alt="..." />
                <button
                  className="favourite-btn"
                  //onClick={props.addOrRemoveFromFavs}
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
