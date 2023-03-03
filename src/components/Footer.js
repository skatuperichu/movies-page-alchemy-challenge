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
              Instagram
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/juan-clemente-davio-a1262518a/"
              className="nav-link px-2 text-muted"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/skatuperichu/movies-page-alkemy-challenge"
              className="nav-link px-2 text-muted"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">Juan Clemente Davio</p>
      </footer>
    </div>
  );
}

export default Footer;

//footer tiene que estar homnipresente, lo llevo a App
