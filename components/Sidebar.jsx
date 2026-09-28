"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
        <path d="M4 11l8-6 8 6v8a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z" />
      </svg>
    ),
  },
  {
    href: "/projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
        <path d="M3 20l5-9 4 4 3-6 6 11z" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
  {
    href: "/products",
    label: "Products",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
        <rect x="4" y="7" width="16" height="11" rx="1" />
        <path d="M8 7V5h8v2" />
      </svg>
    ),
  },
  {
    href: "/solutions",
    label: "Solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
        <path d="M4 17l5-5 3 3 8-8" />
        <path d="M15 6h5v5" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact Us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
        <path d="M4 6l8 6 8-6" />
        <rect x="4" y="5" width="16" height="14" rx="1" />
      </svg>
    ),
  },
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function Logo() {
  return (
    <div className="logo" style={{ justifyContent: "center" }}>
      <span className="logo-text font-size-16">
        ANAJAK
      </span>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Logo />
      <nav className="nav">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item${isActive(pathname, item.href) ? " active" : ""}`}
          >
            <span className="dash"></span>
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="sidebar-foot">
        <p className="tagline">
          Building Roads.
          <br />
          Building Tomorrow.
        </p>
        <div className="social">
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
            </svg>
          </a>
          <a href="#" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
          <a href="#" aria-label="Phone">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
              <path d="M6 3h3l2 5-2 1a11 11 0 006 6l1-2 5 2v3a2 2 0 01-2 2A16 16 0 014 5a2 2 0 012-2z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}

export { NAV_ITEMS, Logo };
