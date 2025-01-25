import React from "react";

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.1] ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
    </div>
  );
}
