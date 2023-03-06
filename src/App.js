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

function App() {
  const addOrRemoveFromFavs = () => {
    console.log("jooooya");
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
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
