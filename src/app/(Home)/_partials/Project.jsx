import ProjectCard from "@/components/partials/card/ProjectCard";

export default function Project() {
  const Projects = [
    {
      title: "Saytix.id",
      type: "Website",
      year: "2024",
      desc: "Ticketing Platform for Event Organizers in Indonesia.",
      url: "https://saytix.id/",
      image: "https://image.idntimes.com/post/20260323/upload_ccb3079db8cdafeb1ff9a6ece9c83a29_e576193d-31f4-45e1-b7d4-08d93ad6001a.jpg"
    },
    {
      title: "Sispres",
      type: "Mobile Apps & Web",
      year: "2025",
      desc: "Attendance Management System for Universitas Darul Ulum.",
      url: "https://sispres-dashboard.vercel.app/unduh",
      image: "https://image.idntimes.com/post/20260323/upload_ccb3079db8cdafeb1ff9a6ece9c83a29_e576193d-31f4-45e1-b7d4-08d93ad6001a.jpg"
    },
    {
      title: "JantiSigap",
      type: "Website",
      year: "2025",
      desc: "Official digital public complaint service website for Janti village.",
      url: "https://jantisigap.vercel.app/",
      image: "https://image.idntimes.com/post/20260323/upload_ccb3079db8cdafeb1ff9a6ece9c83a29_e576193d-31f4-45e1-b7d4-08d93ad6001a.jpg"
    },
    {
      title: "FIND",
      type: "Game",
      year: "2026",
      desc: "Psychological Horror Game.",
      url: "https://setiadisoftworks.itch.io/find",
      image: "https://image.idntimes.com/post/20260323/upload_ccb3079db8cdafeb1ff9a6ece9c83a29_e576193d-31f4-45e1-b7d4-08d93ad6001a.jpg"
    },
    {
      title: "Empty Chair",
      type: "Game",
      year: "2023",
      desc: "Psychological Horror Game.",
      url: "https://rivegames.itch.io/empty-chair",
      image: "https://image.idntimes.com/post/20260323/upload_ccb3079db8cdafeb1ff9a6ece9c83a29_e576193d-31f4-45e1-b7d4-08d93ad6001a.jpg"
    },
  ]
  return (
    <section id="project" className="bg-white dark:bg-neutral-950">
      <div className="text-center py-14">
        <h1 className="text-3xl poppins-bold text-gray-800 dark:text-slate-100">Our Project</h1>
        <p className="line-height-2 px-3 text-xs text-gray-600 mt-2 lg:px-40 lg:text-base dark:text-slate-300">
          Our best project already done.
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
