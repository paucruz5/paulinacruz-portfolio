import "./Work.css";

export default function Work() {
  return (
    <div className="work-container">
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
                  className="nav-link active px-5"
                  aria-current="page"
                  href="work.html"
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

      <h1 className="hero-heading text-center">My projects</h1>

      <div className="container work-examples">
        <div className="row justify-content-center project-text">
          <div className="col-lg text-center text-lg-end">
            <a
              href="https://women-poems-searcher.paucruz.com/"
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
              Choose the theme of the poem in any language and the searcher will
              show you a short poem written by a woman from anywhere in the
              world, using SheCodes Artificial Intelligence API.
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

          <div className="col-lg order-lg-1 order-0">
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
              href="https://purple-weather-app.paucruz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img
                src="/images/weather-app.png"
                alt="Paulina Cruz's website that shows the weather in any city"
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

        <div className="row justify-content-center project-text">
          <div className="col-lg text-end order-lg-0 order-1">
            <div className="text-center text-lg-end">
              <h3>DICTIONARY APP</h3>
            </div>
            <p className="justified-text-left paragraph-pages">
              This dictionary uses SheCodes Dictionary API to show you the
              definition of any word in English and a few synonyms. I also use
              Pexels API to show you pictures related to that word.
            </p>
          </div>

          <div className="col-lg order-lg-1 order-0">
            <a
              href="https://purple-dictionary.paucruz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img
                src="/images/dictionary-project.png"
                alt="Paulina Cruz's website with a working dictionary"
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
              href="https://purple-world-clock.paucruz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img
                src="/images/world-clock.png"
                alt="Paulina Cruz's Web page that shows the time of a few cities"
                width="350"
                className="project-image p-1 shadow rounded"
              />
              <span className="tap-text">Tap to open</span>
            </a>
          </div>

          <div className="col-lg text-start">
            <div className="text-center text-lg-start">
              <h3>WORLD CLOCK</h3>
            </div>
            <p className="justified-text-right paragraph-pages">
              This page displays the current time and date for eight cities
              around the world using Moment Timezone. It also detects the user's
              local timezone and provides the current time and date.
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

          <a href="contact.html" className="section-btn shadow rounded">
            Contact me
          </a>
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

        <p className="made-by-text text-center mb-5 ">
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
