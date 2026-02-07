"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/public/img/logo.png";
import Ik1 from "@/public/img/ik1.png";
import Ik2 from "@/public/img/ik2.png";

import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navItems = [
  { label: "Materiallar va buyumlar", href: "/" },
  { label: "Mashina mexanizmlar", href: "/page3" },
  { label: "Qurilish ishlari", href: "qurilish ishlari" },
  { label: "Kichik mexanizatsiya", href: "/kichik-mexanizatsiya" },
  { label: "Uskuna va qurilmalar", href: "/uskuna-va-qurilmalar" },
  { label: "Klassifikator", href: "/klassifikator" },
  { label: "Bo'limlar", href: "/page6" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar - Toshkent + til */}
      <div className="bg-[#182041]">
        <div className="container1 hidden md:flex items-center justify-between">
          <div className="flex items-center gap-2 py-1">
            <FaMapMarkerAlt className="text-white text-lg" />
            <a
              href="#"
              className="text-white text-sm font-normal hover:underline"
            >
              Toshkent
            </a>
            {/* Dropdown arrow */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.76688 7.74189L10.0002 10.9752L13.2335 7.74189C13.3107 7.66473 ... " // qisqartirdim, o'zingnikini saqla
                fill="white"
              />
            </svg>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-white text-sm font-normal hover:underline cursor-pointer">
              Yo‘riqnoma
            </p>
            <select className="bg-transparent text-[#8e8e8e] text-sm font-normal border-none focus:outline-none cursor-pointer">
              <option value="uz">Uz</option>
              <option value="ўз">ўз</option>
              <option value="ru">Ru</option>
              <option value="eng">Eng</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#202b57] py-2">
        <div className="container1 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src={Logo} alt="Logo" width={60} height={40} priority />
            </Link>
            <h3 className="hidden md:block font-normal text-base text-white leading-tight">
              Qurilishda texnik me’yorlash <br />
              va standartlashtirish <br />
              ilmiy-tadqiqot instituti
            </h3>
          </div>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-6">
            <FaSearch className="text-white text-xl cursor-pointer hover:text-gray-300" />
            <Image src={Ik1} alt="Icon 1" width={36} height={36} />
            <Image src={Ik2} alt="Icon 2" width={36} height={36} />
            <div className="flex items-center gap-2">
              <CiUser className="text-white text-3xl" />
              <p className="text-white text-base font-normal leading-tight">
                Kirish <br /> Ro’yhatdan o’tish
              </p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white text-4xl"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:block bg-[#28366d] py-4">
        <nav className="container1">
          <ul className="flex items-center justify-between text-base">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${
                      isActive
                        ? "text-white font-medium"
                        : "text-[#8d97ad] hover:text-white"
                    } transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[80%] sm:w-[70%] md:w-80 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              <div className="bg-black p-2 rounded-xl">
                <Image src={Logo} alt="Logo" width={80} height={40} />
              </div>
            </Link>
            <h3 className="hidden sm:block text-base font-normal leading-tight">
              Qurilishda texnik me’yorlash <br />
              va standartlashtirish <br />
              ilmiy-tadqiqot instituti
            </h3>
          </div>
          <button
            className="text-4xl text-gray-800"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <IoClose />
          </button>
        </div>

        <ul className="flex flex-col gap-5 mt-6 px-6 text-lg font-medium text-[#3d3d3d]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  } block py-1 transition-colors`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile bottom icons */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-center gap-5 bg-black p-4 rounded-xl">
          <FaSearch className="text-white text-xl" />
          <Image src={Ik1} alt="Icon 1" width={36} height={36} />
          <Image src={Ik2} alt="Icon 2" width={36} height={36} />
          <div className="flex items-center gap-3">
            <CiUser className="text-white text-3xl" />
            <p className="text-white text-base font-normal">
              Kirish <br /> Ro’yhatdan o’tish
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
