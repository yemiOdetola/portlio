import Link from "next/link";
import React from "react";

interface TimelineProps {
  active: boolean;
  timeline: any;
}

export default function Timeline({ active, timeline }: TimelineProps) {
  return (
    <div className="w-full flex justify-start gap-7 border-neutral-800 pb-8 border-l last:border-l-0 last:pb-16">
      <div className="relative">
        <div className="absolute top-0 -left-2 w-4 h-4 rounded-full aspect-square outline-black bg-neutral-800  active:bg-emerald-500">
          {active && (
            <div className="absolute top-0 left-0 rounded-full -z-10 w-4 h-4 bg-emerald-500 animate-ping aspect-square" />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center">
          <h4 className="text-md font-semibold">
            <span>{timeline.position} @ </span>
            <Link
              href={timeline.url}
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              {timeline.company}
            </Link>
          </h4>
        </div>
        <div className="text-sm space-y-2">
          <p>{`${timeline.startDate} - ${timeline?.endDate || "Present"}`}</p>
          <p>{timeline.summary}</p>
        </div>
      </div>
    </div>
  );
}
