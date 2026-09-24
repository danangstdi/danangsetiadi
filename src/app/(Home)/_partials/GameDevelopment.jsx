import Image from "next/image"
import project from '@/../../public/img/game/Frame 8.png'

export default function GameDevelopment() {
  return (
    <section id="game-development" className="pt-24 lg:pt-32 bg-gray-100 border-b dark:bg-neutral-950 dark:border-neutral-950">
      <div className="text-center">
        <h1 className="text-3xl poppins-bold text-gray-800 dark:text-slate-100">Released Now</h1>
        <p className="line-height-2 px-3 text-xs text-gray-600 mt-2 lg:px-40 lg:text-base dark:text-slate-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolore totam, corrupti non tempore, repudiandae tenetur at consequatur aperiam distinctio ducimus itaque, ratione magnam provident consequuntur vel iusto. Eos, commodi.</p>
        <div className="bg-gray-100 px-10 lg:px-40 flex items-center my-10 lg:mx-24 xl:mx-72 dark:bg-transparent">
          <figure>
            <Image src={project} alt="" loading="lazy"/>
          </figure>
        </div>
      </div>
    </section>
  )
}
