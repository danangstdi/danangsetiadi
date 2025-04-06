import React from 'react'
import { Github, Google, Instagram, Linkedin, Whatsapp } from 'react-bootstrap-icons'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='pb-14 md:pb-0'>
      <div className="social-card mx-auto mb-8">
        <span>Contact Me</span>
        <a className="social-link" href="https://github.com/danangstdi" target='_blank'>
          <Github size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="https://www.instagram.com/danangstd_/" target='_blank'>
          <Instagram size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="mailto:danangsetiadi2003@gmail.com" target='_blank'>
          <Google size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="https://wa.me/6285335837454" target='_blank' rel="noopener noreferrer">
          <Whatsapp size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="https://www.linkedin.com/in/danang-setiadi-75a176262/" target='_blank'>
          <Linkedin size={18} className='fill-black'/>
        </a>
      </div>
      <p className='text-sm text-gray-500 text-center font-semibold py-4 md:text-sm dark:text-slate-300'>© {currentYear} Danang. All rights reserved.</p>
    </footer>
  )
}
