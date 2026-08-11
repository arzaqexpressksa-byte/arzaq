import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { CoreValues } from "@/components/site/CoreValues";
import { MissionVision } from "@/components/site/MissionVision";
import { ServicesOverview } from "@/components/site/ServicesOverview";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { Industries } from "@/components/site/Industries";
import { Projects } from "@/components/site/Projects";
import { Strengths } from "@/components/site/Strengths";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "ARZAQ EXPRESS INDUSTRIAL Est. | Industrial Engineering & Contracting | Saudi Arabia";
const description =
  "ARZAQ EXPRESS INDUSTRIAL Est., located in Dammam KSA, delivers high-quality industrial services in mechanical engineering, civil construction, certified welding & fabrication, E&I, motor winding, generator overhaul, FRP/RTR piping, and pump rental.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-amber-500 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <CoreValues />
        <MissionVision />
        <ServicesOverview />
        <ServiceDetail />
        <Industries />
        <Projects />
        <Strengths />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
