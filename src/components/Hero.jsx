import React from "react";
import Container from "./Container";
import Button from "./Button";

const ASSETS = "https://pexio.app/images";

const goToApps = () =>
  document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section className="pt-[40px] pb-[40px] md:pt-[60px] md:pb-[80px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-[40px] md:grid-cols-2">
          {/* Left content */}
          <div>
            <span className="inline-flex items-center gap-[6px] rounded-full bg-[#FFFFFF] px-[12px] py-[5px] text-[12px] font-semibold tracking-[0.04em] text-[#703CE1]">
              <span className="h-[8px] w-[8px] rounded-full bg-[#703CE1]" />
              THE PEXIO ECOSYSTEM
            </span>

            <h1 className="mt-[10px] max-w-full md:max-w-[590px] leading-[46px] font-semibold tracking-tight text-white text-[36px] sm:text-[55px] lg:text-[65px] leading-[40px] sm:leading-[58px] lg:leading-[65px]">
              One Ecosystem. Four Powerful Ways to Grow Your Shopify Store.
            </h1>

            <p className="mt-[20px] max-w-full md:max-w-[560px] text-[16px] leading-[23px] text-[#FFFFFFD9]">
              From smarter forms to conversion experiments, cart experiences and
              checkout workflows, Pexio brings essential Shopify tools together.
            </p>

            <div className="mt-[24px] sm:mt-[30px] flex flex-col gap-[12px] sm:flex-row">
              <Button variant="white" arrow onClick={goToApps}>
                Explore Our Apps
              </Button>
              {/* <Button
                variant="outline"
                className="!border-solid !border-white/70 !bg-transparent !text-white hover:!bg-white/10"
              >
                Discover Pexio
              </Button> */}
            </div>

          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={`${ASSETS}/main-img.svg`}
              alt="Pexio app ecosystem"
              className="w-full max-w-[560px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
