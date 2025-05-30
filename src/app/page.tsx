import Image from "next/image"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bimodev',
  icons: "/error.svg"
}

type ProjectData = {
  beta?: boolean
  id: string
  desc: string
  banner: string
  links?: { icon: string, name: string, src: string }[]
  name?: string
}
export default function Home() {

  return <div className="mb-28">
    <HeroSection />
    <ProjectsTitle />
    <ProjectsList />
  </div>
}

function HeroSection() {
  return <div className="
  w-screen h-[70vh]
  flex flex-col items-center justify-center gap-5
  text-5xl
  text-center
  font-bold
  px-24">
    <p>🚧Website not ready yet!! 🚧</p>
    <p className="text-3xl text-white/90">So instead, how about you check out</p>
  </div>
}
function ProjectsList() {
  const projects: ProjectData[] = [
    {
      id: "bimowy",
      desc: "A free & open source interactive math platform. Additional to cheat sheets for many subjects, it allows anyone to train on automatically generated & customizable math exercises of all levels with solutions & final grade.",
      banner: "/bimowy-banner.png",
      links: [
        {
          icon: "/github.svg",
          name: "Github",
          src: "https://github.com/bimoware/bimowy-api"
        },
        {
          icon: "/link.svg",
          name: "Bimowy",
          src: "https://bimowy.dev/"
        }
      ]
    }
  ]
  return <section className="flex w-full items-center justify-center gap-8 px-4 my-6">
    {
      projects.map(project => <ProjectCard key={project.id} {...project} />)
    }
  </section>
}

function ProjectsTitle() {
  return <section className="flex items-center justify-center text-5xl font-bold
  mb-9">
    <Image src={"/star.svg"} alt={"star"} width={50} height={50}
      className="h-9
      hover:rotate-12 hover:scale-110 active:scale-75 duration-150" />
    My favorite project
    <Image src={"/star.svg"} alt={"star"} width={50} height={50}
      className="h-9
      hover:rotate-12 hover:scale-110 active:scale-75 duration-150" />
  </section>
}

function ProjectCard({ name, desc, banner, links, beta }: ProjectData) {
  return <div
    data-beta={beta}
    className="data-[beta=true]:grayscale-[90%]
    data-[beta=true]:cursor-not-allowed
    pb-3
    max-w-5/12
    rounded-3xl
    overflow-clip
    shadow-black/30 shadow-md
    flex flex-col
    hover:ring-3 hover:ring-white/50
    duration-150
    hover:scale-105 hover:-rotate-1
    active:scale-90">
    <Image width="1280" height="640" src={banner} alt={banner}
      className="w-full" />
    <div className="p-4 flex flex-col gap-2">
      {name && <span className="font-bold text-xl">{name}</span>}
      <span className="inline-flex items-center">{desc}</span>
    </div>
    <div className="flex items-center justify-center gap-4">
      {
        links && links.map(l => <Link key={l.icon} href={l.src}
          className="bg-white/5 p-2 rounded-2xl
          flex items-center gap-1
          hover:scale-105 hover:-translate-y-2
          duration-150
          hover:shadow-md hover:shadow-black/40">
          <Image src={l.icon} alt={l.src} width={50} height={50}
            className="h-4 w-4" />
          <span>{l.name}</span>
        </Link>)
      }
    </div>
  </div>
}