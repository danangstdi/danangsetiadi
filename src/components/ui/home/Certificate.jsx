"use client"

import Image from "next/image";
import Certif1 from '@/../public/img/certificate/1.png'
import Certif2 from '@/../public/img/certificate/2.png'
import Certif3 from '@/../public/img/certificate/3.png'
import Certif4 from '@/../public/img/certificate/4.png'
import Certif5 from '@/../public/img/certificate/5.png'
import Certif6 from '@/../public/img/certificate/6.png'
import { X } from "react-bootstrap-icons";
import { useState } from "react";

export default function Certificate() {
  const [popupOpen, setPopupOpen] = useState(false);

  const ListCertif = [
    Certif1,
    Certif2,
    Certif3,
    Certif4,
    Certif5,
    Certif6,
  ]

  return (
    <section id="web-development" className="mt-24 lg:mt-32">
      <div className="text-center">
        <h1 className="text-3xl poppins-bold text-gray-800 dark:text-slate-100">Certificate</h1>
        <p className="line-height-2 px-3 text-xs text-gray-600 mt-2 lg:px-40 lg:text-base dark:text-slate-300">
          Tap to zoom Certificate
        </p>
        <div className="bg-gray-100 p-4 grid gap-2 items-center my-10 lg:grid-cols-2 lg:mx-24 xl:mx-72 dark:bg-transparent">
          {ListCertif.map((certificate, index) => (
            <figure key={index} onClick={() => setPopupOpen(certificate)} className="cursor-pointer h-full">
              <Image src={certificate} alt="" loading="lazy" className="h-full w-full"/>
            </figure>
          ))}
        </div>
      </div>

      <div id='popup-open' className={`${!popupOpen && 'hidden'}`}>
        <div className='fixed z-40 overflow-y-scroll inset-0 bg-slate-300 bg-opacity-40 backdrop-blur-sm p-6 dark:bg-slate-800 dark:bg-opacity-40'>
          <section className='flex justify-end text-gray-700'>
            <button type='button' onClick={() => setPopupOpen(!popupOpen)} className='nav-list-item-1 bg-slate-100 bg-opacity-50 backdrop-blur-sm h-fit p-1 ml-auto rounded-md hover:bg-slate-300 dark:bg-slate-600 dark:bg-opacity-50 dark:hover:bg-slate-500'>
              <X size={25} className='text-gray-700 dark:text-slate-100'/>
            </button>
          </section>
          <section className="flex justify-center">
            <figure className="h-fit w-full shadow-xl mt-8 md:w-[40rem] md:mt-3 lg:mt-0 lg:w-[50rem]">
              <Image src={popupOpen} alt="" loading="lazy" className="h-full w-full"/>
            </figure>
          </section>
        </div>
      </div>

      {/* <div id="popup" className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-35 backdrop-blur-lg z-40">
        <figure className="h-fit w-full p-4 md:w-[40rem] lg:w-[50rem]">
          <Image src={project} alt="" loading="lazy" className="h-full w-full"/>
        </figure>
      </div> */}
    </section>
  );
}
