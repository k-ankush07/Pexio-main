import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExtensionPoints from "../components/ExtensionPoints";
import PexioApps from "../components/PexioApps";
import TechnologyWork from "../components/TechnologyWork";
import Services from "../components/Services";
import Philosophy from "../components/Philosophy";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('https://pexio.app/images/Section%20-%20HERO%20SECTION.jpg')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <ExtensionPoints />
      <PexioApps />
      <TechnologyWork />
      <Services />
      <Philosophy />
      <CtaBanner />
      <Footer />
    </div>
  );
}
