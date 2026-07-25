import Hero from "@/components/Hero";
import Signature from "@/components/Signature";
import ScrollFx from "@/components/ScrollFx";
import {
  LimeMarquee,
  PhotoStrip,
  Split,
  Stats,
  Projects,
  TechMarquee,
  Timeline,
  Writing,
  Contact,
} from "@/components/Sections";

export default function Home() {
  return (
    <div id="root" className="overflow-x-hidden">
      <Hero />
      <LimeMarquee />
      <Signature />
      <PhotoStrip />
      <Split />
      <Stats />
      <Projects />
      <TechMarquee />
      <Timeline />
      <Writing />
      <Contact />
      <ScrollFx />
    </div>
  );
}
