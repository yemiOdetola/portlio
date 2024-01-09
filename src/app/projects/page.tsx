import React from "react";
import { Container, Modal } from "@/components";
import Project from "@/components/Project";
import { projects } from "@/utils/me";

export default function Projects() {
  return (
    <Container className="py-12">
      <div className="w-full">
        {projects.map((project, index) => {
          const works = project.works;
          console.log("type::::", project.type);
          return (
            <div
              className="w-full flex flex-col md:flex-row align-baseline mt-12"
              key={index}
            >
              <h2 className="w-full md:w-1/5 font-semibold text-lg">
                {project.title}
              </h2>
              {/* <p>A selection of projects I worked on in the past few years.</p> */}
              <div>
                {works.map((works, index) => (
                  <Project
                    key={`project-${index}`}
                    type={project.type}
                    {...works}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
