"use client";
import React, { useEffect, useState } from "react";
import { connect, menuitems } from "@/utils/me";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiMoonBold } from "react-icons/pi";

export default function Header() {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <header className="backdrop-blur-md w-full sticky top-0 z-10 transition ease-in-out">
      <nav className="w-11/12 flex items-center justify-between max-w-4xl pb-3 pt-5 mx-auto">
        <Link className="block" href="/home">
          Opeyemi.
        </Link>
        <div className="hidden items-center space-x-4 rounded-full py-1.5 px-2 bg-gray-200 bg-opacity-40 md:flex">
          {menuitems.map((item) => {
            const active = pathname.includes(item.name.toLowerCase());
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`block transition ease rounded-2xl px-4 py-1.5 ${
                  active && "bg-white text-red-500 font-semibold"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-2">
          {connect.map((el, index) => {
            const Icon = el.icon;
            return (
              <Link
                key={`connect-${index}`}
                href={el.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </Link>
            );
          })}
          <button className="outline-none">
            <PiMoonBold size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
