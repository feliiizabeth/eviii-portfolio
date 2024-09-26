import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EVIII Portfolio",
  description: "Showcasing my expertise in programming and art through a responsive portfolio. Explore my technical and creative projects, designed to attract potential employers and collaborators with intuitive navigation and clean design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Dummy script tag to prevent Firefox FOUC */}
        <script>0</script>
        {children}
      </body>
    </html>
  );
}
