import swal from "@sweetalert/with-react";
import { Navigate, useNavigate } from "react-router-dom";

function Buscador() {
  let token = sessionStorage.getItem("token") || null;
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    {
      !token &&
        swal({ text: "Debes inicar sesion para ver las peliculas" }) && (
          <Navigate to="/" />
        );
    }

    if (keyword.length === 0 && token) {
      swal({ text: "Tienes que escribir una palabra clave" });
      return;
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/resultados?palabra-clave=${keyword}`); // le asigno al URL con ? un Query String llamado palabra-clave que es = a la variable keyword creada en linea 10. Luego el resultado toma este valor.
    }
  }; /*esto me retorna el input completo. currenTarget es el formulario
  como tal, y como estoy en un formulario yo puedo acceder a sus inputs a traves de su atributo "name"
   que es "keyword", esto lo escribi en <input>. value captura lo que se escriba.
   trim() es un metodo que remueve los espacios que hay antes o despues de un string. Esto me sirve para que
   el swal no considere strings a espacios en blanco*/
  return (
    <>
      <form className="d-flex align-items-center" onSubmit={submitHandler}>
        <label className="form-label mb-0 mx-2 ">
          <input
            type="text"
            className="form-control"
            name="keyword"
            placeholder="Buscar..."
          ></input>
        </label>
        <button type="submit" className="btn btn-warning ml-2">
          Buscar
        </button>
      </form>
    </>
  );
}

export default Buscador;
