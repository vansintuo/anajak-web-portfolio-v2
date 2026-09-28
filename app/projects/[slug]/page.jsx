import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import { PROJECTS, getProject } from "../../../lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  return { title: project ? `${project.title} — Terravia` : "Project — Terravia" };
}

export default function ProjectDetailPage({ params }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <>
      <div className="pd-hero">
        <div className="pd-crumb">
          <Link href="/projects">Projects</Link> / {project.title}
        </div>
        <span className="eyebrow-tag">
          {project.type} · {project.year}
        </span>
        <h1 style={{ fontSize: "clamp(2rem,3.4vw,2.7rem)", fontWeight: 700 }}>{project.title}</h1>
        <p style={{ color: "#B7BBBF", maxWidth: 480, marginTop: 10 }}>{project.location}</p>
      </div>

      <div className="pd-wrap">
        <div className="pd-visual pd-visual-img">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="pd-info">
          <h1>Project Overview</h1>
          <p className="pd-desc">{project.summary}</p>

          <div className="pd-scope">
            <h3>Scope of Work</h3>
            <ul>
              {project.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="pd-specs">
            {Object.entries(project.specs).map(([label, value]) => (
              <div className="pd-spec" key={label}>
                <h4>{label}</h4>
                <p>{value}</p>
              </div>
            ))}
          </div>

          <div className="pd-ctas">
            <Link className="btn btn-primary" href="/contact">
              Request Quote
            </Link>
            <Link className="btn btn-secondary" href="/projects">
              All Projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
