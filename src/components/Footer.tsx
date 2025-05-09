import Link from "next/link";
import Image from "next/image";
import footerImage from "@/public/RSDLogo.webp";

import { footerLinks } from "@/data/FooterLinks";

const Footer = () => {
  return (
    <div className="bg-rsd-mid-blue flex items-center justify-between px-6 py-4">
      <Link href="/" className="transition-opacity hover:opacity-80 w-1/20">
        <Image src={footerImage} alt="RSD Logo" />
      </Link>
      <div className="flex space-x-4">
        {footerLinks.map(({ icon: Icon, url }, idx) => (
          <Link
            key={idx}
            href={url}
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <Icon className="h-8 w-8 text-white" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;