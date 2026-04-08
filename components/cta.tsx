import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Users, CheckCircle2 } from "lucide-react"

const benefits = [
  "Pre-vetted candidates only",
  "48-hour first shortlist",
  "Free replacement guarantee",
]

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 lg:p-16 overflow-hidden">
          {/* Inner gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          
          <div className="relative z-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Ready to Scale Your Team?
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Your Next Great Hire is{" "}
              <span className="text-primary">48 Hours Away</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need a single specialist or an entire delivery team, we move fast without cutting corners. Tell us what you need today.
            </p>
            
            {/* Benefits */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {benefit}
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-lg font-semibold shadow-lg shadow-accent/25"
              >
                <Link href="#contact">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Hire Tech Talent
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary px-8 h-14 text-lg"
              >
                <Link href="#contact">
                  <Users className="mr-2 h-5 w-5" />
                  I&apos;m Looking for Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
