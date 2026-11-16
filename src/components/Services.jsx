import React from "react";
import Container from "./Container";
import Badge from "./Badge";

const ASSETS = "https://pexio.app/images";

const services = [
  {
    title: "CRO Audit & Roadmap",
    text: "Analyze your store, uncover conversion leaks, and create a prioritized testing roadmap.",
    img: `${ASSETS}/cro-audit.svg`,
  },
  {
    title: "Checkout Migration",
    text: "Move off checkout.liquid and legacy scripts to modern, higher-converting checkout experiences.",
    img: `${ASSETS}/checkout-migration.svg`,
  },
  {
    title: "Custom Apps & Integrations",
    text: "Build private apps and connect ESP, ERP, or CRM systems seamlessly and securely.",
    img: `${ASSETS}/custom-app.svg`,
  },
  {
    title: "Done-for-You Setup",
    text: "We configure every Pexio app to your theme, brand, and goals so you can launch with confidence.",
    img: `${ASSETS}/done-for.svg`,
  },
];

export default function Services() {
  return (
    <section id="solutions" className="border-y border-[#E4E2F0] bg-[#FAF9FD] py-[40px] sm:py-[60px] md:py-[80px]">
      <Container>
        <div className="mx-auto text-center">
          <Badge>PEXIO SERVICES</Badge>
          <h2 className="mt-[10px] text-[28px] leading-[32px] font-semibold tracking-tight text-[#1A1523] md:text-[44px] md:leading-[52px]">
            Apps are the start. Our team takes you further.
          </h2>
          <p className="mt-[20px] text-[14px]  sm:text-[16px] leading-[23px] text-[#6B6580]">
            The engineers who build Pexio also work directly with brands and
            agencies from a one-off audit to an ongoing growth program.
          </p>
        </div>

        <div className="mt-[32px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-[16px] border border-[#F1F5F9] bg-white p-[24px] shadow-[0px_2px_10px_0px_#00000005,0px_20px_45px_-15px_#7350E614]"
            >
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[12px] bg-[#F1ECFF]">
                <img
                  src={s.img}
                  alt=""
                  className="w-[23px] shrink-0 object-contain"
                />
              </div>
              <h3 className="mt-[24px] text-[16px] font-semibold text-[#1A1523]">
                {s.title}
              </h3>
              <p className="mt-[8px] text-[13px] leading-[18px] text-[#6B6580]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
