import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import TermsConditions from "./components/Terms&Conditions";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/terms-and-condition" element={<TermsConditions />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*"element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}