import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Users, BookOpen, Smartphone, Zap, FileText, Mic, Activity, Target, Pill, ClipboardCheck } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-secondary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Empowering EMS Education
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Innovative digital solutions for EMS training programs and EMT-B students. 
                Transform your learning experience with ProMedixEMS<sup>TM</sup>.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass border-primary/30">
                <Link href="/suite">Explore Suite</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ProMedixEMS Suite Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Complete ProMedixEMS<sup>TM</sup> Suite
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              From EMT-B to Paramedic — comprehensive training tools for every level
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Core EMT */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <Smartphone className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Core EMT</CardTitle>
                <CardDescription>
                  Essential training for the EMT-B student
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Advance AEMT */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-secondary/20">
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-secondary" />
                <CardTitle>Advance AEMT</CardTitle>
                <CardDescription>
                  Next-level skills for the advancing provider
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Paramedic Elite */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <Target className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Paramedic Elite</CardTitle>
                <CardDescription>
                  Advanced neuro, cardiac, trauma, and critical care mastery
                </CardDescription>
              </CardHeader>
            </Card>

            {/* FlashLearn */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-accent/20">
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-accent" />
                <CardTitle>FlashLearn</CardTitle>
                <CardDescription>
                  Fast, focused, spaced-repetition EMS study
                </CardDescription>
              </CardHeader>
            </Card>

            {/* PCR Lab */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <FileText className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>PCR Lab</CardTitle>
                <CardDescription>
                  Realistic case-based documentation training
                </CardDescription>
              </CardHeader>
            </Card>

            {/* VoiceNotes */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-secondary/20">
              <CardHeader>
                <Mic className="h-10 w-10 mb-2 text-secondary" />
                <CardTitle>VoiceNotes</CardTitle>
                <CardDescription>
                  Lecture recording + instant transcription built for EMS
                </CardDescription>
              </CardHeader>
            </Card>

            {/* RhythmLab */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <Activity className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>RhythmLab</CardTitle>
                <CardDescription>
                  Master ECG interpretation, one rhythm at a time
                </CardDescription>
              </CardHeader>
            </Card>

            {/* ScenarioDeck */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-accent/20">
              <CardHeader>
                <Target className="h-10 w-10 mb-2 text-accent" />
                <CardTitle>ScenarioDeck</CardTitle>
                <CardDescription>
                  High-yield medical and trauma simulations on demand
                </CardDescription>
              </CardHeader>
            </Card>

            {/* SkillCheck */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <ClipboardCheck className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>SkillCheck</CardTitle>
                <CardDescription>
                  Track and reinforce essential EMT/AEMT/Medic skills
                </CardDescription>
              </CardHeader>
            </Card>

            {/* MedicationsX */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-secondary/20">
              <CardHeader>
                <Pill className="h-10 w-10 mb-2 text-secondary" />
                <CardTitle>MedicationsX</CardTitle>
                <CardDescription>
                  Essential EMS pharmacology, simplified
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose ProMedixEMS<sup>TM</sup>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Comprehensive tools designed for modern EMS education
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Complete Suite</CardTitle>
                <CardDescription>
                  Full range of EMS educational tools and resources
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-secondary/20">
              <CardHeader>
                <Smartphone className="h-10 w-10 mb-2 text-secondary" />
                <CardTitle>Mobile Apps</CardTitle>
                <CardDescription>
                  Learn on-the-go with our mobile applications
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>For Programs</CardTitle>
                <CardDescription>
                  Tailored solutions for training programs and institutions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-accent/20">
              <CardHeader>
                <CheckCircle className="h-10 w-10 mb-2 text-accent" />
                <CardTitle>Proven Results</CardTitle>
                <CardDescription>
                  Trusted by students and programs nationwide
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center glass-card p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Transform Your EMS Education?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of students and programs using ProMedixEMS<sup>TM</sup>
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass border-primary/30">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
