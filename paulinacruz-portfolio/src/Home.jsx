import "./Home.css";

export default function Home() {
  return (
    <div className="app-container">
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
                  className="nav-link active px-5"
                  aria-current="page"
                  href="index.html"
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
              I aim to create engaging digital experiences that delight users
              and meet business goals. I thrive on turning complex ideas into
              visually appealing and intuitive interfaces.
            </p>
          </div>

          <div className="col-lg text-center">
            <img
              className="img-fluid ms-2 face-shot p-1 shadow rounded"
              src="/images/Paulina.png"
              alt="Paulina-faceshot"
              width="220"
            />
          </div>
          <div className="col-lg"></div>
        </div>
      </div>

      <div className="container work-examples">
        <div className="row justify-content-center project-text">
          <div className="col-lg text-center text-lg-end">
            <a
              href="https://women-poems-searcher.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img
                src="/images/women-poems.png"
                alt="Paulina Cruz's website that finds poems written by women"
                width="350"
                className="project-image p-1 shadow rounded"
              />
              <span className="tap-text">Tap to open</span>
            </a>
          </div>

          <div className="col-lg text-start">
            <div className="text-center text-lg-start">
              <h3>POEM SEARCHER</h3>
            </div>
            <p className="justified-text-right paragraph-pages">
              Choose the theme of the poem, in any language you'd like and the
              searcher will show you a beautiful poem written by a woman from
              anywhere in the world, using Artificial Intelligence.
            </p>
          </div>
        </div>

        <div className="row justify-content-center project-text">
          <div className="col-lg text-end order-lg-0 order-1">
            <div className="text-center text-lg-end">
              <h3>POLYAMORY GUIDE</h3>
            </div>
            <p className="justified-text-left paragraph-pages">
              A gentle guide to polyamory, centered on love, communication,
              consent, and autonomy. Resources, definitions, and insights that
              expand relationships beyond the constraints of monogamy.
            </p>
          </div>

          <div className="col-lg order-lg-1 order-0 text-lg-start text-center">
            <a
              href="https://polyamory-guide-by-paulina.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img
                src="/images/polyamory-guide.png"
                alt="Paulina Cruz's website that provides a guide on polyamory"
                width="350"
                className="project-image p-1 shadow rounded"
              />
              <span className="tap-text">Tap to open</span>
            </a>
          </div>
        </div>

        <div className="row justify-content-center project-text">
          <div className="col-lg text-center text-lg-end">
            <a
              href="https://weather-pc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img
                src="/images/weather-app.png"
                alt="Paulina Cruz's website that shows you the weather in any city"
                width="350"
                className="project-image p-1 shadow rounded"
              />
              <span className="tap-text">Tap to open</span>
            </a>
          </div>

          <div className="col-lg text-start">
            <div className="text-center text-lg-start">
              <h3>WEATHER APP</h3>
            </div>
            <p className="justified-text-right paragraph-pages">
              Choose any city in the world and the searcher will show you this
              week's weather prediction in that city. It also shows the weather
              in ℃ and ℉, date and time of your current location.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="bottom-buttons">
          <a href="about.html" className="section-btn shadow rounded">
            {" "}
            About me{" "}
          </a>

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
