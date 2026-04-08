"use client"

import { useState } from "react"
import { Cloud, Code2, Brain, Database, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const expertiseAreas = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    subtitle: "Engineers who have migrated Fortune 500 workloads",
    description: "From lift-and-shift to cloud-native transformation, our experts have done it all.",
    roles: [
      "Cloud Architects (AWS/Azure/GCP)",
      "Platform Engineers",
      "DevOps & SRE Specialists",
      "Infrastructure Automation Engineers",
      "Cloud Migration Leads",
      "Kubernetes Experts",
      "Security & Compliance Engineers",
      "FinOps Specialists",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    subtitle: "Developers who ship products, not just code",
    description: "Senior engineers from top startups and enterprises who understand scale.",
    roles: [
      "Full-Stack Engineers (React, Node, Python)",
      "Backend Architects",
      "Mobile Developers (iOS, Android, Flutter)",
      "Frontend Specialists (React, Vue, Angular)",
      "API & Integration Engineers",
      "QA & Test Automation Engineers",
      "Technical Leads",
      "Engineering Managers",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "AI experts with production deployments, not just notebooks",
    description: "From GPT integration to custom model training, real AI for real business.",
    roles: [
      "ML Engineers",
      "AI/LLM Specialists",
      "Data Scientists",
      "MLOps Engineers",
      "NLP Engineers",
      "Computer Vision Experts",
      "AI Product Managers",
      "Prompt Engineers",
    ],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    subtitle: "Data engineers who have processed petabytes",
    description: "Turn your data into decisions with engineers who build at scale.",
    roles: [
      "Data Engineers",
      "Data Architects",
      "Analytics Engineers (dbt, Spark)",
      "BI Developers (Tableau, Looker, PowerBI)",
      "Data Platform Engineers",
      "ETL/ELT Specialists",
      "Data Governance Experts",
      "Real-Time Streaming Engineers (Kafka)",
    ],
  },
]

export function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="expertise" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our Talent Pool
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Every Role. Every Level. <span className="text-primary">Pre-Vetted.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            We don&apos;t just search LinkedIn. We maintain relationships with the best tech talent in the UK &mdash; people who aren&apos;t actively looking but would move for the right opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Navigation tabs */}
          <div className="lg:col-span-4 space-y-3">
            {expertiseAreas.map((area, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border transition-all duration-300",
                  activeIndex === index
                    ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10"
                    : "bg-card/50 border-border hover:border-primary/30 hover:bg-card/80"
                )}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
                      activeIndex === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    )}
                  >
                    <area.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{area.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{area.subtitle}</p>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform",
                      activeIndex === index && "text-primary rotate-90"
                    )}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 lg:p-10 overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    {(() => {
                      const Icon = expertiseAreas[activeIndex].icon
                      return <Icon className="h-7 w-7" />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {expertiseAreas[activeIndex].title}
                    </h3>
                    <p className="text-primary font-medium">{expertiseAreas[activeIndex].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8">{expertiseAreas[activeIndex].description}</p>

                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Roles We Fill
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {expertiseAreas[activeIndex].roles.map((role, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
