import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../lib/projects";

const FEATURED = PROJECTS.slice(0, 3);

const PROCESS = ["Waste Rubber", "Processing", "Rubber Material", "Road Construction", "Durable Infrastructure"];

const STATS = [
  { num: "10+", label: "Years of Experience" },
  { num: "50+", label: "Road Projects" },
  { num: "100K+", label: "Tons of Materials Processed" },
  { num: "20+", label: "Engineering Machines" },
];

const HERO_SPECS = [
  "Rubber Modified Asphalt",
  "SMA · 8% Crumb Rubber",
  "15,000 ESAL / Day",
  "Phnom Penh, Cambodia",
];

const CAPABILITY = [
  { label: "Core Technology", value: "Rubber Modified Asphalt" },
  { label: "In-house Materials", value: "Batch Plant · 320 t/h" },
  { label: "Rubber Processing", value: "2 – 5 t/h Crumb Rubber" },
  { label: "Fleet", value: "Pavers · Rollers · Mills" },
  { label: "Delivery", value: "Planning to Finished Surface" },
];

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="hero-media">
          <Image
            src="/photos/rubber-road-hero.png"
            alt="Rubber modified asphalt road surface"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-scrim"></div>
        <div className="lane"></div>
        <div className="hero-inner">
          <span className="eyebrow-tag">Rubber Road Technology / Infrastructure</span>
          <h1>Engineering the Roads of Tomorrow.</h1>
          <p>Advanced rubber road technology designed for stronger, more durable and sustainable infrastructure.</p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" href="/solutions">
              Explore Solutions →
            </Link>
            <Link className="btn btn-secondary" href="/projects">
              View Our Projects
            </Link>
          </div>
        </div>
        <div className="hero-specs">
          {HERO_SPECS.map((s) => (
            <span className="hero-spec" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="intro">
        <div className="intro-grid">
          <Reveal>
            <span className="section-index">01 — Company</span>
            <h2>We Build the Road, and Everything That Goes Into It.</h2>
            <p>
              ANAJAK is a road construction and infrastructure engineering company working across Cambodia
              and Southeast Asia. We control the full chain — collecting waste rubber, processing it into
              road-grade material, manufacturing rubber-modified asphalt at our own plant, then laying it
              with our own crews and machinery.
            </p>
            <p>
              That vertical control is what lets us guarantee performance: a single accountable team from
              material science through to the finished surface, tested against the traffic load and climate
              of each site.
            </p>
            <Link className="btn btn-secondary" href="/contact">
              Talk to an Engineer →
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="intro-figure">
              <Image
                src="/photos/asphalt-paver.png"
                alt="Asphalt paver laying a rubber modified surface course"
                fill
                sizes="(max-width: 820px) 92vw, 40vw"
              />
            </div>
            <div className="spec-table">
              {CAPABILITY.map((row) => (
                <div className="spec-row" key={row.label}>
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="stats">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="stat-num">
                <em>{s.num}</em>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="tech">
        <div className="section-head">
          <span className="section-index">02 — Technology</span>
          <h2>Turning Rubber Into Better Roads.</h2>
        </div>
        <Reveal>
          <div className="process">
            {PROCESS.map((step, i) => (
              <span key={step} style={{ display: "contents" }}>
                <div className="proc-step">
                  <span className="proc-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="proc-label">{step}</span>
                </div>
                {i < PROCESS.length - 1 && <span className="proc-arrow">→</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="projects" id="projects">
        <div className="section-head">
          <span className="section-index">03 — Projects</span>
          <h2>Featured Projects</h2>
        </div>
        <div className="proj-grid">
          {FEATURED.map((p, i) => (
            <Reveal key={p.slug} delay={i * 110}>
              <Link className="proj-card" href={`/projects/${p.slug}`}>
                <div className="proj-img">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 820px) 92vw, (max-width: 1024px) 46vw, 31vw"
                  />
                </div>
                <div className="proj-body">
                  <div className="proj-type">
                    {p.type} · {p.year}
                  </div>
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-meta">{p.location}</div>
                  <span className="proj-link">View Project →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
