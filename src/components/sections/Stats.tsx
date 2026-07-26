import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-maroon py-16">
      {/* Subtle bracket motif corners */}
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.1}
              className="text-center text-white"
            >
              <p className="font-heading text-4xl font-bold text-copper-light md:text-5xl">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/80">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
