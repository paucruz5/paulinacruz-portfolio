import "./Home.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <nav className="navbar navbar-expand-md navbar-green fixed-top">
        <div className="container">
          <a className="navbar-brand" href="about.html" title="About Paulina">
            <img
              src="/images/PMC.png"
              width="50"
              height="50"
              alt="Paulina Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link px-5"
                  href="/index.html"
                  title="Paulina’s Home page"
                >
                  <strong>Home page</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-5"
                  href="/about.html"
                  title="About Paulina"
                >
                  <strong>About me</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-5"
                  href="/work.html"
                  title="Paulina’s Work"
                >
                  <strong>My work</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active px-5"
                  aria-current="page"
                  href="contact.html"
                  title="Contact Paulina"
                >
                  <strong>Let's talk!</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1 className="hero-heading text-center">Let's talk!</h1>

      <div className="container">
        <div className="contact-info">
          <a
            href="mailto:paulinamc_micki@hotmail.com"
            className="social-contact"
          >
            <i className="fa-solid fa-envelope fa-fw"></i>
            paulinamc_micki@hotmail.com
          </a>
          <a href="mailto:pauwcruz@gmail.com" className="social-contact">
            <i className="fa-brands fa-google fa-fw"></i> pauwcruz@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/paulinamarincruz/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-contact"
          >
            <i className="fa-brands fa-linkedin fa-fw"></i> paulinamarincruz
          </a>
        </div>
      </div>

      <div className="container text-center py-5">
        <div className="bottom-buttons">
          <a href="about.html" className="section-btn shadow rounded">
            {" "}
            About me{" "}
          </a>

          <a href="work.html" className="section-btn shadow rounded">
            {" "}
            My projects{" "}
          </a>
        </div>
      </div>

      <footer>
        <p className="made-by-text text-center mb-5">
          This project was coded by
          <a
            href="https://paucruz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {" "}
            Paulina Cruz
          </a>{" "}
          <br className="d-block d-md-none" />
          and it's open-sourced on{" "}
          <a
            href="https://github.com/paucruz5/portfolio-webpage"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://the-meaning-archive.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
