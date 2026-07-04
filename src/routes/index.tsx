import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/luxe/Nav";
import { Hero } from "@/components/luxe/Hero";
import { About } from "@/components/luxe/About";
import { Accommodation } from "@/components/luxe/Accommodation";
import { Facilities } from "@/components/luxe/Facilities";
import { Dining } from "@/components/luxe/Dining";
import { Spa } from "@/components/luxe/Spa";
import { Experiences } from "@/components/luxe/Experiences";
import { Gallery } from "@/components/luxe/Gallery";
import { Testimonials } from "@/components/luxe/Testimonials";
import { ResortMap } from "@/components/luxe/ResortMap";
import { FAQ } from "@/components/luxe/FAQ";
import { Contact } from "@/components/luxe/Contact";
import { FinalCTA } from "@/components/luxe/FinalCTA";
import { Footer } from "@/components/luxe/Footer";
import {
  ScrollProgress,
  FloatingButtons,
  PageLoader,
} from "@/components/luxe/FloatingUI";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Accommodation />
        <Facilities />
        <Dining />
        <Spa />
        <Experiences />
        <Gallery />
        <Testimonials />
        <ResortMap />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
