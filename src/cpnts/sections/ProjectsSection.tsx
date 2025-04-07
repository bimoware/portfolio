import Image from "next/image";

export default function ProjectsSection() {
  return <div className="w-[30vw] outline rounded-xl overflow-clip p-2 flex flex-col gap-2">
  <Image
    src="/projects/banner.png"
    width="1280"
    height="640"
    alt="Image"
    className="rounded-3xl w-full"
  />
  <p className="first-letter:ml-2">
    <strong>Bimowy</strong> is a math exercising platform where people pick a math subject and train on generated exercises as much as they want.
  </p>
</div>



}