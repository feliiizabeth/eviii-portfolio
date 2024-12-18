"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title, onClick }) => {
  const pathname = usePathname();

  const handleClick = (e) => {
    const isHome = href === "/";
    const isHashLink = href.startsWith("/#");
    const targetSectionId = href.split("#")[1]; // Extract requested ID

    // If on home page
    if (pathname === "/") {
      if (isHome) {
        // Scroll to top
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (isHashLink && targetSectionId) {
        // Scroll to target by ID
        e.preventDefault();
        const section = document.getElementById(targetSectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    // Close MenuOverlay for mobile nav
    if (onClick) onClick();
  };

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;
