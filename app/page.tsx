import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Tapography } from "@/components/tapography";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";

export default function page() {
  return (
    <main className="w-full space-y-32 lg:space-y-60 relative overflow-hidden">
      <Hero />
      <About />
      <Tapography />
      <Projects />
      <Contact />
    </main>
  );
}
