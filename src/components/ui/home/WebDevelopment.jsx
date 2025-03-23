import Image from "next/image"
import project from '@/../public/img/project.png'

export default function WebDevelopment() {
  return (
    <section id="web-development" className="mt-24 lg:mt-32">
      <div className="text-center">
        <h1 className="text-3xl poppins-bold text-gray-800">Web Development</h1>
        <p className="line-height-2 px-3 text-xs text-gray-600 mt-2 lg:px-40 lg:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolore totam, corrupti non tempore, repudiandae tenetur at consequatur aperiam distinctio ducimus itaque, ratione magnam provident consequuntur vel iusto. Eos, commodi.</p>
        <div className="bg-gray-100 p-4 grid grid-cols-2 items-center my-10 lg:mx-24 xl:mx-72">
          <figure>
            <Image src={project} alt="" loading="lazy" className=""/>
          </figure>
          <p className="p-8 text-start text-gray-600 text-xs sm:text-base md:text-2xl">
            Fully responsive, custom design, Wordpress CMS websites
          </p>
        </div>
      </div>
    </section>
  )
}
