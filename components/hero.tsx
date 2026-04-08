"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Blue flowing wave effect - bottom (trust & professionalism) */}
      <svg className="absolute bottom-0 left-0 w-full h-[400px] opacity-25" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
        <path d="M0,200 C150,280 350,100 500,180 C650,260 850,120 1000,200 C1150,280 1300,150 1440,200 L1440,400 L0,400 Z" fill="url(#wave-gradient-1)" />
        <path d="M0,250 C200,350 400,150 600,250 C800,350 1000,180 1200,250 C1350,300 1400,220 1440,250 L1440,400 L0,400 Z" fill="url(#wave-gradient-2)" />
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
            <Zap className="h-4 w-4" />
            Trusted by 100+ UK Tech Companies
          </div>
          
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Stop Searching.{" "}
            <span className="text-primary">Start Hiring.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We deliver pre-vetted Cloud, AI, Data &amp; Software experts to your doorstep in{" "}
            <span className="text-foreground font-medium">under 48 hours</span>.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-lg font-semibold shadow-lg shadow-accent/25"
            >
              <Link href="#contact">
                Get Your Shortlist Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary px-8 h-14 text-lg"
            >
              <Link href="#expertise">See Our Talent Pool</Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-foreground">48h</span>
              <span className="text-sm text-muted-foreground">First Candidates Delivered</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-foreground">94%</span>
              <span className="text-sm text-muted-foreground">Interview-to-Hire Rate</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-foreground">15+</span>
              <span className="text-sm text-muted-foreground">Years Industry Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
