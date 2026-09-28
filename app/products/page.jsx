import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { PageHeroImage } from "../../components/RoadGraphics";
import { PRODUCTS } from "../../lib/products";

export const metadata = {
  title: "Products & Equipment — ANAJAK",
};

export default function ProductsPage() {
  return (
    <>
      <div className="page-hero">
        <PageHeroImage src="/photos/asphalt-paver.png" alt="Asphalt paver on a road construction site" />
        <span className="eyebrow-tag text-white" style={{color:"white"}}>Our Product</span>
        <p className="mt-32">Technology and machinery engineered for modern road construction.</p>
      </div>

      <div className="prod-grid">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70}>
            <div className="prod-card">
              <div className="prod-img">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 820px) 92vw, (max-width: 1024px) 46vw, 31vw"
                />
              </div>
              <div className="prod-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="prod-spec">{p.spec}</div>
                <Link className="prod-link" href={`/products/${p.slug}`}>
                  View Details →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Footer />
    </>
  );
}
