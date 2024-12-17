import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ReduxProvider } from "@/store/provider";
import { Suspense } from "react";
import Loading from "./loading";
import QueryProvider from "@/services/QueryClientProvider";
import AboutSection from "./components/layout/FooterComponents/AboutSection";

export const metadata: Metadata = {
  title: "Furniro Store",
  description: "Furniro online shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ReduxProvider>
            <Header />
            <Suspense fallback={<Loading />}>
              <main>{children}</main>
            </Suspense>
            <AboutSection />
            <Footer />
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
