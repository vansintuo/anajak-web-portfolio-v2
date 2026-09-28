import Image from "next/image";

export function PageHeroImage({ src, alt = "" }) {
  return (
    <div className="page-hero-graphic">
      <Image src={src} alt={alt} fill priority sizes="44vw" />
    </div>
  );
}

export function MapImage({ src, alt = "" }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 820px) 92vw, 360px" />;
}