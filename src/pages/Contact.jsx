import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Button from "../components/Button";

const API_URL = import.meta.env.VITE_API_URL || "https://experiments.pexio.app/backend-api";
const HERO_BG = "https://pexio.app/images/Contact%20hero.png";

const APPS = [
  "Syncform",
  "Pexio A/B Testing",
  "Cartplus",
  "Checkout CRM",
  "Not sure yet",
];
const TOPICS = ["General topic", "General Queries"];

const REASONS = [
  {
    n: "01",
    title: "Help with a Pexio app",
    text: "Questions about setup, features or an issue? Tell us which app you're using and what you need.",
  },
  {
    n: "02",
    title: "Find the right solution",
    text: "Not sure where to start? Share your goals and we'll help you explore the Pexio ecosystem.",
  },
  {
    n: "03",
    title: "Partnerships & ideas",
    text: "Building something for Shopify merchants? We'd love to hear what you have in mind.",
  },
];

const inputClass =
  "w-full h-[52px] rounded-[8px] border border-[#E2E8F0] bg-white px-[14px] py-[12px] text-[14px] text-[#1A1523] outline-none transition placeholder:text-[#9A95AB] focus:border-[#703CE1] focus:shadow-[0px_0px_0px_3px_#703CE11A]";

const Field = ({ label, required, children }) => (
  <label className="block text-left">
    <span className="mb-[6px] block text-[14px] font-medium text-[#1A1523]">
      {label}
      {required && " *"}
    </span>
    {children}
  </label>
);

