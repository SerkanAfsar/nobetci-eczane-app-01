import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";

import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      {/* <GoogleTagManager gtmId="G-6MLYNK12P4" /> */}

      <body
        className={`${poppins.variable} font-poppins flex flex-col antialiased`}
      >
        <Header />
        <main className="block w-full flex-auto">{children}</main>
        <Footer />
        <Analytics />
        <NextTopLoader
          color="#cc0000"
          height={4}
          showSpinner={true}
          zIndex={1600}
        />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=G-6MLYNK12P4`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-6MLYNK12P4');
            `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
