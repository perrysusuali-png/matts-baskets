import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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
      <body className={`${poppins.className} relative`}>
        {children}
      </body>
    </html>
  );
}
