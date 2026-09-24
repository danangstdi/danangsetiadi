import React from 'react'
import { Github, Google, Instagram, Linkedin, Whatsapp } from 'react-bootstrap-icons'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='pb-14 md:pb-0'>
      <div className="social-card mx-auto mb-8">
        <span>CONTACT ME</span>
        <a className="social-link" href="https://github.com/danangstdi" target='_blank'>
          <Github size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="https://www.instagram.com/danangstd_/" target='_blank'>
          <Instagram size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="mailto:danangsetiadi2003@gmail.com" target='_blank'>
          <Google size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="https://www.linkedin.com/in/danang-setiadi-75a176262/" target='_blank'>
          <Linkedin size={18} className='fill-black'/>
        </a>
      </div>
      <div className='flex items-center justify-center lg:justify-between lg:my-20 lg:mx-20 xl:mx-36'>
        <h2 className='hidden lg:block text-4xl poppins-black text-neutral-950 dark:text-white lg:text-8xl xl:text-9xl'>
          THANKS FOR COMING!😉
        </h2>
        <p className='text-sm text-nowrap text-gray-500 text-center font-semibold py-4 md:text-sm dark:text-slate-300'>
          © {currentYear} Danang. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
