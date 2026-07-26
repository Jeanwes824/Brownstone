import {
  Waves,
  Anchor,
  Ship,
  Wrench,
  HardHat,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "breakwater-construction",
    title: "Breakwater Construction",
    description:
      "Design and build durable breakwaters that shield coastal areas, ports, and harbors from wave action and erosion.",
    icon: Waves,
    capabilities: [
      "Rubble-mound & armour-rock breakwaters",
      "Coastal erosion & wave-action protection",
      "Precast concrete armour placement",
      "Shoreline & harbor defense structures",
    ],
  },
  {
    slug: "port-wharf-development",
    title: "Port & Wharf Development",
    description:
      "Full-scale port and wharf construction, including bulkheads, piers, jetties, and container terminals.",
    icon: Anchor,
    capabilities: [
      "Bulkheads, piers & jetties",
      "Container terminal infrastructure",
      "Berthing & mooring structures",
      "Quay wall foundations & rock fill",
    ],
  },
  {
    slug: "dredging-marine-mining",
    title: "Dredging & Marine Mining",
    description:
      "Hydrographic surveys, suction dredging, and sediment removal for navigational channels, plus sustainable marine resource extraction.",
    icon: Ship,
    capabilities: [
      "Capital & maintenance dredging",
      "Hydrographic surveys",
      "Navigational channel deepening",
      "Sustainable marine resource extraction",
    ],
  },
  {
    slug: "ship-repair-building",
    title: "Ship Repair & Building",
    description:
      "Custom shipbuilding and repair services for workboats, barges, and support vessels.",
    icon: Wrench,
    capabilities: [
      "Workboat & barge construction",
      "Support-vessel repair & refit",
      "Slipway & drydock works",
      "Marine fabrication",
    ],
  },
  {
    slug: "marine-construction-engineering",
    title: "Marine Construction & Engineering",
    description:
      "Coastal and structural engineering for marine and civil infrastructure works across offshore, coastal, and inland environments.",
    icon: HardHat,
    capabilities: [
      "Coastal & structural engineering",
      "Sea walls & coastal protection",
      "Land reclamation works",
      "Civil infrastructure",
    ],
  },
  {
    slug: "marine-equipment-rentals",
    title: "Marine Equipment Rentals",
    description:
      "Marine equipment and a skilled workforce available for hire to support project execution of any scale.",
    icon: Truck,
    capabilities: [
      "Dredgers, barges & tugs",
      "Cranes & marine plant",
      "Skilled operators & crews",
      "Logistics & mobilization support",
    ],
  },
];
