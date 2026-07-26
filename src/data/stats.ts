export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 40, suffix: "+", label: "Years of Experience" },
  { value: 24, suffix: "+", label: "Major Projects Delivered" },
  { value: 100, suffix: "%", label: "Commitment to Safety" },
  { value: 2, suffix: "", label: "Regions Served — Asia & Micronesia" },
];
