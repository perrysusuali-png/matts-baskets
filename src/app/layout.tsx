import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Matts Baskets | Home",
  description: "Matts Baskets - Authentic African woven art. Handcrafted baskets with tradition, culture, and craftsmanship.",
  openGraph: {
    title: "Matts Baskets - Authentic African Woven Art",
    description: "Explore handcrafted baskets made with tradition, patience, and natural fibers.",
    images: ["/images/basket6.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{ position: 'relative' }}>
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          opacity: 0.1,
          pointerEvents: 'none'
        }}>
          <img
            src="/logo_matts_basket.jpg"
            alt="Matt's Baskets Logo"
            style={{
              width: '120px',
              height: 'auto',
              filter: 'grayscale(100%)'
            }}
          />
        </div>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
