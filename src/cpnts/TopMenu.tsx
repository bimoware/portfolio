"use client";

import { useEffect, useRef } from "react";

export default function TopMenu() {
  const markerRef = useRef<HTMLDivElement>(null)
  const navLinks = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    function indicator(target: HTMLElement) {
      if (!markerRef.current) return;
      markerRef.current.style.left = target.offsetLeft + "px";
      markerRef.current.style.width = target.offsetWidth + "px";
    }
    if (!navLinks.current) return;

    function handleClick(e: MouseEvent) {
      indicator(e.currentTarget as HTMLElement)
    }

    navLinks.current.forEach((link) => link.addEventListener("mouseenter", (e) => handleClick(e)));

    return () => navLinks.current.forEach((link) => link.removeEventListener("mouseenter", (e) => handleClick(e)));
  }, [])

  return <div className="w-full relative flex items-center justify-center
  $border $rounded-2xl
  p-2 px-2
">
    <div ref={markerRef} className="absolute left-0 h-7 rounded-full bg-indigo-500/70 transition-all duration-500 cursor-pointer z-10" />
    <div className="*:z-10 inline-flex gap-2 justify-center items-center h-full duration-75">
      {
        ["Me", "Skills", "Projects", "Contact Me"]
          .map(item => <span className="cursor-pointer mx-1B px-3"
            ref={(e) => { navLinks.current.push(e!) }}
            key={item}>{item}</span>)
      }</div>
  </div>


  // return <div className="flex gap-2 items-center justify-center
  // h-full w-full
  // p-3
  // rounded-full border-white border-1">
  //   <div ref={markerRef} className="absolute left-0 h-10
  //   rounded-full
  //   bg-red-500/50
  //   transition-all duration-500" />
  //   <div
  //     className="inline-flex gap-2 justify-center items-center text-3xl h-full">
  //     {
  //       ["Me", "Skills", "Projects", "Contact Me"]
  //         .map(item => <span key={item} ref={(e) => { navLinks.current.push(e!) }}>{item}</span>)
  //     }
  //   </div>
  // </div>
}
