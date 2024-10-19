"use client";
import ScrollBehavior from "../utils/scrollBehavior";
import { useEffect, useState } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
export default function Menu() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [height, setHeight] = useState(Number);

  const actionMenu = () => {
    setIsActive(false);
    ScrollBehavior();
  };



 useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      setHeight(scrollTop);
    });

  }, []);

  return (
    <>
      <div
       onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
        className={`flex text-center justify-center p-2  cursor-pointer transition-all ${
          isActive && height < 1 && "rotate-90 mt-6 opacity-50  "
        }`}
      >
        <div className="bg-indigo-300  opacity-85 w-9 h-9 rounded-full"></div>
        <div className="bg-blue-500 opacity-85  w-9 h-9 rounded-full -ml-3 "></div>
        <div className="bg-purple-900 opacity-85  w-9 h-9 rounded-full -ml-3 "></div>
        <div className="bg-violet-950  opacity-85 w-9 h-9 rounded-full -ml-3 "></div>
      </div>
      {isActive && height < 1 && height < 10 &&(
        <ul className="animate-menuAnimate fixed top-10 border rounded-sm  border-zinc-800 left-36 dark:bg-zinc-800  p-2 flex flex-col justify-start items-start w-60 fullSm:w-full fullSm:left-0 fullSm:top-0 fullSm:h-screen fullSm:justify-center fullSm:items-center fullSm:bg-zinc-900 fullSm:z-10  fullSm:gap-7">
          <XMarkIcon
            onClick={actionMenu}
            className="w-8 h-8 hidden fullSm:fixed fullSm:block  fullSm:top-8  fullSm:right-8 fullSm:text-red-600"
          />

          <Link
            onClick={actionMenu}
            className="transition-all text-lg hover:text-cyan-950 dark:hover:text-gray-300 fullSm:text-white fullSm:text-3xl"
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={actionMenu}
            className="transition-all text-lg hover:text-cyan-950 dark:hover:text-gray-300 fullSm:text-white fullSm:text-3xl"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            onClick={actionMenu}
            className="transition-all text-lg hover:text-cyan-950 dark:hover:text-gray-300 fullSm:text-white fullSm:text-3xl"
            href="/contact"
          >
            Contact
          </Link>
        </ul>
      )}
    </>
  );
}
