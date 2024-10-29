"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  console.log(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const navLinks = [
    { href: "/Home", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Services", label: "Services" },
    { href: "/Menu", label: "Menu" },
  ];

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white fixed shadow-lg z-50 top-0 right-0 left-0 mt-10">
      <div className="p-2 sm:p-2 lg:p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-Black text-2xl font-bold">
              BANARAS CATERERS
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    onClick={() => handleLinkClick(link.href)} // Set active on click
                    className={`${
                      activeLink === link.href
                        ? "bg-blue-800 text-white"
                        : "text-black hover:bg-blue-700 hover:text-white"
                    } px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  onClick={() => handleLinkClick(link.href)} // Set active on click
                  className={`${
                    activeLink === link.href
                      ? "bg-blue-800 text-white"
                      : "text-black hover:bg-blue-700 hover:text-white"
                  } block px-3 py-2 rounded-md text-base font-medium cursor-pointer`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
