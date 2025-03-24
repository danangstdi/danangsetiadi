import React from 'react'
import { Facebook, Github, Google, Instagram, Linkedin } from 'react-bootstrap-icons'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='pb-14 md:pb-0'>
      <div className="social-card mx-auto mb-8">
        <span>Social</span>
        <a className="social-link" href="#">
          <Github size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="#">
          <Instagram size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="#">
          <Google size={18} className='fill-black'/>
        </a>
        <a className="social-link" href="#">
          <Linkedin size={18} className='fill-black'/>
        </a>
      </div>
      <p className='text-sm text-gray-500 text-center font-semibold py-4 md:text-sm'>© {currentYear} Danang. All rights reserved.</p>
    </footer>
  )
}
