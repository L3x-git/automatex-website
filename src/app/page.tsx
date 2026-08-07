import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/hero";
import { Kenya } from "@/components/kenya";
import { US } from "@/components/us";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Kenya />
      <US />
      <Services />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
