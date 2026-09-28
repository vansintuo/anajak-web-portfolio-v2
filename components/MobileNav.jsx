"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, Logo } from "./Sidebar";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mobile-bar">
        <Logo />
        <button
          className="mobile-menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* <div className={`mobile-nav${open ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <div className="mt-auto pt-8 pb-16 px-4">
          <Link className="btn btn-primary w-full justify-center" href="/contact">
            Request Quote
          </Link>
        </div>
      </div> */}
    </>
  );
}
