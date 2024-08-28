import React from "react";

import NavLink from "./NavLink";

// Mobile navigation component
const MenuOverlay = ({ links, setNavBarOpen }) => {
  return (
    // List each navigation link as a `NavLink` component
    // Each of which can collapse this component on click
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            onClick={() => setNavBarOpen(false)}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
