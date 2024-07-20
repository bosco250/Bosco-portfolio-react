import Logo from "../assets/kevinRushLogo.png";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center ">
        {/* <img className='m-8 w-10' src={Logo} alt="logo" /> */}
        <h1 className=" text-4xl text-neutral-700 hover:cursor-pointer">BOSCO</h1>
      </div>
      <div className=" m-6 flex items-center justify-center gap-4 text-2xl">
        <a
          className=" hover:cursor-pointer hover:text-orange-500"
          href="https://www.linkedin.com/in/dusengimana-jean-bosco-161650296/"
        >
          <FaLinkedin />
        </a>
        <a className=" hover:cursor-pointer hover:text-orange-500" href="https://github.com/bosco250">
          <FaGithub />
        </a>
        <a
          className=" hover:cursor-pointer hover:text-orange-500"
          href="https://www.instagram.com/p/C0ynsQ1thuq/?igsh=MWZoZmlkOTN4bGk0Zw=="
        >
          <FaInstagram />
        </a>
        <a className=" hover:cursor-pointer hover:text-orange-500" href="https://x.com/Jeanbobo250">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
