"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return;
  }

  return (
    <>
      {theme === "light" ? (
        <MoonIcon
          className="h-8 w-8 text-slate-800 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <SunIcon
          className="h-8 w-8 text-orange-300 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
};

export default ThemeButton;
