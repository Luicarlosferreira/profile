"use client";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-l font-normal text-center pb-2 flex flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-5 text-2xl">
        <a
          href="https://www.linkedin.com/in/luicarlosferreira/"
          target="_blank"
          className="rounded-full p-2 border border-transparent hover:border-blue-600 transition-all"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Luicarlosferreira"
          target="_blank"
          className="rounded-full p-2 border border-transparent hover:border-blue-600 transition-all"
        >
          <FaGithub />
        </a>
      </div>
      <div> © 2023 Luis Carlos Ferreira Carneiro. All rights reserved.</div>
    </footer>
  );
}
