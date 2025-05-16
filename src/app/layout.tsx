import "./globals.css";
import { DM_Serif_Display, Noticia_Text } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const noticia = Noticia_Text({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--noticia-text-font",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--dm-serif-display-font",
});

export const metadata = {
  title: "RSD Website",
  description: "Created by ACM@UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bg-rsd-light-blue flex min-h-screen w-screen flex-col overflow-x-hidden ${noticia.className} ${dmSerifDisplay.className}`}
      >
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
