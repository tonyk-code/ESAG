import AboutHero from "../components/pages/about/AboutHero";
import AboutManifesto from "../components/pages/about/AboutManifesto";
import AboutMissionVision from "../components/pages/about/AboutMissionVision";
import AboutCrosshairReveal from "../components/pages/about/AboutCrosshairReveal";
import AboutTeam from "../components/pages/about/AboutTeam";
import AwardsStrip from "../components/pages/home/AwardsStrip";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-canvas text-primary font-body">
      <AboutHero />
      <AboutManifesto />
      <AboutMissionVision />
      <AboutCrosshairReveal />
      <AboutTeam />
      <AwardsStrip />
    </div>
  );
}
