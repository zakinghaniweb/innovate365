
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Innovate365",
  description: "A-Z Web Development Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
