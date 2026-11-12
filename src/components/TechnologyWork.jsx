import React from "react";
import Container from "./Container";
import Badge from "./Badge";

const ASSETS = "https://pexio.app/images";

const checklist = [
  "Shopify OS 2.0 Theme App Extensions",
  "Checkout Extensibility Native (Zero .liquid)",
  "Uninstalls without residual code traces",
];

const whiteCard =
  "rounded-[32px] border border-[#F1F5F9] bg-white shadow-[0px_2px_10px_0px_#00000005,0px_20px_45px_-15px_#7350E614]";

export default function TechnologyWork() {
  return (
    <section className="py-[40px] md:py-[80px] border-t border-[#E4E2F0]">
      <Container>
        <div className="mx-auto text-center">
          <Badge>THE PEXIO ADVANTAGE</Badge>
          <h2 className="mt-[10px] text-[28px] leading-[38px] font-semibold tracking-tight text-[#1A1523] md:text-[44px] md:leading-[52px]">
            Technology That Works for Your Growth.
          </h2>
        </div>

        <div className="mt-[28px] md:mt-[60px] grid grid-cols-1 gap-[24px] md:grid-cols-12">
          {/* Big purple card */}
          <div className="relative flex flex-col justify-between rounded-[28px] border border-[#F1F5F9] bg-[linear-gradient(43.79deg,#703CE1_19.27%,#1E0555_115.21%)] p-[24px] md:p-[36px] shadow-[0px_25px_50px_-12px_#6D28D959] md:col-span-5">
            {" "}
            <div>
              <div className="flex items-start justify-between">
                <p className="text-[11px] font-medium tracking-[0.08em] text-[#FFFFFFCC]">
                  NATIVE ARCHITECTURE
                </p>
                <div>
                  <img
                    src={`${ASSETS}/blue-shopify.svg`}
                    alt="Shopify"
                    className="w-full"
                  />
                </div>
              </div>

              <h3 className="mt-[10px] text-[24px] md:text-[30px] font-bold leading-[36px] text-white">
                Built for Shopify
              </h3>
              <p className="mt-[10px] font-[400] text-[15px] leading-[23px] text-[#FFFFFFD9]">
                Our software fully adheres to all the latest Shopify OS 2.0
                guidelines, Theme App Extensions, and modern Checkout
                Extensibility standards and requirements.
              </p>
            </div>
            <ul className="mt-[30px] md:mt-[80px] flex flex-col gap-[14px] rounded-[16px] bg-white p-[22px] shadow-[0px_20px_45px_-15px_#7350E614]">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-[10px] text-[14px] font-medium text-[#1A1523]"
                >
                  <img
                    src={`${ASSETS}/green-cirle.svg`}
                    alt=""
                    className="h-[24px] w-[24px] shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-[24px] md:col-span-7">
            {/* Simple Experiences */}
            <div
              className={`${whiteCard} flex flex-col items-start justify-between gap-[20px] p-[24px] md:p-[33px] sm:flex-row sm:items-center`}
            >
              <div className="max-w-[300px]">
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[16px] bg-[#F1ECFF]">
                  <img
                    src="https://pexio.app/assets/simple-experience.svg"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </span>
                <h3 className="mt-[16px] text-[22px] font-bold text-[#0F172A]">
                  Simple Experiences
                </h3>
                <p className="mt-[6px] text-[14px] leading-[18px] text-[#64748B]">
                  Configure, launch, and monitor tools without developer
                  intervention.
                </p>
              </div>

              {/* Toggle visual */}
              <div className="flex w-full flex-col gap-[10px] rounded-[12px] border border-[#F1F5F9] bg-[#F8FAFC] p-[16px] shadow-[inset_0px_2px_4px_1px_#0000000D] sm:w-[240px]">
                {[0, 1].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span
                      className={`h-[12px] ${i === 1 ? "w-[82px]" : "w-[64px]"} rounded-full bg-[#E2E8F0]`}
                    />
                    <span className="flex h-[24px] w-[44px] items-center justify-end rounded-full bg-[#885CF7] px-[2px]">
                      <span className="h-[20px] w-[20px] rounded-full bg-white" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom two cards */}
            <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2">
              {/* Growth Focused */}
              <div
                className={`${whiteCard} flex flex-col justify-between p-[24px] md:p-[29px]`}
              >
                <div>
                  <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[16px] bg-[#F1ECFF]">
                    <img
                      src={`${ASSETS}/growth-focused.svg`}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                  </span>
                  <h3 className="mt-[16px] text-[20px] font-bold text-[#1A1523]">
                    Growth Focused
                  </h3>
                  <p className="mt-[6px] text-[14px] leading-[18px] text-[#6B6580]">
                    Improve conversion, AOV, and back-office operations.
                  </p>
                </div>
                <div className="mt-[24px] w-full">
                  <img
                    src="https://pexio.app/assets/growthaov.svg"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>

              {/* Continuous Innovation */}
              <div
                className={`${whiteCard} flex flex-col justify-between p-[24px] md:p-[29px]`}
              >
                <div>
                  <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[16px] bg-[#F1ECFF]">
                    <img
                      src={`${ASSETS}/continuous-innovation.svg`}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                  </span>
                  <h3 className="mt-[16px] text-[20px] font-bold text-[#0F172A]">
                    Continuous Innovation
                  </h3>
                  <p className="mt-[6px] text-[14px] leading-[18px] text-[#6B6580]">
                    Stay up to date with Shopify Editions and modern APIs.
                  </p>
                </div>
                <div className="mt-[24px] flex items-center justify-between rounded-[16px] border border-[#E2E8F0CC] bg-[#F8F9FE] px-[12px] py-[8px] shadow-[0px_1px_2px_0px_#0000000D]">
                  <div className="flex items-center gap-[8px]">
                    <img
                      src="https://pexio.app/assets/Shopify%20logo.svg"
                      alt="Shopify"
                      width={24}
                      height={24}
                      className="h-[24px] w-[24px] shrink-0 object-contain"
                    />
                    <span className="text-[12px] font-semibold text-[#1A1523]">
                      Shopify Editions Sync
                    </span>
                  </div>
                  <span className="rounded-[8px] bg-[#703CE1] leading-[16px] px-[12px] py-[4px] text-[11px] font-semibold text-white">
                    Auto-Sync
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
