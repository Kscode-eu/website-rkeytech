import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Cloud Experts", href: "#expertise" },
    { name: "Software Development", href: "#expertise" },
    { name: "AI & Machine Learning", href: "#expertise" },
    { name: "Data Analytics", href: "#expertise" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/privacy" },
  ],
  social: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Email", href: "mailto:team@rkeytech.com", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 overflow-hidden">
      {/* Blue flowing wave effect - top */}
      <svg className="absolute top-0 left-0 w-full h-[200px] opacity-15 rotate-180" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
        <path d="M0,100 C150,140 350,50 500,90 C650,130 850,60 1000,100 C1150,140 1300,75 1440,100 L1440,200 L0,200 Z" fill="url(#footer-wave-1)" />
        <path d="M0,125 C200,175 400,75 600,125 C800,175 1000,90 1200,125 C1350,150 1400,110 1440,125 L1440,200 L0,200 Z" fill="url(#footer-wave-2)" />
        <defs>
          <linearGradient id="footer-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="footer-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Gradient accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-primary">RKey</span>
                <span className="text-foreground">Tech</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your network specialists for KEY Tech Talent. Where you lead and we connect — unlocking your full hiring power.
            </p>
            <div className="mt-6 flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Contact:</span>
                <br />
                +44 (0) 7766 199 908
                <br />
                London, England
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; <span className="text-primary">RKey</span>Tech Consulting Ltd. All rights reserved {new Date().getFullYear()} | Company Number: 16397369
          </p>
        </div>
      </div>
    </footer>
  )
}
