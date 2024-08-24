"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false); // For mobile nav menu
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            {/* Navigation bar container */}
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">

                {/* Logo link */}
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                    LOGO
                </Link>
                
                {/* Button for opening/closing mobile nav menu */}
                <div className="mobile-menu block md:hidden">
                    {
                        !navBarOpen ? (
                            // Hamburger button to open
                            <button
                                onClick={() => setNavBarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            // X button to close
                            <button
                                onClick={() => setNavBarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>

                {/* Desktop nav menu */}
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            // List each navigation link from `navLinks` array
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* Display mobile nav menu appropriately */}
            { navBarOpen ? <MenuOverlay links={navLinks} /> : null }
        </nav>
    );
};

export default NavBar;