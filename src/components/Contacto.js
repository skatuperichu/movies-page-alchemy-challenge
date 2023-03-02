import { Navigate } from "react-router-dom";

function Contacto() {
  let token = sessionStorage.getItem("token");
  return (
    <>
      {!token && <Navigate to="/" />}
      <aside>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/juan-clemente-davio-a1262518a/"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/skatuperichu" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Contacto;
