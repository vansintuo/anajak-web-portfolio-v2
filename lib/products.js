export const PRODUCTS = [
  {
    slug: "asphalt-paver",
    name: "Asphalt Paver",
    desc: "High-precision paving with adjustable width control.",
    spec: "Working Width: 39m",
    image: "/photos/asphalt-paver.png",
    overview:
      "The paver distributes and pre-compacts rubber-modified asphalt mix in a single pass, with electronic screed control for a consistent surface profile across variable road widths.",
    specs: {
      "Engine Power": "129 kW",
      "Operating Weight": "18.5 t",
      "Working Width": "3.0  9.0 m",
      Capacity: "700 t / shift",
      "Fuel Type": "Diesel",
      Application: "Highways, urban roads, industrial access roads",
    },
  },
  {
    slug: "road-roller",
    name: "Road Roller",
    desc: "Vibratory compaction for consistent surface density.",
    spec: "Operating Weight: 10–14t",
    image: "/photos/road-roller.png",
    overview:
      "A dual-drum vibratory roller that delivers even compaction density across freshly laid rubber-modified asphalt, reducing voids and extending pavement life.",
    specs: {
      "Engine Power": "97 kW",
      "Operating Weight": "10 – 14 t",
      "Working Width": "1.7 – 2.1 m",
      Capacity: "—",
      "Fuel Type": "Diesel",
      Application: "Asphalt compaction, base layer compaction",
    },
  },
  {
    slug: "milling-machine",
    name: "Milling Machine",
    desc: "Precision removal of worn asphalt for resurfacing.",
    spec: "Milling Width: 1–2m",
    image: "/photos/rubber-road-hero.png",
    overview:
      "Removes deteriorated asphalt to a controlled depth ahead of resurfacing, preparing an even substrate for new rubber-modified layers.",
    specs: {
      "Engine Power": "175 kW",
      "Operating Weight": "22 t",
      "Milling Width": "1.0 – 2.0 m",
      "Milling Depth": "0 – 330 mm",
      "Fuel Type": "Diesel",
      Application: "Resurfacing, road rehabilitation",
    },
  },
  {
    slug: "asphalt-mixing-plant",
    name: "Asphalt Mixing Plant",
    desc: "Batch and continuous mixing for rubber-modified asphalt.",
    spec: "Capacity: 120–320 t/h",
    image: "/photos/asphalt-mixing-plant.png",
    overview:
      "A stationary batch plant engineered to blend processed rubber granulate into hot-mix asphalt at controlled ratios and temperatures for consistent output.",
    specs: {
      "Engine Power": "—",
      "Operating Weight": "Site-installed",
      Capacity: "120 – 320 t/h",
      "Mixing Type": "Batch / continuous",
      "Fuel Type": "Diesel / natural gas burner",
      Application: "Central mix production for rubber-modified asphalt",
    },
  },
  {
    slug: "rubber-processing-machine",
    name: "Rubber Processing Machine",
    desc: "Converts waste rubber into road-grade material.",
    spec: "Capacity: 2–5 t/h",
    image: "/photos/rubber-recycling-machine.png",
    overview:
      "Shreds and refines waste tire rubber into uniform crumb rubber, the core feedstock for our rubber-modified asphalt and binder products.",
    specs: {
      "Engine Power": "75 kW",
      "Operating Weight": "6.2 t",
      Capacity: "2 – 5 t/h",
      "Output Grade": "0.5 – 4 mm crumb rubber",
      "Fuel Type": "Electric",
      Application: "Rubber recycling, feedstock preparation",
    },
  },
  {
    slug: "road-compactor",
    name: "Road Compactor",
    desc: "Final-pass compaction for a durable finished surface.",
    spec: "Operating Weight: 8–12t",
    image: "/photos/road-roller.png",
    overview:
      "Delivers the final compaction pass, locking in surface density and texture for a durable, long-life rubber-modified road surface.",
    specs: {
      "Engine Power": "85 kW",
      "Operating Weight": "8 – 12 t",
      "Working Width": "2.1 m",
      Capacity: "—",
      "Fuel Type": "Diesel",
      Application: "Final compaction pass, surface finishing",
    },
  },
  {
    slug: "spraying-machine",
    name: "Spraying Machine",
    desc: "Even application of tack coat and rubberized binder.",
    spec: "Tank Capacity: 4,000–8,000L",
    image: "/photos/rubber-road-hero.png",
    overview:
      "Applies tack coat and rubberized binder evenly ahead of paving, improving bond strength between the new and existing pavement layers.",
    specs: {
      "Engine Power": "45 kW",
      "Operating Weight": "9 t (loaded)",
      "Tank Capacity": "4,000 – 8,000 L",
      "Spray Width": "1.5 – 6 m",
      "Fuel Type": "Diesel",
      Application: "Tack coat, rubberized binder application",
    },
  },
  {
    slug: "crusher",
    name: "Crusher",
    desc: "Breaks down raw material feedstock for processing.",
    spec: "Engine Power: 130–260kW",
    image: "/photos/asphalt-mixing-plant.png",
    overview:
      "Reduces aggregate and reclaimed material to a consistent particle size, feeding downstream processing and mixing equipment.",
    specs: {
      "Engine Power": "130 – 260 kW",
      "Operating Weight": "24 – 38 t",
      Capacity: "150 – 400 t/h",
      "Feed Opening": "Up to 900 mm",
      "Fuel Type": "Diesel",
      Application: "Aggregate and material size reduction",
    },
  },
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
