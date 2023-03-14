//Libraries
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";

function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="https://www.instagram.com/clemendavio/"
              className="nav-link px-2 text-muted"
              rel="noopener noreferrer" /*esto es para hacer referencias a enlaces externos a mi pag web.*/
            >
              <UseAnimations animation={instagram} size={45} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/juan-clemente-davio-a1262518a/"
              className="nav-link px-2 text-muted"
              rel="noopener noreferrer"
            >
              <UseAnimations animation={linkedin} size={45} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/skatuperichu/movies-page-alkemy-challenge"
              className="nav-link px-2 text-muted"
              rel="noopener noreferrer"
            >
              <UseAnimations animation={github} size={45} />
            </a>
          </li>
        </ul>
        <p
          className="text-center"
          style={{
            color: "#DAC12F",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Juan Clemente Davio
        </p>
      </footer>
    </div>
  );
}

export default Footer;

//footer tiene que estar homnipresente, lo llevo a App
