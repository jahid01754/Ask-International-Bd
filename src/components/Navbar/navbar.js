"use client";

//General imports
import Image from "next/image";
import Link from "next/link";

//icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

//react state
import { useState } from "react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/aboutUs",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Enlistments",
      href: "/enlistments",
    },
    {
      name: "News",
      href: "/news",
    },
    {
      name: "Photo Gallery",
      href: "/photoGallery",
    },
    {
      name: "Testimonials",
      href: "/testimonials",
    },
    {
      name: "Contact Us",
      href: "/contactUs",
    },
  ];

  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="bg-nav w-full h-20  flex items-center justify-center ">
        <ul className="hidden md:flex items-center justify-center gap-10 ">
          {navItems.map((navItem, navItemIndex) => (
            <li key={navItemIndex} className="group relative">
              <Link
                href={navItem.href}
                className="font-ovo text-slate-400 hover:text-slate-200 transition duration-200 text-xl"
              >
                {navItem.name}
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-200 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden mr-auto px-6">
          <button className=" cursor-pointer ">
            <RxHamburgerMenu
              className={`text-slate-400 hover:text-slate-200 text-3xl transition duration-200 ${
                menu ? "hidden" : ""
              }`}
              onClick={() => setMenu(true)}
            />
          </button>
          <button className=" cursor-pointer ">
            <IoClose
              className={` text-slate-400 hover:text-slate-200 text-3xl transition duration-200 ${
                menu ? "" : "hidden"
              }`}
              onClick={() => setMenu(false)}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden w-full bg-nav px-6 absolute left-0 transition-all duration-500 ease-in-out overflow-hidden ${
          menu ? "max-h-[500px] py-6" : "max-h-[0px] py-0"
        }`}
      >
        {
          <ul className="space-y-4">
            {navItems.map((navItem, navItemIndex) => (
              <li key={navItemIndex} className="group relative">
                <Link
                  href={navItem.href}
                  className="text-slate-400 hover:text-slate-200 transition duration-200 font-ovo text-xl relative"
                >
                  {navItem.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-200 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
}
