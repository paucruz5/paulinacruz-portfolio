import "./Home.css";

export default function Work() {
  return (
    <div className="work-container">
      <nav class="navbar navbar-expand-md navbar-green fixed-top">
        <div class="container">
          <a class="navbar-brand" href="about.html" title="About Paulina">
            <img
              src="images/PMC.png"
              width="50"
              height="50"
              alt="Paulina Logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link px-5"
                  href="/index.html"
                  title="Paulina’s Home page"
                >
                  <strong>Home page</strong>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-5"
                  href="/about.html"
                  title="About Paulina"
                >
                  <strong>About me</strong>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active px-5"
                  aria-current="page"
                  href="work.html"
                  title="Paulina’s Work"
                >
                  <strong>My work</strong>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-5"
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

      <h1 class="hero-heading text-center">My projects</h1>

      <div class="container work-examples">
        <div class="row justify-content-center project-text">
          <div class="col-lg text-center text-lg-end">
            <a
              href="https://women-poems-searcher.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="image-link"
            >
              <img
                src="images/women-poems.png"
                alt="Paulina Cruz's website that finds poems written by women"
                width="350"
                class="project-image p-1 shadow rounded"
              />
              <span class="tap-text">Tap to open</span>
            </a>
          </div>

          <div class="col-lg text-start">
            <div class="text-center text-lg-start">
              <h3>POEM SEARCHER</h3>
            </div>
            <p class="justified-text-right paragraph-pages">
              Choose the theme of the poem, in any language you'd like and the
              searcher will show you a beautiful poem written by a woman from
              anywhere in the world, using Artificial Intelligence.
            </p>
          </div>
        </div>

        <div class="row justify-content-center project-text">
          <div class="col-lg text-end order-lg-0 order-1">
            <div class="text-center text-lg-end">
              <h3>POLYAMORY GUIDE</h3>
            </div>
            <p class="justified-text-left paragraph-pages">
              A gentle guide to polyamory, centered on love, communication,
              consent, and autonomy. Resources, definitions, and insights that
              expand relationships beyond the constraints of monogamy.
            </p>
          </div>

          <div class="col-lg order-lg-1 order-0">
            <a
              href="https://polyamory-guide-by-paulina.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="image-link"
            >
              <img
                src="images/polyamory-guide.png"
                alt="Paulina Cruz's website that provides a guide on polyamory"
                width="350"
                class="project-image p-1 shadow rounded"
              />
              <span class="tap-text">Tap to open</span>
            </a>
          </div>
        </div>

        <div class="row justify-content-center project-text">
          <div class="col-lg text-center text-lg-end">
            <a
              href="https://weather-pc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="image-link"
            >
              <img
                src="images/weather-app.png"
                alt="Paulina Cruz's website that shows the weather in any city"
                width="350"
                class="project-image p-1 shadow rounded"
              />
              <span class="tap-text">Tap to open</span>
            </a>
          </div>

          <div class="col-lg text-start">
            <div class="text-center text-lg-start">
              <h3>WEATHER APP</h3>
            </div>
            <p class="justified-text-right paragraph-pages">
              Choose any city in the world and the searcher will show you this
              week's weather prediction in that city. It also shows the weather
              in ℃ and ℉, date and time of your current location.
            </p>
          </div>
        </div>

        <div class="row justify-content-center project-text">
          <div class="col-lg text-end order-lg-0 order-1">
            <div class="text-center text-lg-end">
              <h3>WORLD CLOCK</h3>
            </div>
            <p class="justified-text-left paragraph-pages">
              This page shows you the full date and time, in a digital clock, of
              four default cities all around the world. You can also choose
              other four cities or your current location.
            </p>
          </div>

          <div class="col-lg order-lg-1 order-0">
            <a
              href="https://world-clock-pc.netlify.app/index.html"
              target="_blank"
              rel="noopener noreferrer"
              class="image-link"
            >
              <img
                src="images/world-clock.png"
                alt="Paulina Cruz's Web page that shows the time of a few cities"
                width="350"
                class="project-image p-1 shadow rounded"
              />
              <span class="tap-text">Tap to open</span>
            </a>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="bottom-buttons">
          <a href="about.html" class="section-btn shadow rounded">
            {" "}
            About me{" "}
          </a>

          <a href="contact.html" class="section-btn shadow rounded">
            Contact me
          </a>
        </div>
      </div>

      <footer>
        <div class="email-link">
          <a href="mailto:paulinamc_micki@hotmail.com" title="Paulina's email">
            <strong>paulinamc_micki@hotmail.com</strong>
          </a>
        </div>

        <div class="container text-center">
          <div class="row">
            <div class="col">
              <a
                class="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/paulinamarincruz/"
                title="LinkedIn Profile"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <div class="col">
              <a
                class="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/paucruz5"
                title="Facebook Profile"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>

            <div class="col">
              <a
                class="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/paucruz5/"
                title="Instagram Profile"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>

            <div class="col">
              <a
                class="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/paucruz5/"
                title="GitHub Profile"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <p class="text-center mt-5">
          This project was coded by Paulina Cruz{" "}
          <br class="d-block d-md-none" />
          and it is
          <a
            href="https://github.com/paucruz5/portfolio-webpage"
            target="_blank"
            rel="noopener noreferrer"
            class="github-code"
          >
            open-sourced
          </a>
        </p>
      </footer>
    </div>
  );
}
