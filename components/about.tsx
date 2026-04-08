import { CheckCircle2, Users, Target, Handshake, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Precision Over Volume",
    description: "We send you 3 perfect candidates, not 30 random CVs. Every introduction is hand-picked to match your culture, stack, and growth stage.",
  },
  {
    icon: Users,
    title: "We Speak Your Language",
    description: "Our team has actually shipped code and scaled systems. We understand the difference between a config change and an architecture overhaul.",
  },
  {
    icon: Handshake,
    title: "Partners, Not Vendors",
    description: "We don&apos;t disappear after placement. We check in, ensure success, and become your go-to for every future hire.",
  },
]

const highlights = [
  { value: "500+", label: "Tech Placements" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years Experience" },
  { value: "48h", label: "First Shortlist" },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Why RKeyTech
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Hiring Tech Talent is <span className="text-primary">Broken</span>. We Fixed It.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Most recruiters flood your inbox with irrelevant CVs, waste your time with unqualified candidates, and disappear the moment things get hard.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground font-medium">
              We do the opposite.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With 15+ years placing Cloud, AI, Data, and Software experts across the UK, we&apos;ve built a network of pre-vetted talent that most recruiters can&apos;t access. We know who&apos;s exceptional, who&apos;s actually available, and who will thrive in your specific environment.
            </p>
            
            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{item.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Values cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/80"
              >
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                
                <div className="relative z-10 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
