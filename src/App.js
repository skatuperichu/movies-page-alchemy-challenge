//Libraries
import { Routes, Route } from "react-router-dom";

//Components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";
import Home from "./components/Home";
//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/body.css";
import "./styles/app.css";
import Buscador from "./components/Buscador";
import Favoritos from "./components/Favoritos";

function App() {
  //Yo quiero que: cdo entre a la pagina saber si tengo o no favoritos. para eso:

  const favMovies = localStorage.getItem("favs");
  // guardo en favMovies todo lo que esta en localStorage como favs.

  let tempMoviesFavs;

  if (favMovies === null) {
    tempMoviesFavs = [];
  } //Si favMovies es null entonces quiero tener un array vacio, en donde insertar todo el objeto movieData{} que representa a mis favoritos.
  else {
    tempMoviesFavs = JSON.parse(favMovies);
    /*Si favMovies no es null osea si tengo algo en el localStorage
    yo quiero que tempMoviesFavs sea el array ese que me dio favMovies convertido en un array. 
    Lo que viene del localStorage(que es un ' string ') lo convierto en [ array ] gracias JSON.parse.*/
  }
  console.log(tempMoviesFavs);

  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget; //capturo el evento, aquel al que le di click en fav.
    const parent =
      btn.parentElement; /* el metodo parentElement toma el elemento padre. en este caso toma
     al elemento padre de btn, btn es el evento que toma la funcion addOrRemoveFromFavs dispuesta 
     como prop en el button dentro del componente Listado. el componente padre de button es 
     el <div className="col-md-4" ... /> de aca puedo mostrar lo que yo quiero de la pelicula que 
     favoritee. */
    const imgURL = parent.querySelector("img").getAttribute("src"); //de parent traeme la <img> y el atributo src.
    const title = parent.querySelector("h5").innerText; // el texto lo agarro con la prop innerText
    const overview = parent.querySelector("p:nth-of-type(2)").innerText; // asi capturo el texto del 2do parrafo del div
    const movieData = {
      // A mi me interesa agarrar todo este objeto y guardarlo en localStorage.
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId, //aqui uso "atributos de datos". movieId es como yo nombre el id en Detalle.js
    }; // creo un objeto con todo. aclaro lo que quiero que contenga id, por eso id: ...
    //Mi objetivo es que cuando haga click en agregar a favoritos, me inserte esa nueva pelicula en tempMoviesFavs, por eso el push.
    let movieIsInArray = tempMoviesFavs.find((oneMove) => {
      return oneMove.id === movieData.id;
    }); //del array tempMoviesFavs quiero encontrar (find) aquella pelicula (oneMovie) cuyo id es igual a la pelicula que estoy queriendo guardar. osea para no favoritiar dos veces lo mismo

    if (!movieIsInArray) {
      //si la pelicula no esta la agrego la localStorage
      tempMoviesFavs.push(movieData); //con tempMoviesFavs traigo la info que me dio el localStorage, y con movieData tomo la info que quiero
      localStorage.setItem("favs", JSON.stringify(tempMoviesFavs)); //aca si guardo todo en localStorage
      console.log("se agrego la pelicula");
    } else {
      let deleteMovie = tempMoviesFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id; // si la pelicula ya esta agregada filtro ese array, saco la pelicula y setear de nuevo el localStorage sin esa pelicula.
      });
      localStorage.setItem("favs", JSON.stringify(deleteMovie));
      console.log("se elimino la pelicula"); //
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="body-container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="/listado"
              element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
            />
            <Route path="/detalle" element={<Detalle />} />
            <Route path="/buscador" element={<Buscador />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
