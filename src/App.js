//Libraries
import { Routes, Route } from "react-router-dom";

//Components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/body.css";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="container mt-3">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
