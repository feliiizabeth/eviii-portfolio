import Link from "next/link";

// Stylized navigation link component
const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={onClick} // Close MenuOverlay
    >
      {title}
    </Link>
  );
};

export default NavLink;
