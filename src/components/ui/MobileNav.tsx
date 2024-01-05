"use client";
import { menuitems } from "@/utils/me";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  useEffect(() => {});
  return (
    <div className="w-full fixed flex flex-col items-center bottom-6 z-10 md:hidden">
      <div className="flex space-x-0.5 p-1.5 pb-1 bg-zinc-100 rounded-3xl dark:bg-[#141516] dark:border-2 dark:border-zinc-800 drop-shadow-md backdrop-filter backdrop-blur-xl dark:bg-opacity-30">
        {menuitems.map((item) => {
          const active = pathname.includes(item.path);
          return (
            <button
              key={item.path}
              className={`rounded-2xl px-5 py-2 font-lighter transition outline-none ${
                active && "bg-white text-red-500"
              }`}
            >
              <a href={item.path}>{item.name}</a>
            </button>
          );
        })}
      </div>
    </div>
  );
}
