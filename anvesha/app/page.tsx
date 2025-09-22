import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
/*import { WorkflowSection } from "@/components/workflow-section"*/
import { JourneySection } from "@/components/journey-section"
import { Footer } from "@/components/footer"



export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <JourneySection />
    
      {/* <WorkflowSection /> */}
      <Footer />
    </main>
  )
}
