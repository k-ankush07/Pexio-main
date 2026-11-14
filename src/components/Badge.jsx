import React from "react";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-[6px] rounded-full bg-white px-[12px] py-[5px] text-[12px] font-semibold tracking-[0.03em] sm:tracking-[0.04em] text-[#703CE1] shadow-[0px_0px_0px_1px_#E2E8F0] ${className}`}
    >
      <span className="h-[8px] w-[8px] rounded-full bg-[#703CE1]" />
      {children}
    </span>
  );
}