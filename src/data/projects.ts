export type ProjectCategory =
  | "Dredging"
  | "Marine Construction"
  | "Port Development"
  | "Reclamation"
  | "Sea Wall / Coastal Protection";

export type Project = {
  slug: string;
  title: string;
  location: string;
  description: string;
  category: ProjectCategory;
  image: string;
  featured?: boolean;
};

/**
 * Each project's photo lives at /public/images/projects/<slug>.jpg
 * (1200 × 900, 4:3). Drop a real photo with the matching file name to
 * replace the placeholder — no code change needed.
 */
const raw: Omit<Project, "image">[] = [
  {
    slug: "chek-lap-kok-airport",
    title: "Chek Lap Kok International Airport",
    location: "Hong Kong",
    description:
      "Complex quay wall foundation works and rock fill placement supporting one of the region's largest airport developments.",
    category: "Marine Construction",
    featured: true,
  },
  {
    slug: "breakwater-port-irene",
    title: "Breakwater Construction – Port Irene",
    location: "Sta. Ana, Cagayan, Philippines",
    description:
      "Protective breakwater safeguarding the port from wave action and coastal erosion.",
    category: "Marine Construction",
  },
  {
    slug: "tsing-ma-bridge",
    title: "Tsing Ma Bridge",
    location: "Hong Kong",
    description:
      "Marine works including rock fill, precast concrete blocks, and seawall protection for a landmark suspension bridge.",
    category: "Marine Construction",
    featured: true,
  },
  {
    slug: "container-terminal-8-route-3",
    title: "Container Terminal No. 8 – Route 3",
    location: "Hong Kong",
    description:
      "Large-scale marine infrastructure involving rock fill transport and twin-lane jetty construction.",
    category: "Port Development",
    featured: true,
  },
  {
    slug: "sual-power-plant",
    title: "Sual Power Plant Project",
    location: "Sual, Pangasinan, Philippines",
    description:
      "Dredging of approach channels and jetty areas to enable reliable marine access for the power facility.",
    category: "Dredging",
  },
  {
    slug: "ppa-mict-entrance-channel",
    title: "PPA Dredging – MICT Entrance Channel",
    location: "Manila, Philippines",
    description:
      "Maintenance dredging of the entrance channel at the Manila International Container Terminal.",
    category: "Dredging",
  },
  {
    slug: "dpwh-pasig-river-dredging",
    title: "DPWH – Pasig River Dredging",
    location: "Manila, Philippines",
    description:
      "Dredging to improve navigability and flood control along the Pasig River.",
    category: "Dredging",
    featured: true,
  },
  {
    slug: "sihanoukville-port-rehabilitation",
    title: "Sihanoukville International Port Rehabilitation",
    location: "Sihanoukville, Cambodia",
    description:
      "Dredging and sediment removal to restore port capacity and vessel access.",
    category: "Port Development",
  },
  {
    slug: "sbma-subic-bay-port-development",
    title: "SBMA Subic Bay Port Development",
    location: "Subic Bay, Philippines",
    description:
      "Marine construction to support port development and expanding regional trade.",
    category: "Port Development",
  },
  {
    slug: "subic-bay-reclamation-works",
    title: "Subic Bay Reclamation Works",
    location: "Subic Bay, Philippines",
    description:
      "Land reclamation and supporting marine works expanding usable port capacity.",
    category: "Reclamation",
    featured: true,
  },
  {
    slug: "navigational-gate-rehabilitation",
    title: "Navigational Gate Rehabilitation",
    location: "Tanza, Navotas, Philippines",
    description:
      "Rehabilitation of navigational gates ensuring safe and reliable marine access.",
    category: "Marine Construction",
  },
  {
    slug: "main-berthing-pier-dredging",
    title: "Main Berthing Pier Dredging Works",
    location: "Subic Freeport Zone, Philippines",
    description:
      "Dredging to maintain safe berth depth for vessels calling at the freeport.",
    category: "Dredging",
  },
  {
    slug: "ppa-esperanza-port",
    title: "PPA Esperanza Port Project",
    location: "Masbate, Philippines",
    description:
      "Dredging and marine works enhancing port functionality and vessel throughput.",
    category: "Port Development",
  },
  {
    slug: "omnico-port-dredging",
    title: "OMNICO Port Dredging Works",
    location: "Ilocos Norte, Philippines",
    description:
      "Dredging operations maintaining port depth and navigational safety.",
    category: "Dredging",
  },
  {
    slug: "sea-wall-protection-bauan",
    title: "Sea Wall Protection Project",
    location: "Bauan, Batangas, Philippines",
    description:
      "Construction of sea walls to protect coastal areas and port facilities.",
    category: "Sea Wall / Coastal Protection",
  },
  {
    slug: "zamboanga-berth-dredging",
    title: "Port of Zamboanga Berth Dredging",
    location: "Zamboanga City, Philippines",
    description:
      "Maintenance dredging of berthing areas ensuring safe vessel operations.",
    category: "Dredging",
  },
  {
    slug: "sofitel-sea-wall-rehabilitation",
    title: "Hotel Sofitel Sea Wall Rehabilitation",
    location: "Pasay City, Philippines",
    description:
      "Rehabilitation protecting the hotel's waterfront and coastal infrastructure.",
    category: "Sea Wall / Coastal Protection",
  },
  {
    slug: "iloilo-roro-terminal-dredging",
    title: "Iloilo City RoRo Terminal Dredging",
    location: "Iloilo City, Philippines",
    description:
      "Dredging to accommodate fastcraft and roll-on/roll-off vessels.",
    category: "Dredging",
  },
  {
    slug: "batangas-port-maintenance-dredging",
    title: "Maintenance Dredging – Batangas Port",
    location: "Batangas, Philippines",
    description:
      "Maintenance dredging ensuring safe navigational depths at the port.",
    category: "Dredging",
  },
  {
    slug: "pier-16-msw-dredging",
    title: "Pier 16 / MSW Maintenance Dredging",
    location: "Manila North Harbor, Philippines",
    description:
      "Dredging at Pier 16 and MSW to maintain operational capacity.",
    category: "Dredging",
  },
  {
    slug: "manila-north-harbor-dredging",
    title: "Manila North Harbor Marine Dredging Works",
    location: "Tondo, Manila, Philippines",
    description:
      "Comprehensive marine dredging supporting harbor operations and channel access.",
    category: "Dredging",
  },
  {
    slug: "north-harbor-slipway-dredging",
    title: "North Harbor Marine Slipway Dredging",
    location: "Manila Port, Philippines",
    description:
      "Dredging at the slipway area enabling ship repair and maintenance operations.",
    category: "Dredging",
  },
  {
    slug: "sm-moa-geotechnical-investigation",
    title: "SM – Mall of Asia Geotechnical Investigation",
    location: "Manila Bay Area, Philippines",
    description:
      "Geotechnical studies supporting marine and coastal construction projects.",
    category: "Marine Construction",
  },
  {
    slug: "pohnpei-international-airport",
    title: "Improvement of Pohnpei International Airport",
    location: "Pohnpei, Micronesia",
    description:
      "Dredging works and disposal of dredged materials supporting airport improvement.",
    category: "Dredging",
    featured: true,
  },
];

export const projects: Project[] = raw.map((p) => ({
  ...p,
  image: `/images/projects/${p.slug}.jpg`,
}));

export const projectCategories: ProjectCategory[] = [
  "Dredging",
  "Marine Construction",
  "Port Development",
  "Reclamation",
  "Sea Wall / Coastal Protection",
];

export const featuredProjects = projects.filter((p) => p.featured);
