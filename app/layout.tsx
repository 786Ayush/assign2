import "./globals.css";
import { Poppins, Syne } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-syne",
});

export const metadata = {
  title: "Freelancer Profile",
  description: "Your App Description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <head >
        <link rel="icon" href="/brand.svg" type="image/svg+xml" />
        </head>
      <body className={`${poppins.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
