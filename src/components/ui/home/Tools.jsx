import Image from "next/image";
import figma from '@/../public/img/techstack/figma.png'
import flutter from '@/../public/img/techstack/flutter.png'
import laravel from '@/../public/img/techstack/laravel.png'
import mysql from '@/../public/img/techstack/mysql.png'
import nextjs from '@/../public/img/techstack/nextjs.png'
import php from '@/../public/img/techstack/php.png'
import postgresql from '@/../public/img/techstack/postgresql.png'
import prisma from '@/../public/img/techstack/prisma.png'
import reactjs from '@/../public/img/techstack/reactjs.png'
import vue from '@/../public/img/techstack/vue.png'

export default function Tools() {
  return (
    <section id="tools" className="-mt-36">
      <marquee behavior="" direction="" className="-my-2 p-3 bg-gray-100 lg:p-4 border-t dark:bg-slate-900 dark:border-slate-800">
        <div className="flex items-center -z-10 gap-8 md:gap-12 lg:gap-20">
          <Image src={reactjs} alt="" className="h-8 lg:h-10 w-fit -z-10 dark:saturate-0" />
          <Image src={nextjs} alt="" className="h-4 lg:h-6 w-fit -z-10 dark:saturate-0 dark:invert" />
          <Image src={vue} alt="" className="h-6 lg:h-8 w-fit -z-10 dark:saturate-0 dark:invert" />
          <Image src={prisma} alt="" className="h-6 lg:h-8 w-fit -z-10 dark:saturate-0 dark:invert" />
          <Image src={php} alt="" className="h-6 lg:h-8 w-fit -z-10 dark:saturate-0" />
          <Image src={laravel} alt="" className="h-10 lg:h-12 w-fit -z-10 dark:saturate-0 dark:invert" />
          <Image src={flutter} alt="" className="h-8 lg:h-10 w-fit -z-10 dark:saturate-0 dark:invert" />
          <Image src={mysql} alt="" className="h-9 lg:h-11 w-fit -z-10 dark:saturate-0 dark:invert" />
          <Image src={postgresql} alt="" className="h-4 lg:h-6 w-fit -z-10 dark:saturate-0 dark:invert" />
          <Image src={figma} alt="" className="h-10 lg:h-12 w-fit -z-10 dark:saturate-0 dark:invert" />
        </div>
      </marquee>
    </section>
  );
}
