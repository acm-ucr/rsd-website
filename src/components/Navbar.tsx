"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/RSDLogo.webp";
import { items } from "@/data/NavbarData";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="bg-rsd-mid-blue flex w-full flex-row flex-wrap items-center justify-between px-5 py-4">
      <motion.div whileHover={{ scale: 1.2 }}>
        <Link href="/" onClick={closeMenu}>
          <Image src={logo} alt="RSD Logo" className="w-[20vw] md:w-[6vw]" />
        </Link>
      </motion.div>

      <div className="mx-5 hidden grid-flow-col gap-6 text-2xl text-white md:grid">
        {items.map(({ name, link }) => (
          <motion.div whileHover={{ scale: 1.1 }} key={name}>
            <Link
              href={link}
              className={`${
                pathname === link ? "text-rsd-yellow" : "hover:text-rsd-yellow"
              }`}
            >
              {name}
            </Link>
          </motion.div>
        ))}
      </div>

      <button
        onClick={handleClick}
        className="pointer-events-auto relative flex flex-col items-center justify-center px-4 duration-1 hover:scale-110 md:hidden"
      >
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            openMenu
              ? "bg-rsd-dark-blue translate-y-2.5 rotate-45"
              : "bg-rsd-dark-blue -translate-y-0.5"
          }`}
        />
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            openMenu ? "opacity-0" : "bg-rsd-dark-blue opacity-100"
          }`}
        />
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            openMenu
              ? "bg-rsd-dark-blue -translate-y-2.5 -rotate-45"
              : "bg-rsd-dark-blue translate-y-0.5"
          }`}
        />
      </button>

      <div
        className={
          openMenu
            ? "flex h-[40vh] w-full flex-col items-center justify-evenly text-2xl text-white md:hidden"
            : "hidden"
        }
      >
        {items.map(({ name, link }) => (
          <Link
            key={name}
            href={link}
            className={`${
              pathname === link ? "text-rsd-yellow" : "hover:text-rsd-yellow"
            }`}
            onClick={closeMenu}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
