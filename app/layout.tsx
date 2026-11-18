import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yaser-portfolio-two.vercel.app"),
  title: "Yaser Honini — Full Stack & Mobile Developer",
  description: "Thoughtful web and mobile experiences by Yaser Honini. Explore Flutter applications, modern interfaces, and full stack development projects.",
  alternates: { canonical: "/" },
  openGraph: { title: "Yaser Honini — Your next big idea. Built right.", description: "Explore my selected web and mobile development projects.", type: "website", locale: "en_US" },
  twitter: { card: "summary", title: "Yaser Honini — Full Stack & Mobile Developer", description: "Thoughtful web and mobile experiences." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
