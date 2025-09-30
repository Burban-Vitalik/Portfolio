import { Footer } from "./components/Footer";
import { HomeSection } from "./components/HomeSection";
import { ServiceSection } from "./components/ServiceSection";
import { SkillsSection } from "./components/SkilllsSection";
import { Header } from "./components/TopNavigation";
import PortfolioSection from "./components/WorkSection";

export default function App() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/60 via-black to-black"></div>

      <div className="relative z-10">
        <Header />
        <HomeSection />
        <div className="py-20 ">
          <ServiceSection />
        </div>
        <div className="py-20 bg-black/80">
          <SkillsSection />
        </div>
        <div className="py-20 bg-black/90">
          <PortfolioSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

