"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function TopMenu() {
  const t = useTranslations('HomePage')
  const markerRef = useRef<HTMLDivElement>(null)
  const navLinks = useRef<HTMLSpanElement[]>([])
  const selectedNav = useRef<HTMLSpanElement>(null)
  const [markerLeft, setMarkerLeft] = useState(0)
  const [markerWidth, setMarkerWidth] = useState(0)


  useEffect(() => {
    if (!navLinks.current) return;

    function handleClick(e: any) {
      if (!markerRef.current) return;
      if (e instanceof MouseEvent) selectedNav.current = e.currentTarget as HTMLElement
      if (selectedNav.current) {
        setMarkerLeft(selectedNav.current.offsetLeft)
        setMarkerWidth(selectedNav.current.offsetWidth)
      }
    }

    navLinks.current.forEach((link) => link.addEventListener("click", handleClick));
    window.addEventListener('resize', handleClick)
    return () => {
      navLinks.current.forEach((link) => link.removeEventListener("click", handleClick));
      window.removeEventListener('resize', handleClick)
    }
  }, [])

  return <div className="w-full relative flex items-center justify-center p-2 px-2">
    <div ref={markerRef} className="absolute left-0 h-7
    rounded-full bg-indigo-800
    transition-all duration-500 cursor-pointer
    z-20"
      style={{
        left: markerLeft + "px",
        width: markerWidth + "px"
      }} />
    <div className="inline-flex gap-2 justify-center items-center h-full duration-300 ease-out
    border border-indigo-800 rounded-full p-2 bg-neutral-950/80
    *:z-20">
      {
        [
          { label: t('me'), id: 'me' },
          { label: t('skills'), id: 'skills' },
          { label: t('projects'), id: 'projects' },
          { label: t('contact'), id: 'contact' }
        ]
          .map(item => <a className="select-none cursor-pointer mx-1B px-3 decoration-0"
            href={`#${item.id}`}
            ref={(e) => { navLinks.current.push(e!) }}
            key={item.id}>{item.label}</a>)
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
