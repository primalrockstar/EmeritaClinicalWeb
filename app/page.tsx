
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Users, BookOpen, Smartphone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Empowering EMS Education
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Innovative digital solutions for EMS training programs and EMT-B students. 
                Transform your learning experience with ProMedixEMS.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/suite">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose ProMedixEMS
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Comprehensive tools designed for modern EMS education
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Complete Suite</CardTitle>
                <CardDescription>
                  Full range of EMS educational tools and resources
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Smartphone className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Mobile App</CardTitle>
                <CardDescription>
                  Learn on-the-go with our EMT-B mobile application
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>For Programs</CardTitle>
                <CardDescription>
                  Tailored solutions for training programs and institutions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 mb-2 text-primary" />
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your EMS Education?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of students and programs using ProMedixEMS
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

import { appModules } from '@/config/apps';
import ModuleCard from '@/components/ModuleCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            ProMedix EMS Suite
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your comprehensive Emergency Medical Services training platform
          </p>
        </div>

        {/* Module Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>ProMedix EMS &copy; 2024 - Empowering EMS Professionals</p>
        </div>
      </main>

    </div>
  );
}
