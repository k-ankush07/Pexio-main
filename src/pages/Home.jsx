import React from "react";
import Navbar from "../components/Navbar";
import PexioApps from "../components/PexioApps";
import TechnologyWork from "../components/TechnologyWork";
import Philosophy from "../components/Philosophy";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="bg-linear-to-b from-[#F7F4FE] via-[#FAF9FD] to-[#FAF9FD]">
        <Navbar />
      </div>
      <PexioApps />
      <TechnologyWork />
      <Philosophy />
      <CtaBanner />
      <Footer/>
    </div>
  );
}
