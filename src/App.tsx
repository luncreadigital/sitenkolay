import { useState } from "react";
import { Loader } from "./components/Loader";
import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Intro } from "./components/Intro";
import { Packages } from "./components/Packages";
import { Why } from "./components/Why";
import { Process } from "./components/Process";
import { Ecommerce } from "./components/Ecommerce";
import { Work } from "./components/Work";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsApp } from "./components/WhatsApp";
import { ContactModal } from "./components/ContactModal";
import { Progress } from "./components/Progress";
import { Stats } from "./components/Stats";
import { Statement } from "./components/Statement";
import { References } from "./components/References";
import { MobileNav } from "./components/MobileNav";

export default function App() {
  const [booting, setBooting] = useState(true);
  const [modal, setModal] = useState(false);
  const [pack, setPack] = useState<string | null>(null);

  const openContact = (id?: string) => {
    setPack(id ?? null);
    setModal(true);
  };

  return (
    <div className="relative min-h-screen bg-navy">
      {booting && <Loader onDone={() => setBooting(false)} />}
      <div className="grain" />
      <Cursor />
      <Progress />
      <Navbar onContact={() => openContact()} />
      <main>
        <Hero onContact={() => openContact()} />
        <Marquee />
        <Stats />
        <Intro />
        <Packages onSelect={(id) => openContact(id)} />
        <Why />
        <Process />
        <Statement />
        <Ecommerce onContact={() => openContact("ecom")} />
        <References />
        <Work onContact={() => openContact()} />
        <Testimonials />
        <Faq />
        <Contact preset={pack} />
      </main>
      <Footer />
      <WhatsApp />
      <MobileNav />
      <ContactModal open={modal} onClose={() => setModal(false)} preset={pack} />
    </div>
  );
}
