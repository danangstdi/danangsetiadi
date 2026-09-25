import ProjectCard from "@/components/partials/card/ProjectCard";
import a from "@/../public/img/project/saytix.webp"
import b from "@/../public/img/project/sispres.webp"
import c from "@/../public/img/project/jantisigap.webp"
import d from "@/../public/img/project/find.webp"
import e from "@/../public/img/project/emptychair.webp"

export default function Project() {
  const Projects = [
    {
      title: "Saytix.id",
      type: "Website",
      year: "2024",
      desc: "Ticketing Platform for Event Organizers in Indonesia.",
      url: "https://saytix.id/",
      image: a
    },
    {
      title: "Sispres",
      type: "Mobile Apps & Web",
      year: "2025",
      desc: "Attendance Management System for Universitas Darul Ulum.",
      url: "https://sispres-dashboard.vercel.app/unduh",
      image: b
    },
    {
      title: "JantiSigap",
      type: "Website",
      year: "2025",
      desc: "Official digital public complaint service website for Janti village.",
      url: "https://jantisigap.vercel.app/",
      image: c
    },
    {
      title: "FIND",
      type: "Game",
      year: "2026",
      desc: "Psychological Horror Game.",
      url: "https://setiadisoftworks.itch.io/find",
      image: d
    },
    {
      title: "Empty Chair",
      type: "Game",
      year: "2023",
      desc: "Psychological Horror Game.",
      url: "https://rivegames.itch.io/empty-chair",
      image: e
    },
  ]
  return (
    <section id="project" className="bg-white dark:bg-neutral-950">
      <div className="text-center py-14">
        <h1 className="text-3xl poppins-bold text-gray-800 dark:text-slate-100">My Projects</h1>
        <p className="line-height-2 px-3 text-xs text-gray-600 mt-2 lg:px-40 lg:text-base dark:text-slate-300">
          A collection of <strong>projects I’ve worked on</strong>, from development to creative design.
        </p>
        <div className="bg-transparent p-4 grid gap-3 items-center my-10 grid-cols-1 md:grid-cols-2 md:gap-6 lg:mx-24 xl:mx-72 xl:grid-cols-3">
          {Projects.map((item) => (
            <ProjectCard 
                key={item.title}
                title={item.title} 
                type={item.type} 
                year={item.year} 
                desc={item.desc}
                url={item.url}
                image={item.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
