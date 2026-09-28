import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { PageHeroImage } from "../../components/RoadGraphics";

export const metadata = {
  title: "Road Construction Solutions — ANAJAK",
};

const SOLUTIONS = [
  {
    title: "Rubber Road Technology",
    text: "Our core technology blends recycled rubber into asphalt and surface layers, producing roads that resist cracking, absorb impact, and last longer under heavy load.",
  },
  {
    title: "Road Construction",
    text: "Full-cycle delivery from site preparation and grading through paving, compaction, and finishing, managed by our own engineering and equipment teams.",
  },
  {
    title: "Rubber Recycling",
    text: "We collect and process waste rubber into road-grade material, diverting it from landfill and reducing the environmental footprint of every project.",
  },
  {
    title: "Asphalt Solutions",
    text: "Modern asphalt mixes and rubber-modified formulations engineered for climate, traffic load, and site conditions.",
  },
  {
    title: "Infrastructure Development",
    text: "Large-scale roads, industrial access routes, and transportation infrastructure built to withstand decades of use.",
  },
  {
    title: "Road Maintenance",
    text: "Resurfacing, rehabilitation, and long-term maintenance programs that extend the life of existing road networks.",
  },
];

const TIMELINE = [
  "Planning",
  "Material Processing",
  "Site Preparation",
  "Paving",
  "Compaction",
  "Quality Testing",
  "Completed Road",
];

export default function SolutionsPage() {
  return (
    <>
      <div className="page-hero">
        <PageHeroImage src="/photos/asphalt-mixing-plant.png" alt="Asphalt mixing plant producing rubber modified mix" />
        <span className="eyebrow-tag"  style={{color:"white"}}>Full-Service Delivery</span>
        <h1>Road Construction Solutions</h1>
        <p>Complete, end-to-end road building — from material science to finished infrastructure.</p>
      </div>

      <div className="sol-list">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 70}>
            <div className="sol-item">
              <div className="sol-num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="timeline">
        <div className="section-head">
          <h2>How a Road Gets Built</h2>
        </div>
        <div className="tl-track">
          {TIMELINE.map((step, i) => (
            <span key={step} style={{ display: "contents" }}>
              <span className="tl-step">{step}</span>
              {i < TIMELINE.length - 1 && <span className="tl-sep">→</span>}
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
