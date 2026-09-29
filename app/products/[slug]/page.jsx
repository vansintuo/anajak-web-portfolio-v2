import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import { PRODUCTS, getProduct } from "../../../lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  return { title: product ? `${product.name} — ANAJAK` : "Product — ANAJAK" };
}

export default function ProductDetailPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) return notFound();

  return (
    <>
      <div className="pd-hero">
        <div className="pd-crumb">
          <Link href="/products">Products</Link> / {product.name}
        </div>
        <span className="eyebrow-tag" style={{color:"white"}}>Road Construction Machinery</span>
        <h1 style={{ fontSize: "clamp(2rem,3.4vw,2.7rem)", fontWeight: 700 }}>{product.name}</h1>
        <p style={{ color: "#B7BBBF", maxWidth: 480, marginTop: 10 }}>{product.desc}</p>
      </div>

      <div className="pd-wrap">
        <div className="pd-visual pd-visual-img">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="pd-info">
          <h1>Technical Overview</h1>
          <p className="pd-desc">{product.overview}</p>
          <div className="pd-specs">
            {Object.entries(product.specs).map(([label, value]) => (
              <div className="pd-spec" key={label}>
                <h4>{label}</h4>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <div className="pd-ctas">
            <Link className="btn btn-primary" href="/contact" style={{color:"white"}}>
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
