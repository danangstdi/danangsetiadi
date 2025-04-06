import Image from "next/image"
import project from '@/../public/img/project.png'

export default function WebDevelopment() {
  return (
    <section id="web-development" className="mt-24 lg:mt-32">
      <div className="text-center">
        <h1 className="text-3xl poppins-bold text-gray-800 dark:text-slate-100">Web Development</h1>
        <p className="line-height-2 px-3 text-xs text-gray-600 mt-2 lg:px-40 lg:text-base dark:text-slate-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolore totam, corrupti non tempore, repudiandae tenetur at consequatur aperiam distinctio ducimus itaque, ratione magnam provident consequuntur vel iusto. Eos, commodi.</p>
        <div className="bg-gray-100 p-4 grid grid-cols-2 items-center my-10 lg:mx-24 xl:mx-72 dark:bg-transparent">
          <figure>
            <Image src={project} alt="" loading="lazy"/>
          </figure>
          <p className="p-2 text-start text-gray-600 text-sm sm:text-base md:text-2xl md:p-8 dark:text-slate-100">
            Fully responsive, custom design, Wordpress CMS websites
          </p>
        </div>
      </div>
    </section>
  )
}
