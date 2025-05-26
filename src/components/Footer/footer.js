import Image from "next/image";
import Link from "next/link";

import { IoLocationSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";

import { FaAngleRight } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-nav mt-10">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 lg:grid-cols-4  items-start py-20 space-y-10 md:space-y-0 px-7">
            <div className=" col-span-2 md:col-span-1 ">
              <Image
                src={"/Logo_Footer.png"}
                alt="Logo"
                width={1500}
                height={1500}
                className="w-40 h-auto "
              />
              <p className="text-slate-200 text-wrap w-full md:w-[40%] font-ovo  mt-8">
                We pride ourselves on being the go-to destination for discerning
                consumers and businesses alike, seeking superior quality in
                garments, machineries, computer hardware, security equipment,
                defense apparatus, and spare parts.
              </p>
            </div>
            <div className="">
              <p className="text-slate-200 text-2xl font-ovo">About Us</p>
              {/* <div className="bg-slate-600 w-full h-[1px]"></div> */}
              <div className="mt-8 space-y-8 flex flex-col">
                <Link
                  href={"/aboutUs"}
                  className="text-slate-200  hover:text-white transition-colors duration-300 cursor-pointer font-ovo"
                >
                  About Ask Intl BD
                </Link>
                <Link
                  href={"/products"}
                  className="text-slate-200  hover:text-white transition-colors duration-300 cursor-pointer font-ovo"
                >
                  Products
                </Link>
                <Link
                  href={"/contactUs"}
                  className="text-slate-200  hover:text-white transition-colors duration-300 cursor-pointer font-ovo"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <p className="text-slate-200  text-2xl font-ovo">Useful Links</p>
              <div className="mt-8 space-y-8 flex flex-col">
                <Link
                  href="https://cmtd.army.mil.bd/cmtd"
                  target="_blank"
                  className="text-slate-200  hover:text-white  duration-300 cursor-pointer font-ovo flex items-center gap-2 hover:text-xl transition-all"
                >
                  <FaAngleRight />
                  CMTD
                </Link>

                <Link
                  href="https://dgdp.gov.bd/"
                  target="_blank"
                  className="text-slate-200  hover:text-white duration-300 cursor-pointer font-ovo flex items-center gap-2 hover:text-xl transition-all"
                >
                  <FaAngleRight />
                  DGDP
                </Link>
                <Link
                  href="https://en.wikipedia.org/wiki/Directorate_General_of_Forces_Intelligence"
                  target="_blank"
                  className="text-slate-200 hover:text-white duration-300 cursor-pointer font-ovo flex items-center gap-2 hover:text-xl transition-all"
                >
                  <FaAngleRight />
                  DGFI
                </Link>
              </div>
            </div>
            <div>
              <p className="text-slate-200  text-2xl font-ovo">Contact us</p>
              <div className="space-y-8">
                <div className="flex flex-row gap-4 mt-8">
                  <FaFacebookF className="bg-white hover:bg-[#2d3056]  hover:text-slate-200 w-8 h-auto rounded-md p-1 cursor-pointer transition-colors duration-300 hover:border hover:border-white" />

                  <FaTwitter className="bg-white hover:bg-[#2d3056] hover:text-slate-200 w-8 h-auto rounded-md p-1 cursor-pointer transition-colors duration-300 hover:border hover:border-white" />

                  <FaDribbble className="bg-white hover:bg-[#2d3056] hover:text-slate-200 w-8 h-auto rounded-md p-1 cursor-pointer transition-colors duration-300 hover:border hover:border-white" />

                  <FaBehance className="bg-white hover:bg-[#2d3056] hover:text-slate-200 w-8 h-auto rounded-md p-1 cursor-pointer transition-colors duration-300 hover:border hover:border-white" />
                </div>
                <div className="flex flex-row  items-center gap-3">
                  <IoLocationSharp className="text-slate-200  text-4xl " />
                  <p className="text-slate-200 font-ovo">
                    F Hoque Tower, Level 03, 107 CR Dutta Road, Pantha Path,
                    Dhaka 1205
                  </p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <SiMinutemailer className="text-slate-200 text-2xl" />
                  <p className="text-slate-200 font-ovo text-lg">
                    contact@askintlbd.com
                  </p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <CiGlobe className="text-slate-200 text-2xl" />
                  <p className="text-slate-200 font-ovo text-lg">
                    askintlbd.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-600 w-full h-[1px]"></div>
          <div className="flex flex-col md:flex-row justify-evenly items-center mt-7 pb-7 space-y-4">
            <div>
              <p className="text-slate-200 font-ovo">
                Copyright &copy; 2025 Ask Intl BD. All rights reserved.
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <Link
                href={"/terms&conditions"}
                className="text-slate-200 hover:text-primary transition-colors duration-300 font-ovo"
              >
                Disclaimer
              </Link>
              <Link
                href={"/terms&conditions"}
                className="text-slate-200 hover:text-primary transition-colors duration-300 font-ovo"
              >
                Terms & Condition
              </Link>
              <Link
                href={"/privacyPolicy"}
                className="text-slate-200 hover:text-primary transition-colors duration-300 font-ovo"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
