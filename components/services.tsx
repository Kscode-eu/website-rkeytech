import { Cloud, Code2, Database, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Cloud,
    title: "Cloud Experts",
    description: "Scale faster with battle-tested cloud architects who have migrated 500+ enterprise workloads.",
    features: ["AWS / Azure / GCP", "Cloud-Native Architecture", "Zero-Downtime Migration"],
    stat: "3x",
    statLabel: "Faster deployment",
  },
  {
    icon: Code2,
    title: "Tech Wizards",
    description: "Ship products 2x faster with senior developers who have built for FTSE 100 and high-growth startups.",
    features: ["Full-Stack & Mobile", "Microservices Experts", "Code Quality Obsessed"],
    stat: "2x",
    statLabel: "Faster time-to-market",
  },
  {
    icon: Database,
    title: "Data Gurus",
    description: "Turn your data chaos into competitive advantage with engineers who have processed petabytes.",
    features: ["Real-Time Pipelines", "BI & Visualisation", "Data Governance"],
    stat: "10x",
    statLabel: "ROI on data investments",
  },
  {
    icon: Brain,
    title: "AI Specialists",
    description: "Deploy production AI that actually works. Our experts have built models serving millions of users.",
    features: ["LLMs & GenAI", "Computer Vision", "MLOps & Deployment"],
    stat: "85%",
    statLabel: "AI project success rate",
  },
]

export function Services() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our Specialisations
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            The Talent That <span className="text-primary">Transforms</span> Businesses
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just fill roles. We find the experts who will become your unfair advantage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                
                <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Stat highlight */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">{service.stat}</span>
                  <span className="text-xs text-muted-foreground">{service.statLabel}</span>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  Hire this talent
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
