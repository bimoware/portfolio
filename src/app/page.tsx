import Image from "next/image"
import Link from "next/link"

type ProjectData = {
  beta?: boolean
  id: string
  desc: string
  banner: string
  links?: { icon: string, name: string, src: string }[]
  name?: string
}
export default function Home() {

  return <div>
    <ProjectsTitle />
    <ProjectsList />
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
  return <div className="flex w-full items-center justify-center gap-8 p-4">
    {
      projects.map(project => <ProjectCard key={project.id} {...project} />)
    }
  </div>
}

function ProjectsTitle() {
  return <div className="flex items-center justify-center text-5xl font-bold my-6 mb-9">
    <Image src={"/star.svg"} alt={"star"} width={50} height={50}
      className="h-9
      hover:rotate-12 hover:scale-110 active:scale-75 duration-150" />
    Favorite project
    <Image src={"/star.svg"} alt={"star"} width={50} height={50}
      className="h-9
      hover:rotate-12 hover:scale-110 active:scale-75 duration-150" />
  </div>
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