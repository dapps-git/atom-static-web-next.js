import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ATOM – Inspiration of Science | Entrance Coaching for NEET, JEE, CUET, KEAM & More",
  description: "ATOM is a leading entrance coaching institute for NEET, JEE, CUET, CUSAT, KEAM, and IISER. Build strong fundamentals with experienced faculty, comprehensive study materials, mock tests, and dedicated doubt-clearing sessions.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "ATOM – Inspiration of Science | Entrance Coaching for NEET, JEE, CUET, KEAM & More",
    description: "ATOM is a leading entrance coaching institute for NEET, JEE, CUET, CUSAT, KEAM, and IISER. Build strong fundamentals with experienced faculty.",
    url: "https://atomeducation.in",
    siteName: "ATOM Education",
    images: [
      {
        url: "/footer-logo.webp",
        width: 1200,
        height: 630,
        alt: "ATOM Education - Inspiration of Science",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATOM – Inspiration of Science | Entrance Coaching",
    description: "Leading entrance coaching for NEET, JEE, CUET, CUSAT, KEAM, and IISER.",
    images: ["/footer-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} ${poppins.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
