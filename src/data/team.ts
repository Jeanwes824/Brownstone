export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

// Leadership portraits live at /public/images/team/<file>.jpg (800 × 1000, 4:5).
// Replace the placeholder files with real photography — keep the same names.
export const team: TeamMember[] = [
  {
    name: "Rommel Zapanta",
    role: "President",
    image: "/images/team/rommel-zapanta.jpg",
  },
  {
    name: "Francis Fok",
    role: "Marine Expert — Director",
    image: "/images/team/francis-fok.jpg",
  },
  {
    name: "Jean W. Philippe",
    role: "Business Development — Director",
    image: "/images/team/jean-philippe.jpg",
  },
];
