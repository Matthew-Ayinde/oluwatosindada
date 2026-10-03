import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Profile from "@/components/sections/Profile";
import Capabilities from "@/components/sections/Capabilities";
import Career from "@/components/sections/Career";
import Work from "@/components/sections/Work";
import Quote from "@/components/sections/Quote";
import Iso from "@/components/sections/Iso";
import Ledger from "@/components/sections/Ledger";
import Toolkit from "@/components/sections/Toolkit";
import Growth from "@/components/sections/Growth";
import Contact from "@/components/sections/Contact";
import { marquee } from "@/lib/content";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Marquee
          items={marquee}
          className="bg-moss py-5 font-serif text-[11vw] italic leading-none text-paper sm:py-7 sm:text-[7vw] lg:text-[5.2vw]"
        />
        <Profile />
        <Capabilities />
        <Career />
        <Work />
        <Quote />
        <Iso />
        <Ledger />
        <Toolkit />
        <Growth />
      </main>
      <Contact />
    </>
  );
}
