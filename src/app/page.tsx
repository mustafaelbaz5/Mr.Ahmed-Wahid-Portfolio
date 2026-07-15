import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { GradesSection } from "@/components/sections/GradesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BookingSection } from "@/components/sections/BookingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* overflow-x:hidden lives here (not on html/body) so decorative bleed
          (ElectricBorder glow, etc.) can never cause page-level horizontal
          scroll, while the fixed Navbar stays outside this clipping
          ancestor and remains reliably tappable on WebKit/iOS. */}
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main className="flex-1">
          <HeroSection />
          <GradesSection />
          <AboutSection />
          <BookingSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
