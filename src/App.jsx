import * as React from "react";
import "./App.css";
import {ProjectCard} from "./components/ProjectCard";
import {SectionHeading} from "./components/SectionHeading";
import {
  NAV_LINKS,
  PHILOSOPHY_ITEMS,
  PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
  TIMELINE_ITEMS,
} from "./data";

function App() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* --- Navigation --- */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-content">
          <div className="logo">
            AMEY<span className="accent">.GOHIL</span>
          </div>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="hero container">
        <div className="animate-in">
          <p className="hero-subtitle">Hi, my name is Amey.</p>
          <h1>
            I build systems that bridge <br />
            <span className="accent">Logic</span> and{" "}
            <span className="accent">Empathy</span>.
          </h1>
          <p className="hero-desc">
            I am a <strong>Computer Scientist</strong> with roots in{" "}
            <strong>Mechanical Engineering</strong>. I combine rigorous systems
            engineering with human-centered design to build scalable,
            accessible, and verifiable software.
          </p>

          <div className="social-links">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="icon-link">
                <link.Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- About / Philosophy --- */}
      <section id="about" className="container">
        <SectionHeading>The Philosophy</SectionHeading>
        <div className="grid-2">
          <div className="about-text">
            <p>
              My path wasn’t linear. I started in{" "}
              <strong>Mechanical Engineering</strong> at IIT Bombay, analyzing
              physical kinematics. But I realized that the modern world’s most
              complex machines aren’t made of steel—they are made of code.
            </p>
            <p>
              Today, I operate at the intersection of{" "}
              <strong>Full-Stack Systems</strong> and{" "}
              <strong>Human-Computer Interaction</strong>. Whether I’m migrating
              a legacy codebase or designing an interface for Alzheimer’s
              patients, my goal is the same:
            </p>
            <p style={{color: "var(--text-main)", fontWeight: 600}}>
              Reduce friction. Ensure reliability. Empower the user.
            </p>
          </div>

          <div
            className="philosophy-grid grid-1"
            style={{display: "flex", flexDirection: "column", gap: "1rem"}}
          >
            {PHILOSOPHY_ITEMS.map((item) => (
              <div key={item.title} className="glass-panel philosophy-item">
                <item.Icon
                  size={28}
                  className={item.color === "accent" ? "accent" : ""}
                  style={item.color !== "accent" ? {color: item.color} : {}}
                />
                <div>
                  <h3>{item.title}</h3>
                  <p style={{fontSize: "0.9rem", marginBottom: 0}}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop: "4rem"}}>
          <h3
            style={{
              fontFamily: "Fira Code, monospace",
              color: "var(--primary)",
              fontSize: "0.85rem",
              marginBottom: "1rem",
            }}
          >
            TECHNOLOGIES
          </h3>
          <div className="tag-container">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                style={{border: "1px solid var(--border)"}}
                className="tech-tag"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- Work / Research --- */}
      <section id="work" className="container">
        <SectionHeading>Research and Experience</SectionHeading>
        <div className="grid-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* --- Journey --- */}
      <section id="journey" className="container">
        <SectionHeading>The Journey</SectionHeading>
        <div className="timeline">
          {TIMELINE_ITEMS.map((item) => (
            <div key={item.title} className="timeline-item">
              <div
                className="timeline-dot"
                style={item.dotColor ? {borderColor: item.dotColor} : {}}
              ></div>
              <div className="timeline-date">{item.year}</div>
              <h3>{item.title}</h3>
              <p style={{color: "var(--text-main)", marginBottom: "0.5rem"}}>
                {item.org}
              </p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact --- */}
      <section
        id="contact"
        className="container"
        style={{textAlign: "center", paddingBottom: "4rem"}}
      >
        <h2>What’s Next?</h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 3rem auto",
            fontSize: "1.1rem",
          }}
        >
          I am currently pursuing new research opportunities in Human-Centered
          Systems. Whether you want to discuss systems architecture, HCI
          research, or just say hi, my inbox is open.
        </p>
        <a href="mailto:amey23399@gmail.com" className="btn">
          Say Hello
        </a>

        <footer style={{marginTop: "5rem", fontSize: "0.85rem", opacity: 0.6}}>
          <p>Designed & Built by Amey Gohil.</p>
        </footer>
      </section>
    </div>
  );
}

export default App;
