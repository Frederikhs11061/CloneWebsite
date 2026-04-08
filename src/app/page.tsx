import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PreBuiltSections } from "@/components/PreBuiltSections";
import { DesktopMobile } from "@/components/DesktopMobile";
import { SectionsShowcase } from "@/components/SectionsShowcase";
import { TestimonialOliur } from "@/components/TestimonialOliur";
import { Shopify } from "@/components/Shopify";
import { VideoThemes } from "@/components/VideoThemes";
import { LaunchBrand } from "@/components/LaunchBrand";
import { EasiestWay } from "@/components/EasiestWay";
import { TestimonialFabian } from "@/components/TestimonialFabian";
import { Membership } from "@/components/Membership";
import { AnimatedThemes } from "@/components/AnimatedThemes";
import { FeaturedOn } from "@/components/FeaturedOn";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PreBuiltSections />
        <DesktopMobile />
        <SectionsShowcase />
        <TestimonialOliur />
        <Shopify />
        <VideoThemes />
        <LaunchBrand />
        <EasiestWay />
        <TestimonialFabian />
        <Membership />
        <AnimatedThemes />
        <FeaturedOn />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
