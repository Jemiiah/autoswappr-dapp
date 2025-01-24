import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export const footerIcon: { icons: IconType; path: string }[] = [
  {
    icons: FiGithub,
    path: "https://github.com/BlockheaderWeb3-Community/autoswappr-dapp",
  },
  { icons: FaTelegramPlane, path: "https://t.co/yFNm0juRkX" },
  { icons: FaXTwitter, path: "https://twitter.com/auto_swappr" },
];

export const footerDocumentation: { name: string; path: string }[] = [
  { name: "Team", path: "#" },
  { name: "Documentation", path: "/documentation" },
  { name: "Contact Support", path: "#" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse md:flex-row justify-between items-center bg-[#000014] px-4 md:px-8 lg:px-20 py-6 md:py-[38px] gap-6 md:gap-4">
      {/* Copyright section */}
      <p className="text-sm md:text-base leading-6 text-[#E7ECF0] text-center md:text-left">
        copyright@Autoswappr 2024
      </p>

      {/* Navigation section */}
      <div className="flex flex-row items-center gap-4 md:gap-7">
        {footerDocumentation.map((doc, index) => (
          <Link
            key={index}
            href={doc.path}
            className="text-xs md:text-sm leading-6 hover:opacity-80 cursor-pointer text-[#E7ECF0]"
          >
            {doc.name}
          </Link>
        ))}
      </div>

      {/* Social icons section */}
      <div className="flex items-center gap-7 px-[34px]">
        {footerIcon.map((icon, index) => (
          <Link
            key={index}
            href={icon.path}
            className="text-sm md:text-xl hover:opacity-80 cursor-pointer"
          >
            <icon.icons />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
