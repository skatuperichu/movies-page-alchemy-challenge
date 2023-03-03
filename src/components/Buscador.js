import swal from "@sweetalert/with-react";
import { useNavigate, Link } from "react-router-dom";

function Buscador() {
  let token = sessionStorage.getItem("token") || null;
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (!token) {
      swal(
        <div>
          <h3>Debes inicar sesión para ver las películas</h3>
        </div>
      );
    }

    if (keyword.length === 0 && token) {
      swal(<h5>Tienes que escribir una palabra clave</h5>);
      return;
    }
  }; /*esto me retorna el input completo. currenTarget es el formulario
  como tal, y como estoy en un formulario yo puedo acceder a sus inputs a traves de su atributo "name"
   que es "keyword", esto lo escribi en <input>. value captura lo que se escriba.
   trim() es un metodo que remueve los espacios que hay antes o despues de un string. Esto me sirve para que
   cobre el swal no considere strings a espacios en blanco*/
  return (
    <form className="d-flex align-items-center" onSubmit={submitHandler}>
      <label className="form-label mb-0 mx-2 ">
        <input
          type="text"
          className="form-control"
          name="keyword"
          placeholder="Buscar..."
        ></input>
      </label>
      <button type="submit" className="btn btn-danger ml-2">
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
