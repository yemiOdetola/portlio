"use client";
import React, { useRef } from "react";

export default function Accordion({ handleToggle, active, exp }: any) {
  const contentEl: any = useRef();
  console.log("contentEl:::: ", contentEl);
  const { startDate, endDate, position, company, url, logo, summary } = exp;
  return (
    <div className="cursor-pointer mb-2 rounded-lg border border-zinc-200 transition-all duration-300">
      <div
        className={`flex items-start rounded-lg cursor-pointer justify-between transition duration-300 p-3`}
        onClick={handleToggle}
      >
        <h4 className="font-medium text-base relative mb-0 transition-all duration-300">
          {position} @ {company}
        </h4>
        <h5 className="font-medium text-base relative mb-0 transition-all duration-300">
          {startDate} - {endDate || "Present"}
        </h5>
      </div>
      <div
        ref={contentEl}
        className={`relative h-0 overflow-hidden transition-all duration-300 ease ${
          active ? "h-auto" : ""
        }`}
        style={
          active
            ? { height: contentEl?.current?.scrollHeight || 72 }
            : { height: "0px" }
        }
      >
        <div className="flex-1 min-h-1 px-15">
          <p className="mb-0 p-3 leading-6">{summary}</p>
        </div>
      </div>
    </div>
  );
}