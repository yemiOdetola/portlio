"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { PiArrowUpRight, PiGithubLogo, PiLink } from "react-icons/pi";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  repo: string;
}
export default function Project({
  title,
  description,
  url,
  repo,
}: ProjectProps) {
  return (
    <div
      className="w-full h-42 rounded border border-gray-100 hover:border-gray-200 shadow-sm
    hover:shadow-[0_2px_4px_rgb(0,0,0,0.05)] p-5 transition-all ease group hover:cursor-pointer"
    >
      <div className="w-full flex justify-between items-center rounded gap-5">
        <Image
          src="/images/sety.png"
          alt="project favicon"
          width={90}
          height={90}
          className="rounded"
        />
        <div className="">
          <div className="flex items-center">
            <h3 className="text-md lg:text-lg font-normal mb-2 mr-2">{title}</h3>
            <PiArrowUpRight
              size={18}
              className="relative bottom-1 text-zinc-500"
            />
          </div>
          <p className="text-xs md:text-sm">{description}</p>
        </div>
        <div className="flex justify-end items-end gap-3">
          <Link
            href={repo}
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center transition-all ease"
          >
            <PiGithubLogo size={32} />
          </Link>

          <Link
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-lg transition-all ease hover:opacity-50"
          >
            <PiLink size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
