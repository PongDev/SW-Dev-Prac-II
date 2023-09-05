"use client";

import React from "react";

export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  function onMouseHover(e: React.SyntheticEvent) {
    if (e.type == "mouseover") {
      e.currentTarget.classList.remove("shadow-xl");
      e.currentTarget.classList.remove("bg-white");
      e.currentTarget.classList.add("shadow-2xl");
      e.currentTarget.classList.add("bg-neutral-200");
    } else {
      e.currentTarget.classList.remove("shadow-2xl");
      e.currentTarget.classList.remove("bg-neutral-200");
      e.currentTarget.classList.add("shadow-xl");
      e.currentTarget.classList.add("bg-white");
    }
  }

  return (
    <div
      className="w-1/4 h-[300px] bg-white shadow-xl min-w-[300px] m-[20px] flex flex-col rounded-xl overflow-hidden"
      onMouseOver={(e) => onMouseHover(e)}
      onMouseOut={(e) => onMouseHover(e)}
    >
      {children}
    </div>
  );
}
