import React from "react";
import Container from "./Container";
import Badge from "./Badge";

const ASSETS = "https://pexio.app/assets";

const apps = [
  {
    name: "Syncform",
    label: "FORMS & SYNCHRONIZATION",
    logo: `${ASSETS}/syncform-logo.svg`,
    image: `${ASSETS}/syncform.svg`,
    description:
      "Simplify form workflows and keep important business information connected with real-time Shopify admin mapping.",
    features: [
      "Real-time Shopify Metafield sync to Customer & Order records",
      "Custom B2B and wholesale dynamic conditional inquiry logic",
      "Instant scriptless speed via native Shopify theme app extensions",
    ],
    cta: "Explore Syncform",
    href: "#",
    card: "bg-[#EFFFF7]",
    accent: "text-[#6B6580]",
    button: "bg-[#12B27A] hover:bg-[#0F9D6C]",
    check: `${ASSETS}/syncform-cirlce.svg`,
  },
  {
    name: "Pexio A/B Testing",
    label: "CONVERSION OPTIMIZATION",
    logo: `${ASSETS}/pexioab-logo.svg`,
    image: `${ASSETS}/pexioab.svg`,
    description:
      "Run experiments, compare storefront experiences and make smarter operational decisions with real statistical precision.",
    features: [
      "Native OS 2.0 block & section testing without developer overhead",
      "Zero-flicker edge execution script guaranteeing speed score preservation",
      "Statistical confidence scoring with full checkout revenue tracking",
    ],
    cta: "Explore Pexio A/B testing",
    href: "#",
    card: "bg-[#FCFAFF]",
    accent: "text-[#703CE1]",
    button: "bg-[#703CE1] hover:bg-[#5F2FCB]",
    check: `${ASSETS}/cart-circle.svg`,
  },
  {
    name: "Cartplus",
    label: "CART OPTIMIZATION",
    logo: `${ASSETS}/cart-logo.svg`,
    image: `${ASSETS}/cart-img.svg`,
    description:
      "Create better shopping cart experiences and unlock opportunities to dramatically increase average order value.",
    features: [
      "Dynamic free shipping, tier discounts & complimentary gift progression",
      "AI-driven in-cart upsells, product cross-sells and smart bundle triggers",
      "Accelerated 1-click discount redemption and Shop Pay checkout sync",
    ],
    cta: "Explore Cartplus",
    href: "#",
    card: "bg-[#FCFAFF]",
    accent: "text-[#703CE1]",
    button: "bg-[#703CE1] hover:bg-[#5F2FCB]",
    check: `${ASSETS}/cart-circle.svg`,
  },
  {
    name: "Checkout CRM",
    label: "CHECKOUT & CRM",
    logo: `${ASSETS}/crm-logo.svg`,
    image: `${ASSETS}/checkoutcrm.svg`,
    description:
      "Bring greater visibility and real-time control to checkout workflows, VIP segmentation, and long-term customer management.",
    features: [
      "Zero checkout.liquid required 100% Checkout Extensibility ready",
      "Automated VIP customer tagging based on lifetime spending triggers",
      "Integrated post-purchase feedback surveys with instant ESP synchronization",
    ],
    cta: "Explore Checkout CRM",
    href: "#",
    card: "bg-[#FFF4F0]",
    accent: "text-[#6B6580]",
    button: "bg-[#C0775C] hover:bg-[#A9654B]",
    check: `${ASSETS}/crm-circle.svg`,
  },
];

function CheckIcon({ src }) {
  if (src) {
    return (
      <img src={src} alt="" className="h-[20px] w-[20px] shrink-0" />
    );
  }

  return (
    <span className="mt-[2px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border border-[#D5DBE5] bg-white">
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke="#7C8798"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AppCard({ app }) {
  return (
    <article
      className={`${app.card} flex flex-col rounded-[24px] border border-[#E2E8F0] p-[32px] shadow-[0px_4px_16px_0px_#703CE10D,0px_1px_3px_0px_#1018280A] md:p-6`}
    >
      {" "}
      {/* Preview image */}
      <div className="flex items-center justify-center">
        <img
          src={app.image}
          alt={`${app.name} preview`}
          loading="lazy"
          className="max-h-full w-full object-contain"
        />
      </div>
      {/* Title */}
      <div className="mt-[30px] flex items-center gap-[10px]">
        <img src={app.logo} alt="" className="h-[48px] w-[48px]" />
        <div>
          <p
            className={`text-[12px] font-medium tracking-[0.04em] ${app.accent}`}
          >
            {app.label}
          </p>
          <h3 className="text-[30px] leading-[28px] font-bold text-[#1A1523]">
            {app.name}
          </h3>
        </div>
      </div>
      <p className="mt-[20px] text-[16px] leading-[20px] text-[#6B6580]">
        {app.description}
      </p>
      <ul className="mt-[20px] flex flex-col gap-[12px]">
        {app.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-[10px] text-[14px] font-[500] leading-[18px] text-[#1A1523]"
          >
            <CheckIcon src={app.check} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={app.href}
        className={`mt-[20px] flex h-[44px] items-center justify-center gap-[6px] rounded-[8px] text-[14px] font-semibold text-white transition-colors ${app.button}`}
      >
        {app.cta}
        <Arrow />
      </a>
    </article>
  );
}

export default function PexioApps() {
  return (
    <section className="py-[80px]">
      <Container>
        {/* Heading */}
        <div className="mx-auto text-center">
          <Badge>PRODUCT ECOSYSTEM</Badge>

          <h2 className="mt-[10px] text-[32px] leading-[38px] font-semibold tracking-tight text-[#1A1523] md:text-[44px] md:leading-[52px]">
            Meet the Pexio App Ecosystem
          </h2>

          <p className="mt-[20px] text-[14px] leading-[28px] text-[#6B6580] md:text-[16px]">
            Four specialized applications. One mission: making Shopify commerce
            smarter, simpler and more effective.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-[30px] grid grid-cols-1 gap-[30px] md:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </Container>
    </section>
  );
}