const Select = ({ placeholder, options, ...props }) => (
  <div className="relative">
    <select
      {...props}
      className={`${inputClass} cursor-pointer appearance-none pr-[40px] ${
        props.value ? "" : "text-[#9A95AB]"
      }`}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
    <svg
      className="pointer-events-none absolute top-1/2 right-[14px] -translate-y-1/2"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6B6580"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    store: "",
    app: "",
    topic: "",
    message: "",
    agree: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const [status, setStatus] = useState({ type: "idle", text: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.type === "loading") return;
    setStatus({ type: "loading", text: "" });

    const payload = {
      name: form.name,
      email: form.email,
      store: form.store,
      app: form.app,
      topic: form.topic,
      message: form.message,
    };

    try {
      const res = await fetch(`${API_URL}/website-contact/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setStatus({
        type: "success",
        text: "Thanks! Your message has been sent. We'll get back to you soon.",
      });
      setForm({
        name: "",
        email: "",
        store: "",
        app: "",
        topic: "",
        message: "",
        agree: false,
      });
    } catch (err) {
      setStatus({
        type: "error",
        text: err.message || "Something went wrong. Please try again.",
      });
    }
  };

  useEffect(() => {
    if (status.type !== "success" && status.type !== "error") return;
    const t = setTimeout(() => setStatus({ type: "idle", text: "" }), 3000);
    return () => clearTimeout(t);
  }, [status]);

  return (
    <div>
      {/* Hero */}
      <div
        className="bg-[#5B2FC4] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      >
        <Navbar />
        <section className="px-[20px] pt-[40px] pb-[60px] text-center md:pt-[60px] md:pb-[90px]">
          <h1 className="mx-auto max-w-[760px] text-[32px] leading-[40px] font-semibold tracking-tight text-white md:text-[52px] md:leading-[62px]">
            Let&apos;s build your next chapter.
          </h1>
          <p className="mx-auto mt-[16px] max-w-[415px] text-[14px] leading-[22px] text-[#FFFFFFD9] md:text-[16px]">
            A question about an app? A new idea for your store? Tell us
            what&apos;s on your mind. We&apos;re here to help.
          </p>
        </section>
      </div>

      {/* Content */}
      <section className="py-[40px] md:py-[80px]">
        <Container>
          <div className="mx-auto grid gap-[40px] lg:grid-cols-[2fr_3fr] lg:gap-[60px]">
            {/* Left */}
            <div className="text-left hidden lg:block">
              <p className="text-[12px] font-semibold tracking-[0.04em] text-[#703CE1]">
                GET IN TOUCH
              </p>
              <h2 className="mt-[12px] text-[28px] leading-[34px] font-semibold tracking-tight text-[#1A1523] md:text-[36px] md:leading-[42px]">
                Good conversations.
                <br />
                Better commerce.
              </h2>
              <p className="mt-[16px] max-w-[400px] text-[14px] leading-[24px] text-[#6B6580] md:text-[16px]">
                Whether you&apos;re getting started or growing with Pexio,
                let&apos;s find the right next step for your store.
              </p>

              <ul className="mt-[32px] space-y-[24px]">
                {REASONS.map((r) => (
                  <li key={r.n}>
                    <div className="flex items-center gap-[12px]">
                      <span className="text-[11px] font-semibold text-[#703CE1]">
                        {r.n}
                      </span>
                      <h3 className="text-[18px] font-semibold text-[#1A1523]">
                        {r.title}
                      </h3>
                    </div>
                    <p className="mt-[6px] pl-[26px] max-w-[430px] text-[14px] leading-[22px] text-[#6B6580]">
                      {r.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <form
              onSubmit={onSubmit}
              className="space-y-[16px] rounded-[16px] border border-[#E2E8F0] bg-white p-[20px] md:p-[30px] shadow-[0px_8px_32px_0px_#703CE112] md:p-[28px]"
            >
              <div>
                <h2 className="text-[28px] font-semibold text-[#1A1523]">
                  Send us a message
                </h2>
                <p className="mt-[4px] text-[13px] text-[#6B6580]">
                  Tell us a little about you and how we can help.
                </p>
              </div>

              <div className="grid gap-[20px] sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email address" required>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Shopify store URL">
                <input
                  name="store"
                  value={form.store}
                  onChange={onChange}
                  placeholder="your-store.myshopify.com"
                  className={inputClass}
                />
              </Field>

              <div className="grid gap-[16px] sm:grid-cols-2">
                <Field label="Which app?">
                  <Select
                    name="app"
                    value={form.app}
                    onChange={onChange}
                    placeholder="Select an app"
                    options={APPS}
                  />
                </Field>
                <Field label="How can we help?" required>
                  <Select
                    name="topic"
                    required
                    value={form.topic}
                    onChange={onChange}
                    placeholder="Select a topic"
                    options={TOPICS}
                  />
                </Field>
              </div>

              <Field label="Your message" required>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us what you'd like help with..."
                  className={`${inputClass} h-auto min-h-[130px] resize-y`}
                />
              </Field>

              <label className="flex cursor-pointer items-start gap-[10px] text-left text-[12px] leading-[18px] text-[#6B6580]">
                <input
                  type="checkbox"
                  name="agree"
                  required
                  checked={form.agree}
                  onChange={onChange}
                  className="h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-[4px] border border-[#CFC6DF] bg-white bg-center bg-no-repeat bg-[length:100%_100%] checked:border-[#703CE1] checked:bg-[#703CE1] checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2016%2016%27%20fill=%27none%27%20stroke=%27white%27%20stroke-width=%272.5%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3E%3Cpath%20d=%27M3.5%208.5l3%203%206-6%27/%3E%3C/svg%3E')] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#703CE1]"
                />
                <span>
                  I agree to the Privacy Policy and consent to being contacted
                  about my inquiry.
                </span>
              </label>

              <Button
                type="submit"
                arrow={status.type !== "loading"}
                disabled={status.type === "loading"}
                className="w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.type === "loading" ? "Sending..." : "Send message"}
              </Button>

              {status.text && (
                <p
                  role="status"
                  className={`text-left text-[13px] ${
                    status.type === "success"
                      ? "text-[#12B27A]"
                      : "text-[#D92D20]"
                  }`}
                >
                  {status.text}
                </p>
              )}

              <p className="text-left text-[11px] text-[#6B6580]">
                * Required fields. Your details are only used to respond to your
                inquiry.
              </p>
            </form>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
