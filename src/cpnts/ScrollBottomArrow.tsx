"use client";
import Image from "next/image";

export default function ScrollBottomArrow() {
  return <Image src={"arrow.svg"} width="50" height="50" alt="Go to the bottom"
    className="rounded-2xl outline-2 outline-neutral-100 p-2
			animate-bounce cursor-pointer
			hover:scale-105 transition-transform hover:-translate-y-2"
    onClick={() => alert('Website still empty... It has been last been updated at 06/04/2025 07:57')} />
}