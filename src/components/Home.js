import { Link } from "react-router-dom";
import "../styles/body.css";
function Home() {
  return (
    <>
      <section className="container">
        <div>
          <h2 className="home-text1">Bienvenido/a a la pagina de peliculas!</h2>
        </div>
        <div>
          <h3 className="home-text2">
            Aqui podras encontrar peliculas que se encuentran hoy en cartelera
          </h3>
          <h4 className="home-text3">
            Inicia sesion <Link to="/login">aqui</Link> con los siguientes
            datos:
            <h4>
              <b>email:</b> 123@123.com <br />
              <b>contraseña:</b> 123
            </h4>
          </h4>
          <h4 className="home-text2">
            Puedes escribir la pelicula que desees en el buscador o ingresar al
            listado
          </h4>
        </div>
      </section>
    </>
  );
}

export default Home;
