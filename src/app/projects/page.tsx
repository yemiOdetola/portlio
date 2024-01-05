import { Container } from "@/components";
import Project from "@/components/Project";
import { projects } from "@/utils/me";
import React from "react";

export default function Projects() {
  return (
    <Container className="py-12">
      <div className="w-full flex flex-col md:flex-row align-baseline md:space-x-6">
        <h2 className="w-full md:w-1/5 font-semibold text-lg">Projects</h2>
        <div className="space-y-5">
          <p>A selection of projects I worked on in the past few years.</p>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Project key={`project-${index}`} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
