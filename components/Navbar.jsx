import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full fixed flex md:h-[76px] md:top-6 justify-center items-center z-20">
      <nav className="w-full  md:w-[75rem] h-full bg-white md:rounded-md px-6 py-4 flex justify-around items-center shadow-md">
        <Link href="#hero">
          <Image
            src="/logo.png"
            className="hidden md:block"
            width={174}
            height={44}
            alt="logo"
          />
        </Link>

        <Image
          src="/logo.png"
          className="md:hidden"
          width={140}
          height={44}
          alt="logo"
        />

        <div className=" hidden w-[26rem] h-5 text-sm md:flex justify-start">
          <Link href="#services" className="px-3">
            Services
          </Link>
          <Link href="#cases" className="px-3">
            Cases
          </Link>
          <Link href="#media" className="px-3">
            Media
          </Link>

          <Link href="#faq" className="px-3">
            FAQ
          </Link>
          <Link href="#contact" className="px-3">
            Contacts
          </Link>
        </div>
        <div className="hidden h-5 text-sm md:flex  justify-between">
          <div>
            <h3 className="px-3 text-[#80A948] font-medium">+918878887765</h3>
          </div>
          <div>
            <h3 className="px-3 text-[#80A948] font-medium">
              desuntechnology@gmail.com
            </h3>
          </div>
        </div>
        <div className=" md:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
