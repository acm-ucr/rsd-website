import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/data/FooterLinks";

const footerImage = "/RSDLogo.webp";

footerLinks.map((link) => (
  <a href={link.url}>
    <link.icon className="h-6 w-6 transition-transform hover:scale-110" />
    {link.name}
  </a>
));

const Footer = () => {
  return (
    <div className="bg-rsd-mid-blue flex items-center justify-between px-6 py-4">
      <Link href="/" className="transition-opacity hover:opacity-80">
        <Image src={footerImage} alt="RSD Logo" width={100} height={50} />
      </Link>

      <div className="flex space-x-4">
        {footerLinks.map(({ icon: Icon, url }, idx) => (
          <Link
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
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
