export const PROJECTS = [
  {
    slug: "national-route-resurfacing",
    title: "National Route Resurfacing",
    type: "Rubber Modified Highway",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    image: "/photos/rubber-road-hero.png",
    summary:
      "Full-depth resurfacing of a national highway corridor using rubber-modified asphalt, cutting cracking and extending service life under heavy truck traffic.",
    scope: [
      "Milling and removal of 120mm of worn asphalt surface",
      "Rubber-modified binder production at our own batch plant",
      "Paver and roller fleet deployed across four work zones",
    ],
    specs: {
      "Project Length": "18.5 km",
      "Lane Width": "2 x 3.5 m",
      "Surface Course": "SMA with 8% crumb rubber",
      "Duration": "9 months",
      "Client": "Ministry of Public Works",
    },
  },
  {
    slug: "special-economic-zone-access",
    title: "Special Economic Zone Access Road",
    type: "Industrial Access Road",
    year: "2023",
    location: "Kandal Province, Cambodia",
    image: "/photos/asphalt-paver.png",
    summary:
      "New dual-access road network built for freight movement into an industrial zone, designed for heavy truck loads on a constrained schedule.",
    scope:[
      "Site clearing, subgrade preparation and compaction",
      "Sub-base and base course build-up in compacted layers",
      "Asphalt surfacing with heavy-duty wearing course",
    ],
    specs: {
      "Project Length": "6.2 km",
      "Carriageway": "2 x 7.0 m",
      "Design Traffic": "15,000 ESAL/day",
      "Duration": "7 months",
      "Client": "Private Developer",
    },
  },
  {
    slug: "city-ring-road-upgrade",
    title: "City Ring Road Upgrade",
    type: "Urban Road Improvement",
    year: "2023",
    location: "Southeast Asia",
    image: "/photos/road-roller.png",
    summary:
      "Widening and resurfacing of a busy urban ring road while keeping traffic moving, with night-shift paving to reduce disruption to the city.",
    scope: [
      "Lane widening and kerb realignment",
      "Utility duct and drainage relocation",
      "Night-shift paving and vibration compaction",
    ],
    specs: {
      "Project Length": "9.4 km",
      "Widening": "+1.5 m per direction",
      "Surface Course": "Rubber-modified dense asphalt",
      "Duration": "11 months",
      "Client": "Municipal Authority",
    },
  },
  {
    slug: "central-asphalt-mixing-facility",
    title: "Central Asphalt Mixing Facility",
    type: "Material Production Plant",
    year: "2024",
    location: "Phnom Penh, Cambodia",
    image: "/photos/asphalt-mixing-plant.png",
    summary:
      "Commissioned a batch and continuous mixing plant producing rubber-modified hot-mix asphalt to feed every project on our regional schedule.",
    scope: [
      "Site civil works, hardstanding and drainage",
      "Plant installation, calibration and load testing",
      "Quality control lab and mix design validation",
    ],
    specs: {
      "Capacity": "120 – 320 t/h",
      "Mixing Type": "Batch / continuous",
      "Output Grade": "0.5 – 4 mm crumb rubber",
      "Duration": "5 months",
      "Client": "In-house asset",
    },
  },
  {
    slug: "tire-recycling-processing-line",
    title: "Tire Recycling & Processing Line",
    type: "Recycling Infrastructure",
    year: "2023",
    location: "Phnom Penh, Cambodia",
    image: "/photos/rubber-recycling-machine.png",
    summary:
      "Installed a rubber processing line that turns waste tire rubber into uniform crumb rubber, the feedstock behind our rubber-modified asphalt.",
    scope: [
      "Collection and pre-processing of waste tires",
      "Shredding and refining to graded crumb rubber",
      "Stocking and batching systems for the mixing plant",
    ],
    specs: {
      "Throughput": "2 - 5 t/h",
      "Output Grade": "0.5 - 4 mm crumb rubber",
      "Feedstock": "Waste tire rubber",
      "Duration": "4 months",
      "Client": "In-house asset",
    },
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
