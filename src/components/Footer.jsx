import Container from "./Container";

const A = "https://apps.pexio.app/images";

const links = [
  { label: "Our Apps", href: "/#apps" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms-and-condition" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <Container>
        <div className="flex flex-col items-center pt-[40px] text-center md:pt-[48px]">
          <a
            href="/"
            aria-label="Pexio AB Testing home"
            className="inline-block"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="https://pexio.app/images/Brand%20Logo%20Area.svg"
              alt="Pexio AB Testing"
              className="h-auto w-[110px] object-contain md:w-[130px]"
            />
          </a>

          <p className="mt-[20px] text-[14px] sm:text-[16px] leading-[23px] text-[#6B6580]">
           Building smarter Shopify solutions for business growth.
          </p>

          <nav className="mt-[20px] mb-[22px] grid w-full grid-cols-2 overflow-hidden rounded-[12px] border border-[#E2E8F0] sm:mb-0 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-[32px] sm:gap-y-[10px] sm:overflow-visible sm:rounded-none sm:border-0 sm:pb-[22px]">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="py-[12px] text-[14px] text-[#1A1523] transition hover:text-[#703CE1] max-sm:odd:border-r max-sm:[&:nth-child(-n+2)]:border-b max-sm:border-[#E2E8F0] sm:py-0 sm:text-[18px]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-[#ECEAF3] py-[18px] text-center">
          <p className="text-[11px] sm:text-[14px] text-[#6B6580]">
            © 2026 Pexio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
