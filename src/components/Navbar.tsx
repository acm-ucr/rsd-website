"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/RSDLogo.webp";
import { items } from "@/data/NavbarData";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full items-center justify-between bg-[#6694C9] px-5 py-4">
      <Image src={logo} alt="RSD Logo" className="w-1/20" />
      <div className="mx-5 grid grid-flow-col gap-6 text-2xl text-white">
        {items.map(({ name, link }) => (
          <Link
            key={name}
            href={link}
            className={`${
              pathname === link ? "text-[#F7C55B]" : "hover:text-gray-300"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
