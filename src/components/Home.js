import { Link } from "react-router-dom";
import "../styles/body.css";
function Home() {
  return (
    <>
      <section className="container">
        <div>
          <h2 className="home-text1">Bienvenido/a a la página de películas!</h2>
        </div>
        <div>
          <h3 className="home-text2">
            Aquí podrás encontrar películas que se encuentran hoy en cartelera
          </h3>
          <h4 className="home-text3">
            Inicia sesión <Link to="/login">aquí</Link> con los siguientes
            datos:
            <h4>
              <b>email:</b> challenge@alkemy.org <br />
              <b>contraseña:</b> react
            </h4>
          </h4>
          <h4 className="home-text2">
            Puedes escribir la película que desees en el buscador o ingresar al
            listado
          </h4>
        </div>
      </section>
    </>
  );
}

export default Home;
