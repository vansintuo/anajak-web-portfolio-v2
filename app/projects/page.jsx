import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { PageHeroImage } from "../../components/RoadGraphics";
import { PROJECTS } from "../../lib/projects";

export const metadata = {
  title: "Projects — ANAJAK",
  description:
    "Road construction, resurfacing and recycling infrastructure projects delivered by ANAJAK across Cambodia and Southeast Asia.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="page-hero">
        <PageHeroImage src="/photos/road-roller.png" alt="Vibratory roller compacting a road surface" />
        <span className="eyebrow-tag text-white" style={{color:"white"}}>Project</span>
        <p style={{color:"white"}}>Roads, plants and infrastructure delivered end-to-end with our own equipment and engineering teams.</p>
      </div>

      <div className="projects-head">
        <div className="section-head">
          <span className="section-index">01 — Portfolio</span>
          <h2>Selected Road Building Work</h2>
          <p>
            Every project below was delivered with our own crews, machinery and quality control — from
            material processing through to the finished surface.
          </p>
        </div>
      </div>

      <div className="projects">
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
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
