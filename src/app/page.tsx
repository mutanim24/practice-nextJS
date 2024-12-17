
// "use client"

import Contact from "@/components/ui/Contact";
import Education from "@/components/ui/Education";
import Hero from "@/components/ui/Hero";
import { MarqueeDemo } from "@/components/ui/PeopleSay";
import Projects from "@/components/ui/Projects";
import WhatIDo from "@/components/ui/WhatIDo";
import Workprocess from "@/components/ui/Workprocess";

// import { Hero } from "@/sections/HeroSections";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Workprocess/>
      <WhatIDo/>
      <Projects/>
      <Education/>
      <MarqueeDemo/>
      <Contact/>
    </main>
  );
}
