import React from 'react'

const variants = {
  primary: 'bg-[#703CE1] text-white hover:bg-[#5f30c4]',
  white: 'bg-white text-[#703CE1] hover:bg-[#f4efff]',
  outline: 'bg-white text-[#1a1a2e] border border-dashed border-[#703CE1] hover:bg-[#f4efff]',
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function Button({ children, variant = 'primary', arrow = false, className = '', ...props }) {
  return (
    <button
      className={`h-[45px] inline-flex items-center justify-center gap-[5px] rounded-[8px] px-10 py-4 text-[14px] font-semibold cursor-pointer transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && <ArrowRight />}
    </button>
  )
}
