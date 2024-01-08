import { Container } from "@/components";
import Project from "@/components/Project";
import { projects } from "@/utils/me";
import React from "react";

export default function Projects() {
  return (
    <Container className="py-12">
      <div className="w-full">
        {projects.map((project, index) => {
          const works = project.works;
          return (
            <div
              className="w-full flex flex-col md:flex-row align-baseline mt-12"
              key={index}
            >
              <h2 className="w-full md:w-1/5 font-semibold text-lg">
                {project.title}
              </h2>
              {/* <p>A selection of projects I worked on in the past few years.</p> */}
              <div className="space-y-8">
                {works.map((works, index) => (
                  <Project key={`project-${index}`} {...works} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
