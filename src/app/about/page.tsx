"use client";
import React from "react";

import { motion } from "framer-motion";
import { PiArrowElbowRight } from "react-icons/pi";
import Link from "next/link";
import { Container, Timeline } from "@/components";
import { timeline, connect } from "@/utils/me";

const containerVariants = {
  init: { opacity: 0 },
  final: { opacity: 1, transition: { duration: 0.3 } },
};

export default function page() {
  return (
    <Container className="my-12">
      <motion.div
        className="w-full mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-full flex flex-col md:flex-row align-baseline md:space-x-6">
          <h2 className="w-full md:w-1/5 font-semibold text-lg">About me</h2>
          <div className="w-full md:w-4/5">
            <div className="mb-4">
              {/* <h5 className="mb-2 font-semibold font-base">Interests</h5> */}
              <p>
                The art of frontend development lights me up - the chance to
                blend visually aesthetic designs with smooth, functional
                interactions. I strive to write clean, reusable code and always
                look for opportunities to implement the latest web standards and
                best practices.
              </p>
            </div>
            <div className="mb-4">
              <h5 className="mb-2 font-semibold font-base">Challenge</h5>
              <p>
                I see each project as a chapter, each challenge a chance to
                level up. I&apos;m currently exploring C# and .NET. I find
                backend development intellectually stimulating (networks,
                streams, threads etc.), and I enjoy the creative challenges it
                presents. Currently cooking with python(flask).
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="w-full flex flex-col md:flex-row align-baseline md:space-x-6">
        <h2 className="w-full md:w-1/5 font-semibold text-lg">Fun times</h2>
        <div className="w-full md:w-4/5 ml-0 md:ml-2">
          {timeline.map((tl, index) => (
            <Timeline
              key={`timeline-${index}`}
              active={tl.endDate == null}
              timeline={tl}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row align-baseline md:md:space-x-6 mb-16">
        <h2 className="w-full md:w-1/5 font-semibold text-lg">Connect</h2>
        <div className="w-full md:w-4/5">
          <p className="font-medium">Reach out!. I would love to have a chat</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {connect.map((el, index) => {
              const Icon = el.icon;
              return (
                <Link
                  key={`connect-${index}`}
                  href={
                    el.social == "Email"
                      ? "mailto:yemiotola@gmail.com"
                      : `https://${el.url}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-[48%] p-4 rounded border border-gray-300 flex items-center justify-between hover:opacity-70"
                >
                  <div className="flex items-center gap-x-2">
                    <Icon size={40} />
                    <span>{el.social}</span>
                  </div>
                  <PiArrowElbowRight />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* <motion.div className="w-full flex flex-col md:flex-row align-baseline md:space-x-6">
        <h2 className="w-full md:w-1/5 font-semibold text-lg">Whats fun?</h2>
        <div className="w-full md:w-4/5">
          <div className="mb-4">
            <h5 className="mb-2 font-semibold font-base">Interests</h5>
            <p>
              I am interested in learning Backend with other language like Java,
              Go or with Python. I also want to know how to make a video game
              with Unity or other and I am very interested in being a content
              creator whether programming or something else.
            </p>
          </div>
          <div className="mb-4">
            <h5 className="mb-2 font-semibold font-base">Challenges</h5>
            <p>
              For now I am learning how to make applications with real time
              communication such as a chat using Socket.IO, Iam also starting to
              learn the way to be Devops using Docker, Kubernetes, AWS or
              others.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="mb-2 font-semibold font-base">Hope</h5>
            <p>
              I am also interested in learning other things besides programming
              such as 3D design with Blender and video editing with Davinci
              Resolve (these last two I would take as a hobby).
            </p>
          </div>
        </div>
      </motion.div> */}
    </Container>
  );
}
