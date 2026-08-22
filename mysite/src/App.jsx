import { useEffect, useState } from "react";
import "./App.css";
import maryana from "./assets/maryana.png";
import imagestore from "./assets/imagestore.jpg"
import blog from "./assets/blog.jpg"



const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);


const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
    />
  </svg>
);


const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);





const skills = [
  ["HTML5", "◇"],
  ["CSS3", "◇"],
  ["JavaScript", "JS"],
  ["React", "⚛"],
  ["Tailwind CSS", "≈"],
  ["Node.js", "N"],
  ["Express", "E"],
  ["MySQL", "◆"],
  ["Git", "G"],
  ["Figma", "F"],
  ["VS Code", "⌘"],
];


const projects = [
  {
    title: "Clothing Store",
    type: "E-commerce Website",
    image:imagestore,

    tags: ["React", "JavaScript", "CSS", "Vite"],
    description:
      "Responsive clothing store with catalog, authentication and reusable UI components.",
    link: "https://github.com/qmeoliw?tab=repositories",
  },

  {
    title: "Book Club",
    type: "Full-Stack Web App",
    image:blog,
    tags: ["React", "Express", "MySQL", "Node.js"],
    description:
      "Full-stack book club application with REST API and database integration.",
    link: "https://github.com/qmeoliw?tab=repositories",
  },

  {
    title: "Personal Server",
    type: "Backend Project",
    image:null,
    tags: ["Node.js", "Express", "JavaScript"],
    description:
      "Personal backend server with API endpoints and client-server communication.",
    link: "https://github.com/qmeoliw?tab=repositories",
  },
];



