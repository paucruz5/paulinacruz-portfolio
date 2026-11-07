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
                  <strong>{"<Home />"}</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-5"
                  href="/about.html"
                  title="About Paulina"
                >
                  <strong>{"<About />"}</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-5"
                  href="/work.html"
                  title="Paulina’s Work"
                >
                  <strong>{"<Projects />"}</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-5"
                  href="/contact.html"
                  title="Contact Paulina"
                >
                  <strong>{"<Contact />"}</strong>
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
              <small>Customer care & front-end developer</small>
            </h2>
            <br />
            <p className="justified-text-left text-intro paragraph-description">
              Junior front-end developer skilled in HTML, CSS, JavaScript and
              React. I aim to create user-focused web experiences by combining
              technical expertise with a strong customer support background.
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

      <div className="container text-center">
        <div className="homepage-buttons">
          <a href="about.html" className="section-btn shadow rounded">
            Learn more
          </a>

          <a href="work.html" className="section-btn shadow rounded">
            All Projects
          </a>

          <a href="contact.html" className="section-btn shadow rounded">
            Let's talk!
          </a>
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
              Generate a poem in any language written by a woman by writing down
              the theme, using SheCodes Artificial Intelligence API.
            </p>
          </div>
        </div>

        <div className="row justify-content-center project-text">
          <div className="col-lg text-end order-lg-0 order-1">
            <div className="text-center text-lg-end">
              <h3>POLYAMORY GUIDE</h3>
            </div>
            <p className="justified-text-left paragraph-pages">
              A guide to polyamory where I share resources, definitions, and
              insights that expand relationships beyond the constraints of
              monogamy. I used Spotify embed & Google Fonts API.
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
              href="https://purple-weatherapp.paucruz.com/"
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
              Type any city worldwide and it shows you this week's weather
              prediction using the SheCodes Weather API. It also shows the
              weather in ℃ and ℉, date and time of your current location.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="text-center">
          <a
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/paulinamarincruz/"
            title="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:paulinamc_micki@hotmail.com"
            title="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>

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

        <p className="made-by-text text-center mb-5">
          This project was developed using React by
          <a
            href="https://paucruz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {" "}
            Paulina Cruz,
          </a>{" "}
          <br className="d-block d-md-none" />
          it's open-sourced on{" "}
          <a
            href="https://github.com/paucruz5/portfolio-webpage"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Github{" "}
          </a>
          and hosted on Netlify
        </p>
      </footer>
    </div>
  );
}
