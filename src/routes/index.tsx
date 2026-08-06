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

const title = "Industrial Engineering & Contracting Solutions | Company Name";
const description =
  "Premium industrial engineering, fabrication, electromechanical and maintenance services delivered across Saudi Arabia, the UAE and the wider Gulf region.";

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
    <div className="min-h-screen bg-background">
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
