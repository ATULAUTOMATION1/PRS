import { Inter, Outfit, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://prsgroup.in'),
  title: {
    default: "PRS GROUP | Integrated Industrial Infrastructure & Protection Solutions",
    template: "%s | PRS GROUP"
  },
  description: "PRS Group is a tier-1 industrial conglomerate specializing in PEB engineering, advanced industrial coatings, and infrastructure management. Leading with precision and safety-first industrial expertise.",
  keywords: "PRS Group, PEB Engineering, Industrial Painting, Infrastructure Management, Project Management, Construction, Jamshedpur, Delhi, TATA Steel Vendor, Industrial Solutions",
  openGraph: {
    title: "PRS GROUP | Industrial Infrastructure Leaders",
    description: "Multi-disciplinary excellence in Steel Engineering and Advanced Coatings.",
    url: "https://prsgroup.in",
    siteName: "PRS GROUP",
    images: ["/images/hero.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRS GROUP",
    description: "Integrated industrial infrastructure & protection specialists.",
    images: ["/images/hero.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}
