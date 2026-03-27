/** 1.0.0
 *
 * CSS:  --border, --text-tertiary text-microcopy
 * 1. Issue with animation add to globals.css .glitch-hover
 */
"use client";

import { useState } from "react";

export function CopyRight() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="p-6 border-t border-border text-microcopy">
      <div className="flex items-center gap-2 justify-center ">
        <p className="">&copy; 2026 CE206</p>

        <p
          className="hidden sm:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className=" mx-2">|</span>
          {isHovered ? (
            <span className="text-[10px] text-(--text-tertiary) cursor-default text-center">
              Unauthorized duplication is a violation of system integrity.
            </span>
          ) : (
            <span className="">Operational Protocol v1.0</span>
          )}
        </p>
      </div>
    </footer>
  );
}