function App() {
  const [dark, setDark] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle");



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);




  const handleMouseMove = (event) => {
    setMouse({
      x: event.clientX,
      y: event.clientY,
    });
  };




  const handleContactSubmit = async (event) => {
    event.preventDefault();

    if (formStatus === "sending") {
      return;
    }

    setFormStatus("sending");

    try {
      const response = await fetch(
        "https://formspree.io/f/mdenjpqr",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("Contact form error:", error);

      setFormStatus("error");
    }
  };




  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };




  return (
    <div
      className={dark ? "app dark" : "app light"}
      onMouseMove={handleMouseMove}
    >

  

      <div
        className="cursor-glow"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />




      <header className="navbar">

        <a
          href="#top"
          className="logo"
        >
          MARYANA<span></span>
        </a>


        <nav
          className={
            menuOpen
              ? "nav-links open"
              : "nav-links"
          }
        >

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </nav>


        <div className="nav-actions">

          <button
            type="button"
            className="theme-btn"
            onClick={() => setDark((previous) => !previous)}
            aria-label="Toggle theme"
          >
            {dark ? "☼" : "☾"}
          </button>


          <a
            className="cv-btn"
            href="/Maryana_Tikhomirova_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>


          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>

      </header>


      <main id="top">




        <section className="hero section">

          <div className="hero-copy reveal">

            <div className="eyebrow">
              FRONTEND DEVELOPER
            </div>


            <h1>
              Hi, I'm <span>Maryana</span>
            </h1>


            <h2>
              I build modern
              <br />
              responsive web apps.
            </h2>


            <p>
              IT student focused on frontend development
              and web design. I create clean, responsive
              interfaces and full-stack learning projects.
            </p>


            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-btn"
              >
                View Projects
                <ArrowIcon />
              </a>


              <a
                href="#contact"
                className="secondary-btn"
              >
                Contact Me
              </a>

            </div>


            <div className="socials">

              <a
                href="https://github.com/qmeoliw"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>


              <a
                href="https://t.me/pipwekism"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                <TelegramIcon />
              </a>

            </div>

          </div>


  

          <div className="hero-photo-wrap reveal">

            <div className="photo-glow" />


            <div className="photo-frame">

              <img
                src={maryana}
                alt="Maryana"
              />


              <div className="status-card">

                <span className="status-dot" />

                <span>
                  Available for freelance
                </span>

              </div>

            </div>


            <div className="floating-dot dot-one" />

            <div className="floating-dot dot-two" />

          </div>

        </section>




        <section
          id="about"
          className="section reveal"
        >

          <div className="section-label">
            ● ABOUT ME
          </div>


          <h2 className="section-title">
            Who I am
          </h2>


          <div className="about-grid">

            <p className="about-text">
              I'm an IT student and self-taught developer.
              I love turning ideas into real products.
              Currently improving my skills in React,
              Node.js and modern web technologies.
            </p>


            <div className="info-cards">

              <article className="info-card">

                <span className="card-icon">
                  ⌂
                </span>

                <h3>
                  Education
                </h3>

                <p>
                  College of Entrepreneurship №11
                </p>

              </article>


              <article className="info-card">

                <span className="card-icon">
                  &lt;/&gt;
                </span>

                <h3>
                  Experience
                </h3>

                <p>
                  2+ years of learning and building projects
                </p>

              </article>


              <article className="info-card">

                <span className="card-icon">
                  ✦
                </span>

                <h3>
                  Focus
                </h3>

                <p>
                  Frontend Development & Web Design
                </p>

              </article>


              <article className="info-card">

                <span className="card-icon">
                  ◎
                </span>

                <h3>
                  Location
                </h3>

                <p>
                  Remote
                </p>

              </article>

            </div>

          </div>

        </section>




        <section
          id="skills"
          className="section reveal"
        >

          <div className="section-label">
            ● MY SKILLS
          </div>


          <h2 className="section-title">
            Technologies I work with
          </h2>


          <div className="skills-grid">

            {skills.map(([name, icon]) => (

              <div
                className="skill-card"
                key={name}
              >

                <span className="skill-icon">
                  {icon}
                </span>

                <span>
                  {name}
                </span>

              </div>

            ))}

          </div>

        </section>




        <section
          id="projects"
          className="section reveal"
        >

          <div className="projects-heading">

            <div>

              <div className="section-label">
                ● PROJECTS
              </div>

              <h2 className="section-title">
                Things I've built
              </h2>

            </div>


            <span className="project-count">
              03 PROJECTS
            </span>

          </div>


          <div className="projects-grid">

            {projects.map((project, index) => (

              <article
                className="project-card"
                key={project.title}
              >

<div className="project-image">

  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
    />
  ) : (
    <div className="project-placeholder">
      <span className="placeholder-number">
        0{index + 1}
      </span>

      <div className="placeholder-content">
        <span className="placeholder-code">
          {"</>"}
        </span>

        {/* <span>
          Backend Project
        </span> */}

        <small>
          Screenshot coming soon
        </small>
      </div>
    </div>
  )}

  <div className="project-overlay">

    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      View project
      <ArrowIcon />
    </a>

  </div>

</div>


                <div className="project-content">

                  <span className="project-type">
                    {project.type}
                  </span>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <div className="tags">

                    {project.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>


                  <a
                    className="text-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <ArrowIcon />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>



        <section
          id="contact"
          className="section contact-section reveal"
        >

          <div className="contact-copy">

            <div className="section-label">
              ● CONTACT ME
            </div>


            <h2 className="section-title">
              Let's work together!
            </h2>


            <p>
              I'm open to internships, freelance projects
              and new opportunities.
            </p>


            <div className="contact-links">

              <a href="mailto:gmeoliw@yandex.ru">

                ✉

                <span>
                  gmeoliw@yandex.ru
                </span>

              </a>


              <a
                href="https://t.me/pipwekism"
                target="_blank"
                rel="noreferrer"
              >

                ➤

                <span>
                  @pipwekism
                </span>

              </a>


              <a
                href="https://github.com/qmeoliw"
                target="_blank"
                rel="noreferrer"
              >

                ◉

                <span>
                  github.com/qmeoliw
                </span>

              </a>

            </div>

          </div>


      

          <div className="contact-form-wrapper">


    

            {formStatus === "success" && (

              <div className="success-message">

                <div className="success-icon">
                  ✓
                </div>


                <h3>
                  Message sent!
                </h3>


                <p>
                  Thanks for reaching out.
                  <br />
                  I'll get back to you as soon as possible.
                </p>


                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => setFormStatus("idle")}
                >
                  Send another message
                </button>

              </div>

            )}


  

            {formStatus !== "success" && (

              <form
                className="contact-form"
                onSubmit={handleContactSubmit}
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "sending"}
                />


                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "sending"}
                />


                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "sending"}
                />



                {formStatus === "error" && (

                  <div className="form-error">
                    Something went wrong.
                    Please try again.
                  </div>

                )}




                <button
                  className="primary-btn"
                  type="submit"
                  disabled={formStatus === "sending"}
                >

                  {formStatus === "sending" ? (

                    <>
                      <span className="loading-spinner" />
                      Sending...
                    </>

                  ) : (

                    <>
                      Send Message
                      <ArrowIcon />
                    </>

                  )}

                </button>

              </form>

            )}

          </div>

        </section>

      </main>




      <footer>

        <span>
          © 2026 Maryana Tikhomirova
        </span>

        <span>
          Built with React ✦
        </span>

      </footer>

    </div>
  );
}


export default App;