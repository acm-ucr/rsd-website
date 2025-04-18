import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "../data/FooterLinks";

import { FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";

const footerImage = "/RSDLogo.webp";

const iconMap: Record<string, JSX.Element> = {
  mail: <FaEnvelope className="h-6 w-6 transition-transform hover:scale-110" />,
  instagram: (
    <FaInstagram className="h-6 w-6 transition-transform hover:scale-110" />
  ),
  discord: (
    <FaDiscord className="h-6 w-6 transition-transform hover:scale-110" />
  ),
};

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-sky-400 px-6 py-4">
      <Link href="/" className="transition-opacity hover:opacity-80">
        <Image src={footerImage} alt="RSD Logo" width={100} height={50} />
      </Link>

      <div className="flex space-x-4">
        {footerLinks.map(({ icon, url }, idx) =>
          iconMap[icon] ? (
            <Link
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {iconMap[icon]}
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default Footer;
