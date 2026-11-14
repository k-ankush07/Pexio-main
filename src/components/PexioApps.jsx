import React from "react";
import Container from "./Container";
import Badge from "./Badge";

const ASSETS = "https://pexio.app/images";

const apps = [
  {
    name: "Syncform",
    label: "FORMS & SYNCHRONIZATION",
    logo: `${ASSETS}/syncform-logo.svg`,
    image: `${ASSETS}/syncform.svg`,
    description:
      "Create custom forms for your Shopify store and collect submissions with real-time admin sync — no coding required.",
    features: [
      "Drag-and-drop form builder with customizable fields and layouts",
      "Real-time Shopify Metafield sync to Customer & Order records",
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
    image: `${ASSETS}/Pexio-Experiment-Dashboard 4.svg`,
    description:
      "Run powerful A/B and multivariate tests on your storefront, then let real statistical data guide every merchandising and UX decision.",
    features: [
      "Launch native OS 2.0 block & section tests without touching a developer",
      "Visual editor for block, section, and theme-level experiments",
      "Know exactly which variant drives more checkout revenue",
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
    image: `${ASSETS}/Mask group.webp`,
    description:
      "Replace your default cart with a high-converting slide-out cart drawer that upsells, cross-sells, and keeps shoppers checking out faster.",
    features: [
      "Fully branded slide-out cart drawer with free shipping progress bar",
      "Reduce cart abandonment with real-time inventory and urgency alerts",
      "Boost AOV with tiered free shipping and gift-with-purchase rewards",
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
      "Build fully custom checkout pages and high-converting sales funnels with a drag-and-drop page builder — no developers required.",
    features: [
      "Drag-and-drop page builder for checkout, upsell, and thank-you pages",
      "Real-time funnel analytics with revenue attribution per step",
      "Boost revenue with one-click upsells and downsells at checkout",
    ],
    cta: "Coming Soon",
    href: "#",
    disabled: true,
    card: "bg-[#FFF4F0]",
    accent: "text-[#6B6580]",
    button: "bg-[#C0775C]",
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
      className={`${app.card} flex flex-col rounded-[24px] border border-[#E2E8F0] p-[24px] md:p-[32px] shadow-[0px_4px_16px_0px_#703CE10D,0px_1px_3px_0px_#1018280A] md:p-6`}
    >
      {" "}
      {/* Preview image */}
      <div className="flex h-[240px] items-center justify-center sm:h-[300px] md:h-[340px]">
        <img
          src={app.image}
          alt={`${app.name} preview`}
          loading="lazy"
          className="h-full w-full object-contain"
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
          <h3 className="text-[24px] md:text-[30px] leading-[28px] font-bold text-[#1A1523]">
            {app.name}
          </h3>
        </div>
      </div>
      <p className="mt-[20px] text-[14px] md:text-[16px] leading-[20px] text-[#6B6580]">
        {app.description}
      </p>
      <ul className="mt-[20px] mb-[20px] flex flex-col gap-[12px]">
        {app.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-[10px] text-[13px]  md:text-[14px] font-[500] leading-[18px] text-[#1A1523]"
          >
            <CheckIcon src={app.check} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {app.disabled ? (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className={`mt-auto flex h-[44px] w-full cursor-not-allowed items-center justify-center gap-[6px] rounded-[8px] text-[14px] font-semibold text-white opacity-60 ${app.button}`}
        >
          {app.cta}
        </button>
      ) : (
        <a
          href={app.href}
          className={`mt-auto flex h-[44px] items-center justify-center gap-[6px] rounded-[8px] text-[14px] font-semibold text-white transition-colors ${app.button}`}
        >
          {app.cta}
          <Arrow />
        </a>
      )}
    </article>
  );
}

export default function PexioApps() {
  return (
    <section id="apps" className="scroll-mt-[20px] py-[40px] md:py-[80px]">
      <Container>
        {/* Heading */}
        <div className="mx-auto text-center">
          <Badge>PRODUCT ECOSYSTEM</Badge>

          <h2 className="mt-[10px] text-[28px] leading-[28px] font-semibold tracking-tight text-[#1A1523] md:text-[44px] md:leading-[52px]">
            Meet the Pexio App Ecosystem
          </h2>

          <p className="mt-[20px]  leading-[24px] md:leading-[28px] text-[#6B6580] text-[14px] sm:text-[16px]">
            Four specialized applications. One mission: making Shopify commerce
            smarter, simpler and more effective.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-[30px] grid grid-cols-1 gap-[24px] md:gap-[30px] md:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </Container>
    </section>
  );
}
