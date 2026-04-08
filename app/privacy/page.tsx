import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | RKeyTech Consulting",
  description: "RKeyTech Consulting privacy policy - Learn how we collect, use, and protect your personal data.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Legal
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              At RKeyTech Consulting Ltd we are committed to maintaining customer privacy and to the maintenance of the security of all personal data that is received.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-12">
              {/* General Privacy Policy */}
              <section className="rounded-xl border border-border bg-card/50 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Data Received and Processed</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  RKeyTech Consulting Ltd receives personal data which consists of information such as your name, address, nationality, e-mail address and work and education history. RKeyTech Consulting Ltd processes this personal data as necessary to provide our service offering and to aid the recruitment process.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  RKeyTech Consulting Ltd receives and processes sensitive personal data only so far as is necessary to ensure it conforms with legal requirements. By using this website and by supplying your details to RKeyTech Consulting Ltd, you consent to the company collecting and processing sensitive personal data supplied by you and disclosing this information to prospective employers and clients in connection with the recruitment process.
                </p>
              </section>

              <section className="rounded-xl border border-border bg-card/50 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  RKeyTech Consulting Ltd does not share or rent any personal information received with third parties unless:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>You have specifically consented to allow RKeyTech Consulting Ltd to share your personal information with third party organisations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>You are seeking employment with a third-party organisation through our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>It is to enable us to provide a product or service you have requested</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>We are required to do so by legal process or in response to a court order</span>
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-border bg-card/50 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Data Safeguards</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The security of your data is extremely important to RKeyTech Consulting Ltd. Access to your personal data is only given to our staff and third parties who help us to process data, to help with the provision of our services particularly the recruitment process.
                </p>
              </section>

              {/* Candidate Privacy Policy */}
              <section className="rounded-xl border border-border bg-card/50 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Candidate Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This Data Processing Notice applies to you if (1) you are looking for a job (permanent or contractor role) and (2) if you reside within the European Union. We have issued this in accordance with the General Data Protection Regulation (EU) 2016/679 (&apos;GDPR&apos;).
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-4">What Personal Data Do We Collect?</h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Your full name
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Registered address
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Date of birth
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Email addresses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Phone numbers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Professional profiles (LinkedIn, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    CV and skillset
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Job preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Current employer/client
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Salary information
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-border bg-card/50 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are entitled to various rights under GDPR:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Correction:</strong> Request correction of incomplete or inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Erasure:</strong> Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Objection:</strong> Object to processing of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Restriction:</strong> Request restriction of processing your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Transfer:</strong> Request transfer of your data to another party</span>
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-border bg-card/50 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your personal data will be stored in our system for three consecutive years. Your data will be removed if we have not heard from you during this period or upon your request.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under the Employment Agencies Act, we are obliged to hold your data for 12 months after it was last used. Under Finance Act legislation, data must be held for six years. After these obligations are satisfied, we will contact you to confirm if you wish your details to be retained.
                </p>
              </section>

              {/* Cookies Policy */}
              <section className="rounded-xl border border-border bg-card/50 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Cookies Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  RKeyTech Consulting Ltd uses cookies on its website. A cookie is a small text file that is delivered by a website server onto the computers of visitors. Cookies are useful because they allow a website to recognize your device.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The necessary cookies aim to enhance the user experience by identifying devices and remembering your website preferences, browser settings and log-in details. You can prevent the setting of cookies by adjusting your browser settings.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our website also uses Google Analytics cookies to measure how users interact with our website content, and Marketing Automation cookies that track data linked to your email address.
                </p>
              </section>

              {/* Contact */}
              <section className="rounded-xl border border-primary/50 bg-primary/5 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact the Data Protection Officer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions, comments or requests regarding your personal data or this Privacy Policy, please address them to:
                </p>
                <div className="text-foreground">
                  <p className="font-semibold">RKeyTech Consulting Ltd</p>
                  <p className="text-muted-foreground">London, UB10 0TB, United Kingdom</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:gdpr@rkeytech.com" className="text-primary hover:underline">gdpr@rkeytech.com</a></p>
                  <p className="text-muted-foreground">Phone: +44 (0) 77 661 999 08</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
