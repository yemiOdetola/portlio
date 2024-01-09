"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiArrowUpRight, PiGithubLogo, PiLink } from "react-icons/pi";
import Modal from "./Modal";
import { SideDrawer } from ".";
import { ProjectTypes } from "@/utils/me";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  url: string;
  repo: string;
  image: string;
  type: ProjectTypes | string;
  gif?: any;
}
export default function Project({
  title,
  description,
  url,
  repo,
  image,
  tech,
  gif,
  type,
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSideDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div
        className="w-full h-42 rounded border border-gray-100 hover:border-gray-200 shadow-sm
    hover:shadow-[0_2px_4px_rgb(0,0,0,0.05)] p-5 transition-all ease group hover:cursor-pointer mb-8"
      >
        <div
          className="w-full flex justify-between items-start min-h-16 rounded gap-5"
          onClick={type == "mobile" ? toggleSideDrawer : toggleModal}
        >
          <div className="hidden w-1/12 md:block">
            <Image
              src={image}
              alt="project favicon"
              width={60}
              height={60}
              className="rounded"
            />
          </div>
          <div className="w-10/12">
            <div className="flex items-center">
              <h3 className="text-md lg:text-lg font-medium mb-2 mr-2">
                {title}
              </h3>
              <Link href={url} target="_blank" rel="noopener noreferrer">
                <PiArrowUpRight
                  size={18}
                  className="relative bottom-1 text-zinc-500"
                />
              </Link>
            </div>
            <p className="text-xs md:text-xs">{description}</p>
          </div>
          <div className="flex justify-end items-end gap-3">
            <Link
              href={repo}
              rel="noreferrer noopener"
              target="_blank"
              className={`inline-flex items-center transition-all ease cursor-not-allowed ${
                repo && "cursor-auto"
              }`}
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>kjsdjksdjk</p>
      </Modal>
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <h1 className="text-xl font-medium mb-4">{title} Mobile Application</h1>
        <Image
          src={gif}
          alt={description}
          width={320}
          height={620}
          className="mx-auto max-h-[400px] object-contain"
        />
        <div className="mt-2 p-4 overflow-y-auto">
          <h5 className="font-semibold text-base">About</h5>
          <p className="my-2 block">{description}</p>
          <div className="mt-6">
            <h5 className="font-semibold text-base mb-2">Technologies</h5>
            <div className="flex items-center flex-wrap gap-3">
              {tech.map((el, index) => (
                <span
                  className="border border-gray-400 block py-1 px-3 text-xs rounded-xl"
                  key={`tech-${index}`}
                >
                  {el}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h5 className="font-semibold text-base mb-2">URL</h5>
            <Link
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="block underline font-semibold"
            >
              {url}
            </Link>
          </div>
        </div>
      </SideDrawer>
    </>
  );
}
