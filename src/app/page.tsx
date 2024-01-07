"use client";
import Image from "next/image";
import { Accordion, Container } from "@/components";
import { connect, timeline } from "@/utils/me";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState<any>(0);
  const trunkExp = timeline.slice(0, 3);

  const handleToggle = (index: any) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <Container className="pt-12 pb-24">
      <div className="flex items-start justify-between">
        <div className="w-full md:w-8/12 text-gray-700">
          <div className="intro">
            <h2 className="text-3xl font-medium md:text-3xl mb-4">
              Hi, I&apos;m <br /> Odetola Azeez.
            </h2>
          </div>
          <div className="text-sm leading-loose space-y-3">
            <p>
              <span className="text-red-400">
                Your goto artist - a frontend engineer.
              </span>{" "}
              I channel my days (and often, moonlit nights) into painting the
              canvas of the internet. Through every project and intricately
              woven line of code, I weave &lt; and /&gt; into vibrant, immersive
              experiences that come alive across the digital canvas.
            </p>
            <p>
              When not immersed in coding, I&apos;m probably reading some
              bookmarked tech articles, leveling up my backend skills, or
              getting lost in hoop highlight reels. I love exploring the
              theoretical realm of CS almost as much as I love bringing ideas to
              life in code. Each feeds the other in an endless quest to satisfy
              my curiosity.
            </p>
          </div>
          <div className="flex items-center space-x-4 my-4">
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
                  className="text-red-900"
                  rel="noopener noreferrer"
                >
                  <Icon size={36} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-3/12 hidden md:block">
          <Image
            src="/images/pic.jpg"
            className="rounded-full"
            alt="OOdetola gravatar"
            width={140}
            height={158}
          />
        </div>
      </div>

      <div className="my-4">
        <h3>Recent experiences</h3>
        <div className="my-4">
          {trunkExp.map((exp, index) => {
            return (
              <Accordion
                key={index}
                active={active == index}
                handleToggle={() => handleToggle(index)}
                exp={exp}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
