import Hero from "../components/pages/home/Hero";
import Intro from "../components/pages/home/Intro";
import ServicesOverview from "../components/pages/home/ServicesOverview";
import FeaturedWork from "../components/pages/home/FeaturedWork";
import Stats from "../components/pages/home/Stats";
import Clients from "../components/pages/home/Clients";
import CallToAction from "../components/pages/home/CallToAction";
import TeamTeaser from "../components/pages/home/TeamTeaser";
import ProductionServicesTrack from "../components/pages/home/ProductionServicesTrack";


export function Home() {
  return (
    <div className="flex flex-col w-full bg-canvas">
      <Hero />
      <Intro />
      <ServicesOverview />
      <FeaturedWork />
      <ProductionServicesTrack />
      <TeamTeaser/>
      <Stats />
      <Clients />
      <CallToAction />
    </div>
  );
}