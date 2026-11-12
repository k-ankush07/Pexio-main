import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";

const LOGO = "https://pexio.app/assets/Group%201707480593.svg";
const CARD_SHADOW =
  "shadow-[0px_8px_32px_0px_#703CE112,0px_0px_0px_1px_#703CE11A]";

const links = [
  { label: "Our Apps", to: "/apps" },
  { label: "Solutions", to: "/solutions" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="relative z-50 py-[20px]">
      <Container>
        <nav
          className={`flex items-center justify-between rounded-xl bg-white px-[15px] py-[15px] ${CARD_SHADOW}`}
        >
          <Link to="/" aria-label="Pexio home">
            <div className="w-[96px] pl-[10px]">
              <img src={LOGO} alt="" className="w-full" />
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-[32px] md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-[14px] font-[500] text-[#1A1523] hover:text-[#703CE1]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop button */}
          <div className="hidden md:block">
            <Button arrow>Explore Our Apps</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] items-center justify-center rounded-lg border border-[#1A1523] bg-white md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#1A1523"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile full-screen menu */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex h-dvh flex-col bg-linear-to-b from-[#F7F4FE] via-[#FAF9FD] to-[#FAF9FD] px-[20px] py-[20px] transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`overflow-hidden rounded-xl bg-white ${CARD_SHADOW}`}
        >
          {/* Top row: logo + close */}
          <div className="flex items-center justify-between px-[15px] py-[15px]">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              aria-label="Pexio home"
            >
              <div className="w-[96px] pl-[10px]">
                <img src={LOGO} alt="" className="w-full" />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] items-center justify-center rounded-lg bg-[#703CE1]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <ul>
            {links.map((l, i) => (
              <li key={l.label} className="border-t border-[#E2E8F0]">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                  className={`block px-[22px] py-[16px] text-[16px] text-[#1A1523] transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom button */}
        <div className="mt-auto">
          <Button arrow className="w-full">
            Explore Our Apps
          </Button>
        </div>
      </div>
    </header>
  );
}