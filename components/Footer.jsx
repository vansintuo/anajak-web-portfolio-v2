import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-mark">
              <Image
                src="/photos/icon-light-32x32.png"
                alt="ANAJAK logo"
                fill
                sizes="28px"
              />
            </div>
            <span className="logo-text">
              ANAJAK
            </span>
          </div>
          <p className="footer-tagline">Building Roads. Building Tomorrow.</p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/products">Products</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <Link href="/solutions">Rubber Road Solutions</Link>
          <Link href="/solutions">Asphalt Solutions</Link>
          <Link href="/solutions">Rubber Recycling</Link>
          <Link href="/solutions">Road Maintenance</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:info@ANAJAK-roads.com">info@ANAJAK-roads.com</a>
          <a href="tel:+85523000000">+855 23 XXX XXX</a>
          <span className="footer-static">Phnom Penh, Cambodia</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ANAJAK Road Engineering. All rights reserved.</span>
        <div className="footer-social">
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
    </footer>
  );
}
