import { Link } from "react-router-dom";
import "../styles/body.css";
function Home() {
  return (
    <>
      <section className="container">
        <div>
          <h2 className="home-text1">PELICULAS</h2>
        </div>
        <div>
          <h3 className="home-text2">
            ENCUENTRA LAS MEJORES PELICULAS EN ESTRENO
          </h3>
          <h4 className="home-text3">
            INICIA SESION <Link to="/login">AQUI</Link> CON LOS SIGUIENTES
            DATOS:
            <div
              style={{
                border: "1px solid white",
                width: "30%",
                marginLeft: "auto",
                margin: "0 auto",
              }}
            >
              <h4>
                Email: <em>challenge@alkemy.org</em> <br />
                Contraseña: <em>react</em>
              </h4>
            </div>
          </h4>
          <h4 className="home-text2">
            <em>
              Puedes escribir la película que desees en el buscador o ingresar
              al listado
            </em>
          </h4>
        </div>
      </section>
    </>
  );
}

export default Home;
