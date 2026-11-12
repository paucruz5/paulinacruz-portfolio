import "./About.css";

export default function About() {
  const showDefinition = (event, definition) => {
    event.preventDefault();
    window.alert(definition);
  };

  return (
    <div>
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
                  className="nav-link active px-5"
                  aria-current="page"
                  href="about.html"
                  title="About Paulina"
                >
                  <strong>{"<About />"}</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-5"
                  href="/projects.html"
                  title="Paulina’s Projects"
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
          <a
            className="navbar-brand"
            href="/projects.html#polyamory-guide"
            title="Polyamory Guide project"
          >
            <img
              src="/images/Polynizadora-logo.png"
              width="50"
              height="50"
              alt="Paulina Logo"
            />
          </a>
        </div>
      </nav>

      <div className="container hero-section">
        <div className="row">
          <div className="col-lg"></div>
          <div className="col-lg">
            <h1>Paulina Cruz</h1>
            <h2>
              <small>front-end developer based in Mexico</small>
            </h2>
            <br />
            <p className="justified-text-left text-intro paragraph-description">
              I'm passionate about technology, problem-solving, and continuous
              growth. I enjoy building projects that challenge me, turn ideas
              into practical solutions, and give a superb customer care.
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
          <div className="row">
            <div className="col">
              <h3>Technical Skills</h3>
            </div>
          </div>
          <ul>
            <li className="mb-1 list">
              HTML • CSS • JavaScript • React • Bootstrap
            </li>
            <li className="mb-1 list">
              APIs • Git • SEO • Responsive Design • Hosting
            </li>
            <li className="mb-1 list">
              GitHub • VS Code • Netlify • Figma • AI • Copilot
            </li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row">
            <div className="col">
              <h3>Skills</h3>
            </div>
          </div>
          <ul>
            <li className="mb-1 list">Assertive communication</li>
            <li className="mb-1 list">Problem Solving & Decision Making</li>
            <li className="mb-1 list">Leadership & Team Collaboration</li>
            <li className="mb-1 list">Detail-oriented & Adaptability</li>
            <li className="mb-1 list">Critical Thinking & Multitasking</li>
            <li className="mb-1 list">Account Management & Sales</li>
            <li className="mb-1 list">Process Improvement & Optimization</li>
            <li className="mb-1 list">Technical Support & Troubleshooting</li>
            <li className="mb-1 list">Fast Learning & Under pressure</li>
            <li className="mb-1 list">Disciplined & Organized</li>
            <li className="mb-1 list">Face paced work environment</li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row">
            <div className="col">
              <h3>Digital Tools & Platforms</h3>
            </div>
          </div>
          <ul>
            <li className="my-1">
              Productivity Suites
              <ul className="software-tools">
                <li className="my-1">
                  <small>
                    Google Workspace/G Suite: Gmail, Drive, Docs, Sheets,
                    Slides, Forms, Meet.
                  </small>
                </li>
                <li className="my-1">
                  <small>
                    Microsoft 365: Word, Excel, PowerPoint, Outlook, Teams,
                    OneDrive, OneNote, Copilot, Clipchamp.
                  </small>
                </li>
                <li className="my-1">
                  <small>Apple iWork: Pages, Numbers, Keynote, iCloud.</small>
                </li>
              </ul>
            </li>

            <li className="my-1">
              Operating Systems
              <ul className="software-tools">
                <li className="my-1">
                  <small>Windows • MacOS • Android • iOS</small>
                </li>
              </ul>
            </li>

            <li className="my-1">
              Communication
              <ul className="software-tools">
                <li className="my-1">
                  <small>Zoom • Slack • Scrib • OpenPhone • Loom</small>
                </li>
              </ul>
            </li>

            <li className="my-1">
              Business & Advertising
              <ul className="software-tools">
                <li className="my-1">
                  <small>
                    WhatsApp Business • Meta Business Suite • FB Marketplace •
                    Google Maps • ML
                  </small>
                </li>
              </ul>
            </li>

            <li className="my-1">
              Design
              <ul className="software-tools">
                <li className="my-1">
                  <small>Paint 3D • Canva • Figma • CapCut</small>
                </li>
              </ul>
            </li>
            <li className="my-1">
              CRM & Operations
              <ul className="software-tools">
                <li className="my-1">
                  <small>
                    SuiteCRM • GoHighLevel • Airtable • Freshdesk • Breezeway
                  </small>
                </li>
              </ul>
            </li>
            <li className="my-1">
              Productivity tools
              <ul className="software-tools">
                <li className="my-1">
                  <small>Calendly • Notion • Dropbox • Adobe Acrobat</small>
                </li>
              </ul>
            </li>
            <li className="my-1">
              Vacation Rental Platforms
              <ul className="software-tools">
                <li className="my-1">
                  <small>
                    Airbnb • VRBO • Booking • Hospitable • RedAwning • Turno •
                    RemoteLock
                  </small>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row">
            <div className="col">
              <h3>Languages</h3>
            </div>
          </div>
          <ul>
            <li className="my-1">Spanish - Native</li>
            <li className="mb-1">English - C2 Fluent</li>
            <li className="mb-1">Portuguese - Intermediate-Advanced</li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row">
            <div className="col">
              <h3>Work Experience</h3>
            </div>
          </div>
          <ul>
            <li className="my-1">
              2023–2025 Customer Support Specialist at RedAwning
              <ul className="software-tools">
                <li className="my-1">
                  <small>
                    Provided support to guests and property owners, resolved
                    booking, billing, and technical issues, <br />
                    managed CRM systems, and maintained customer records.
                  </small>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              2022 Co-owner, Ligeirinha Tourism
              <ul className="software-tools">
                <li className="my-1">
                  <small>
                    Organized tours, managed bookings, handled customer
                    relations, and operated a tourism business.
                  </small>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              2021–Present Owner, Bazar Mami Mirna
              <ul className="software-tools">
                <li className="my-1">
                  <small>
                    Managing a second-hand store, inventory, sales, marketing,
                    and customer service.
                  </small>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              2021 English & Spanish Teacher
              <ul className="software-tools">
                <li className="my-1">
                  <small>Taught languages online to Brazilian students.</small>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              2016 Customer Service Agent, WestJet Airlines
              <ul className="software-tools">
                <li className="my-1">
                  <small>
                    Assisted travelers, handled flight changes, baggage issues,
                    and airport operations.
                  </small>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row">
            <div className="col">
              <h3>Certifications</h3>
            </div>
          </div>
          <ul>
            <li className="mb-1 list">
              Junior Front-End Development graduate from&nbsp;
              <span className="shecodes">
                <a
                  href="https://www.shecodes.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SheCodes
                </a>
              </span>
              <br />
              <img
                className="img-fluid ms-2 p-1 shadow rounded"
                src="/images/shecodes-certificate.png"
                alt="Paulina's SheCodes certificate"
                width="400"
              />
            </li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row">
            <div className="col">
              <h3>Academic Background</h3>
            </div>
          </div>
          <ul>
            <li className="my-1">
              Unfinished career (2.5 years): Bachelor’s degree in Cinematography
              Studies.
              <br />
              Universidad Autónoma del Estado de México (UAEMEX), School of
              performing arts (EAE). <br />
              From 2017 – to 2019
            </li>
            <li className="mb-1">
              Unfinished career (1.5 years): Industrial & Logistics Engineering.
              <br />
              Universidad Autónoma del Estado de Yucatán (UADY), Faculty of
              Chemical Engineering (FIQ). <br />
              From 2014 – to 2015
            </li>
            <li className="mb-1">High-school diploma.</li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row">
            <div className="col">
              <h3>Personality Traits</h3>
            </div>
          </div>
          <ul>
            <li className="mb-1 list">Resourceful & Reliable</li>
            <li className="mb-1 list">Decisive & Responsible</li>
            <li className="mb-1 list">Empathetic & Compassionate</li>
            <li className="mb-1 list">Honest & Loyal</li>
            <li className="mb-1 list">Practical & Rational</li>
            <li className="mb-1 list">Patient & Persevering</li>
            <li className="mb-1 list">Open-Minded & Curious</li>
            <li className="mb-1 list">Motivated & Ambitious</li>
            <li className="mb-1 list">Emotional Intelligence</li>
            <li className="mb-1 list">Helpful & Friendly</li>
            <li className="mb-1 list">Respectful & Tolerant</li>
            <li className="mb-1 list">
              Personality type&nbsp;
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
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row">
            <div className="col">
              <h3>A little about me</h3>
            </div>
          </div>
          <ul>
            <li className="mb-1 list">32 years old / Mexican-Cuban</li>
            <li className="mb-1 list">
              I'm part of the{" "}
              <a
                href="#"
                id="lgbtDef"
                onClick={(event) =>
                  showDefinition(
                    event,
                    "LGBTQIA+ is an acronym that stands for lesbian, gay, bisexual, transgender, queer, intersex, and asexual. The + represents other identities that are not included in the acronym.",
                  )
                }
              >
                LGBTQIA+
              </a>{" "}
              &&nbsp;
              <a
                href="#"
                id="polyDef"
                onClick={(event) =>
                  showDefinition(
                    event,
                    "Literally means: many loves. People who desire or have multiple ongoing intimate relationships, whether sexual or romantic, with the knowledge and consent of everyone involved. Polyamorists want to have deeper connections with multiple people, through love, affection, sex and communication.",
                  )
                }
              >
                polyamorous
              </a>{" "}
              community
            </li>
            <li className="mb-1 list">
              I'm a{" "}
              <a
                href="#"
                id="feministDef"
                onClick={(event) =>
                  showDefinition(
                    event,
                    "Any person who believes in the social, political, and economic equality of all genders, regardless of race, ethnicity, socioeconomic class, religion, ability, and sexual orientation.",
                  )
                }
              >
                feminist
              </a>
              , anti-racist, animalist and activist
            </li>
            <li className="mb-1 list">
              Hobbies: sports, music, cinema, books, art, board & video games
            </li>
            <li className="mb-1 list">
              Former national-level table tennis athlete
            </li>
            <li className="mb-1 list">
              My family and close relationships are the most important for me
            </li>
          </ul>
        </div>

        <div className="container about-lists">
          <div className="row">
            <div className="col">
              <h3>
                <span className="shecodes">
                  <a
                    href="https://www.linkedin.com/in/paulinamarincruz/details/recommendations/?detailScreenTabIndex=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here for LinkedIn Recommendations
                  </a>
                </span>
              </h3>
            </div>
          </div>

          <ul>
            <li className="mb-1 list">
              Katy's LinkedIn recommendation
              <br />
              <img
                className="img-fluid d-block mx-auto p-1 shadow rounded"
                src="/images/katy-recommendation.png"
                alt="Katy's LinkedIn recommendation to Paulina"
                width="400"
              />
            </li>
            <li className="mb-1 list">
              Zoha's LinkedIn recommendation
              <br />
              <img
                className="img-fluid d-block mx-auto p-1 shadow rounded"
                src="/images/zoha-recommendation.png"
                alt="Zoha's LinkedIn recommendation to Paulina"
                width="400"
              />
            </li>
            <li className="mb-1 list">
              Matt's LinkedIn recommendation
              <br />
              <img
                className="img-fluid d-block mx-auto p-1 shadow rounded"
                src="/images/matt-recommendation.png"
                alt="Matt's LinkedIn recommendation to Paulina"
                width="400"
              />
            </li>
            <li className="mb-1 list">
              Adam's LinkedIn recommendation
              <br />
              <img
                className="img-fluid d-block mx-auto p-1 shadow rounded"
                src="/images/adam-recommendation.png"
                alt="Adam's LinkedIn recommendation to Paulina"
                width="400"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="bottom-buttons">
          <a href="projects.html" className="section-btn shadow rounded">
            {"<Projects />"}
          </a>

          <a href="contact.html" className="section-btn shadow rounded">
            {"<Contact />"}
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

        <p className="made-by-text text-center mb-5">
          This project was developed using React by
          <a
            href="https://paucruz.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Paulina Cruz,
          </a>{" "}
          <br className="d-block d-md-none" />
          it's open-sourced on{" "}
          <a
            href="https://github.com/paucruz5/paulinacruz-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github{" "}
          </a>
          and hosted on Netlify
        </p>
      </footer>
    </div>
  );
}
