import React from "react";
import Container from "./Container";
import Badge from "./Badge";

const cards = [
  {
    title: "Dedicated Merchant Support",
    text: "Direct contact with Shopify engineers who understand store architecture.",
    img: "https://pexio.app/images/desdicated.svg",
  },
  {
    title: "Speed-First Architecture",
    text: "Zero storefront bloat ensuring high Core Web Vitals and lightning load speeds.",
    img: "https://pexio.app/images/speed.svg",
  },
  {
    title: "Zero Bloat Guarantee",
    text: "Clean script injection that uninstalls completely with zero residual theme clutter.",
    img: "https://pexio.app/images/zero.svg",
  },
];

export default function Philosophy() {
  return (
    <section className="py-[40px] sm:py-[60px] md:py-[80px]border-t border-[#E4E2F0]">
      <Container>
        <div className="mx-auto text-center">
          <Badge>OUR PHILOSOPHY</Badge>
          <h2 className="mt-[16px] text-[28px] leading-[38px] font-semibold tracking-tight text-[#1A1523] md:text-[44px] md:leading-[52px]">
            Building Better Tools for the Future of Commerce.
          </h2>
          <p className="mt-[24px] text-[16px] leading-[23px] text-[#6B6580]">
            At Pexio, we believe technology should make e-commerce simpler,
            smarter and more effective. We build specialized Shopify
            applications that help merchants improve their workflows,
            experiment with new ideas and create better shopping experiences.
          </p>
        </div>

        <div className="mt-[32px] grid grid-cols-1 gap-[24px] md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-[16px] rounded-[12px] border border-[#E2E8F0] bg-white p-[24px] shadow-[0px_2px_10px_0px_#00000005,0px_20px_45px_-15px_#7350E614]"
            >
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[12px] border border-[#E2E8F0]">
                <img
                  src={c.img}
                  alt=""
                  className="w-[23px] shrink-0 object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-semibold text-[#1A1523]">
                  {c.title}
                </h3>
                <p className="mt-[4px] text-[12px] leading-[16px] text-[#6B6580]">
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}