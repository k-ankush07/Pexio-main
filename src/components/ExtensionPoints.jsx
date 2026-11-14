import React from "react";
import Container from "./Container";

const tags = [
  "Theme app extensions",
  "Checkout UI extensions",
  "Shopify Functions",
  // "Metafields",
  // "Shop Pay",
];

export default function ExtensionPoints() {
  return (
    <section className="border-b border-[#E4E2F0] bg-white">
      <Container>
        <div className="flex flex-col items-start gap-[16px] py-[28px] lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[14px] sm:text-[16px] font-[400] text-[#1A1523]">
            Built on Shopify&apos;s supported extension points
          </p>
          <ul className="flex flex-wrap gap-[12px] justify-around">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-[#E2E8F0] bg-white px-[14px] py-[6px] text-[12px] font-medium text-[#1A1523]"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
