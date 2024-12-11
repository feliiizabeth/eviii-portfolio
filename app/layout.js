import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "EVIII Portfolio",
  description:
    "Showcasing my expertise in programming and art through a responsive portfolio. Explore my technical and creative projects, designed to attract potential employers and collaborators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* Dummy script tag to prevent Firefox FOUC */}
        <script>0</script>
        {children}
      </body>
    </html>
  );
}
