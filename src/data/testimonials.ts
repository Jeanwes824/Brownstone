export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

// Testimonial avatars live at /public/images/testimonials/testimonial-N.jpg
// (400 × 400, 1:1). Replace with real client photos — keep the same names.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Brownstone delivered our dredging works on schedule and to spec, even in demanding conditions. A dependable marine partner that truly gets the job done.",
    name: "Port Authority Representative",
    title: "Government Client, Philippines",
    image: "/images/testimonials/testimonial-1.jpg",
  },
  {
    quote:
      "Their engineering expertise on our breakwater and seawall protection gave us confidence from planning through completion. Safety and quality were never compromised.",
    name: "Project Director",
    title: "Private Infrastructure Developer",
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    quote:
      "From surveying to execution, the team handled a complex port development with professionalism and deep marine know-how. We would work with them again.",
    name: "Operations Manager",
    title: "Regional Terminal Operator",
    image: "/images/testimonials/testimonial-3.jpg",
  },
];
