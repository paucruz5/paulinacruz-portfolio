import "./About.css";

export default function About() {
  return (
    <div className="about-container">
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
                  className="nav-link active px-5"
                  aria-current="page"
                  href="about.html"
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
                  className="nav-link px-5"
                  href="/contact.html"
                  title="Contact Paulina"
                >
                  <strong>Let's talk!</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container hero-section">
        <div className="row justify-content-center">
          <div className="col-lg"></div>
          <div className="col-lg text-center">
            <h1>Paulina Cruz</h1>
            <h2>
              <small>front-end developer based in Mexico</small>
            </h2>
            <br />
            <p className="justified-text-left text-intro paragraph-description">
              My curiosity and love for technology drives me to learn. I did a
              front-end course and it changed my life. I fell in love with
              coding and I will keep learning more.
            </p>
          </div>

          <div className="col-lg">
            <img
              className="img-fluid ms-2 dog-picture p-1 shadow rounded"
              src="/images/pau&luca.JPEG"
              alt="Paulina-with-dog-picture"
              width="220"
            />
          </div>
          <div className="col-lg"></div>
        </div>
      </div>

      <div className="about-myself">
        <div className="container about-lists">
          <div className="row text-left">
            <div className="col">
              <h3>A little about my work</h3>
            </div>
          </div>
          <ul>
            <li className="mb-1 list">
              Provide the design of your web page and I will create it
            </li>
            <li className="mb-1 list">I use Visual Studio Code</li>
            <li className="mb-1 list">I use JavaScript</li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row text-left">
            <div className="col">
              <h3>A little about me</h3>
            </div>
          </div>
          <ul>
            <li className="mb-1 list">
              I'm 31 years old. Born in August, 1994. I'm a Leo♌
            </li>
            <li className="mb-1 list">I'm Mexican-Cuban</li>
            <li className="mb-1 list">
              I studied front-end developing in
              <span className="shecodes">
                <a
                  href="https://www.shecodes.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SheCodes
                </a>
              </span>
            </li>
            <li className="mb-1 list">I also studied cinematography</li>
            <li className="mb-1 list">
              I have 8 years of customer service experience
            </li>
            <li className="mb-1 list">
              My personality type is
              <span className="personality">
                <a
                  href="https://www.16personalities.com/enfj-personality"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ENFJ-A (Protagonist)
                </a>
              </span>
            </li>
            <li className="mb-1 list">
              I speak 3 languages:
              <br />
              <ul>
                <li className="my-1">
                  <small>Spanish (native)</small>
                </li>
                <li className="mb-1">
                  <small>English (fluent C2)</small>
                </li>
                <li className="mb-1">
                  <small>Portuguese (advance)</small>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row text-left">
            <div className="col">
              <h3>A little about my soul</h3>
            </div>
          </div>
          <ul>
            <li className="mb-1 list">
              I'm part of the{" "}
              <a href="#" id="lgbtDef">
                LGBTQIA+
              </a>{" "}
              &
              <a href="#" id="polyDef">
                polyamorous
              </a>{" "}
              community
            </li>
            <li className="mb-1 list">
              I'm a{" "}
              <a href="#" id="feministDef">
                feminist
              </a>
              , anti-racist and activist
            </li>
            <li className="mb-1 list">I'm an ecologist and animalist</li>
            <li className="mb-1 list">
              I can't live without music, cinema, books and art
            </li>
            <li className="mb-1 list">Love gives me purpose</li>
            <li className="mb-1 list">Strong family values</li>
          </ul>
        </div>
      </div>

      <div className="container text-center">
        <div className="bottom-buttons">
          <a href="work.html" className="section-btn shadow rounded">
            {" "}
            My projects{" "}
          </a>

          <a href="contact.html" className="section-btn shadow rounded">
            Contact me
          </a>
        </div>
      </div>

      <footer>
        <div className="email-link">
          <a href="mailto:paulinamc_micki@hotmail.com" title="Paulina's email">
            <strong>paulinamc_micki@hotmail.com</strong>
          </a>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col">
              <a
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/paulinamarincruz/"
                title="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <div className="col">
              <a
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/paucruz5"
                title="Facebook Profile"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>

            <div className="col">
              <a
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/paucruz5/"
                title="Instagram Profile"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            <div className="col">
              <a
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/paucruz5/"
                title="GitHub Profile"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center mt-5">
          This project was coded by Paulina Cruz{" "}
          <br className="d-block d-md-none" />
          and it is
          <a
            href="https://github.com/paucruz5/portfolio-webpage"
            target="_blank"
            rel="noopener noreferrer"
            className="github-code"
          >
            open-sourced
          </a>
        </p>
      </footer>
    </div>
  );
}
