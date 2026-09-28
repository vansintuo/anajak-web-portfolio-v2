import "./globals.css";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

export const metadata = {
  title: "Terravia — Rubber Road Engineering",
  description:
    "Advanced rubber road technology designed for stronger, more durable and sustainable infrastructure.",
  icons: {
    icon: "/photos/icon.svg",
    apple: "/photos/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body>
        <MobileNav />
        <div className="shell">
          <Sidebar />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
