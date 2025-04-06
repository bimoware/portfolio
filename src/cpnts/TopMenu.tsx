"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function TopMenu() {
  const t = useTranslations('HomePage')
  const markerRef = useRef<HTMLDivElement>(null)
  const navLinks = useRef<HTMLSpanElement[]>([])
  const [markerLeft, setMarkerLeft] = useState(0)
  const [markerWidth, setMarkerWidth] = useState(0)

  useEffect(() => {
    function indicator(target: HTMLElement) {
      if (!markerRef.current) return;
      setMarkerLeft(target.offsetLeft)
      setMarkerWidth(target.offsetWidth)
    }
    if (!navLinks.current) return;

    function handleClick(e: MouseEvent) {
      indicator(e.currentTarget as HTMLElement)
    }

    navLinks.current.forEach((link) => link.addEventListener("click", (e) => handleClick(e)));
    return () => navLinks.current.forEach((link) => link.removeEventListener("click", (e) => handleClick(e)));
  }, [])

  return <div className="w-full relative flex items-center justify-center p-2 px-2">
    <div ref={markerRef} className="absolute left-0 h-7
    rounded-full bg-indigo-500/70
    transition-all duration-500 cursor-pointer
    z-10"
      style={{
        left: markerLeft + "px",
        width: markerWidth + "px"
      }} />
    <div className="*:z-10 inline-flex gap-2 justify-center items-center h-full duration-300 ease-out
    outline outline-indigo-500/50 rounded-2xl p-2 bg-neutral-950/90">
      {
        [t('me'), t('skills'), t('projects'), t('contact')]
          .map(item => <a className="select-none cursor-pointer mx-1B px-3 decoration-0"
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            ref={(e) => { navLinks.current.push(e!) }}
            key={item}>{item}</a>)
      }
    </div>
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
