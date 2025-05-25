//General imports
import Image from "next/image";
import Link from "next/link";

//icons
import { GoArrowUpRight } from "react-icons/go";

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
  ];

  return (
    <nav className="w-full flex items-center justify-between px-4 lg:px-8 xl:px-[8% py-4">
      <Link href={"/"}>
        <Image
          src={"/Logo_header.png"}
          alt="Company Logo"
          height={100}
          width={100}
          className="min-w-[80%] min-h-[80%]"
        />
      </Link>

      <ul className="hidden md:flex md:items-center md:justify-center md:gap-3 lg:gap-8 ">
        {navItems.map((navItem, navItemIndex) => (
          <li key={navItemIndex}>
            <Link href={navItem.href}>{navItem.name}</Link>
          </li>
        ))}
      </ul>

      <div className="">
        <Link
          href={"/contact"}
          className="hidden md:flex items-center justify-between gap-2 "
        >
          Contact <GoArrowUpRight />
        </Link>
      </div>
    </nav>
  );
}
