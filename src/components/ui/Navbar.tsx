"use client";
import { dmSans } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("hola");
  };
  return (
    <nav
      className={`${dmSans.className} px-2 h-16 py-2 lg:text-3xl lg:px-8 lg:py-5 lg:h-28 flex items-center justify-between`}
    >
      <div className="flex gap-2 lg:gap-5">
        <div onClick={toggleMenu} className=" block lg:hidden">
          <AiOutlineMenu className="h-12 w-12 cursor-pointer" />
        </div>
        {/* toggleMenu */}
        <div
          className={`fixed top-0 left-0 h-screen z-10 w-screen bg-colorBlack text-colorWhite ${!isMenuOpen && "hidden"}`}
        >
          <div className="flex items-center justify-between px-2">
            <div onClick={toggleMenu} className=" block lg:hidden">
              <AiOutlineClose
                color="white"
                className="h-12 w-12 cursor-pointer"
              />
            </div>
            <div>
              <Link href="/" className="lg:text-5xl logo-text text-colorWhite">
                ACTIVA
              </Link>
            </div>
          </div>
          <div className=" grid grid-rows-2 px-2 justify-center items-center h-full text-5xl">
            <div
              className="flex flex-col items-center justify-end h-full gap-10"
              onClick={toggleMenu}
            >
              <Link href="/entrenamientos">Entrenamientos</Link>
              <Link href="/nosotros">Nosotros</Link>
              <Link href="/contacto">Contacto</Link>
            </div>
            <Link
              href="/login"
              className="border px-4 py-2 border-colorWhite bg-colorWhite text-center text-colorBlack rounded-full text-4xl "
            >
              Empieza Gratis
            </Link>
          </div>
          <div className="fixed flex bottom-0 right-0 gap-1  rounded-sm">
            <span>By</span>
            <Image
              src="/fbonilla02.svg"
              alt="logo fbonilla02"
              height={60}
              width={100}
            />
          </div>
        </div>
        <div>
          <Link href="/" className="lg:text-5xl logo-text">
            ACTIVA
          </Link>
        </div>
      </div>
      <div className="hidden  lg:flex gap-7">
        <Link href="/entrenamientos">Entrenamientos</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
      <div>
        <Link
          href="/login"
          className="border px-6 py-2 border-colorBlack rounded-full hover:bg-colorBlack hover:text-colorWhite"
        >
          Empieza Gratis
        </Link>
      </div>
    </nav>
  );
};
