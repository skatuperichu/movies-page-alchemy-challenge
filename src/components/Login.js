import axios from "axios"; // axios me permite hacer peticiones http para recibir apis
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); //como es un Hook lo guardo en una variable

  const submitHandler = (e) => {
    e.preventDefault(); //el metodo preventDeafult evita que se refresque la pagina cdo se haga click en el form

    const email = e.target.email.value; // del formulario, quien fue quien disparo el evento, capturo el campo email con target. Con value tomo el valor escrito en el campo
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // todo esto es una Expresion Regular que indica como tiene que ser un email correctamente.

    if (email === "" || password === "") {
      swal(<h2>Por favor complete todos los campos</h2>);
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      // test testea si el valor del campo email es un email correcto. test devuelve un booleano
      swal(<h2>Debes escribir un correo electrónico válido</h2>);
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal(<h2>Credenciales invalidas</h2>);
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      // post es una peticion para enviar informacion. en este caso quiero enviar email y password.
      // necesito 2 cosas: URL del endpoint de la API y los datos que la API espera en formato de objeto {}
      .then((res) => {
        swal("¡Perfecto!", "Ingresaste correctamente", "success");
        const tokenRecibido = res.data.token;
        sessionStorage.setItem("token", tokenRecibido);
        navigate("/listado"); // para redireccionar
        //setItem es un metodo predeterminado de localStorage, necesita un nombre identificador y lo que voy a guardar.
        //getItem es otro metodo de localStorage que permite acceder a lo que guarde.
      });

    //then es lo que sucede luego de la peticion post (que es una promesa).
    //res es respuesta
    //TOKEN: identificador del email y password, es como la puerta de entrada a la peticion y a las proximas peticiones.
    /*Necesito guardar ese Token lo guardo en tokenRecibido. Lo guardo en el almacenamiento local del navegador 
    a traves de localStorage (aquello que el navegador nos provee para que podamos almacenar informacion. 
    Es un Objeto que ya existe. guarda solamente Strings). En el localStorage voy a almacenar el token que
    recibo como res de la API. Gracias a la API a email y password le doy un token */
  };
  let token = sessionStorage.getItem("token");
  return (
    //(short circuit) si tengo el token, redirijime a listado. osea no me dejes volver al home (que esta el login, para eso tendria que tener un 'cerrar sesion')
    // {token && <Navigate to="/listado" />}
    <>
      <div className="row">
        <div className="col-6 offset-3">
          <h3 style={{ color: "#DAC12F" }}>Iniciar sesión</h3>
          <form onSubmit={submitHandler}>
            <label className="form-label d-block mt-2">
              <span style={{ color: "#DAC12F" }}>Correo electronico:</span>{" "}
              <br />
              <input type="text" className="form-control" name="email"></input>
            </label>
            <br />
            <label className="form-label d-block mt-2">
              <span style={{ color: "#DAC12F" }}>Contraseña:</span> <br />
              <input
                type="password"
                name="password"
                className="form-control"
              ></input>
            </label>
            <br />
            <button type="submit" className="btn btn-light">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
