import React from "react";
import Container from "./Container";
import Button from "./Button";

export default function CtaBanner() {
  return (
    <section className="pb-[40px] md:pb-[80px] border-b border-[#E2E8F0]">
      <Container>
        <div className="rounded-[24px] md:rounded-[40px] bg-[url('https://pexio.app/images/Container.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[32px] md:py-[60px] text-center md:px-[40px]">
          <span className="inline-flex items-center gap-[6px] rounded-full bg-[#FFFFFFE5] px-[12px] py-[5px] text-[12px] font-semibold tracking-[0.04em] text-[#703CE1]">
            <span className="h-[8px] w-[8px] rounded-full bg-[#703CE1]" />
            TRANSFORM YOUR COMMERCE STACK
          </span>
          <h2 className="mx-auto mt-[16px] max-w-[500px] text-[28px] leading-[38px] font-semibold tracking-tight text-white md:text-[44px] md:leading-[52px]">
            Ready to take your Shopify store further?
          </h2>
          <p className="mt-[10px] text-[16px] leading-[23px] text-[#FFFFFFD9]">
            Explore our ecosystem of Shopify applications and find the right
            tools for your business.
          </p>
          <Button variant="white" arrow className="mt-[32px]">
            Explore All Apps
          </Button>
        </div>
      </Container>
    </section>
  );
}
