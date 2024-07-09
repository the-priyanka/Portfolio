import Image from "next/image";
import React from "react";
import Img from "@/assets/logo1.png";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const NavbarComp = () => {
  return (
    <div className="py-5 px-24 flex justify-between items-center">
      <div className="">
        <Link href={"/"}>
          <Image src={Img} alt="logo" width={200} height={200} />
        </Link>
      </div>
      <div>
        <ul className="flex gap-28">
          <li>
            <Link
              className="text-white opacity-70 text-[16px] hover:text-amber-500"
              href={"/portfolio"}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="text-white opacity-70 text-[16px] hover:text-amber-500"
              href={"/aboutus"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="text-white opacity-70 text-[16px] hover:text-amber-500"
              href={"/contact"}
            >
              Contact Us
            </Link>
          </li>
          <li className="flex items-center gap-4">
            <Link
              className="text-white opacity-70 text-[16px]"
              href={"/"}
            >
              <FaInstagram />
            </Link>
            <Link
              className="text-white opacity-70 text-[16px]"
              href={"https://github.com/the-priyanka"}
            >
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComp;
