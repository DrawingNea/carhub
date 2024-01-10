import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Car Hub",
  description: "Discover a car made for your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
