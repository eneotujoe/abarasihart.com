import React from 'react'
import { siteConfig } from '../app/config/site'
import SocialLinks from './social-links';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-secondary text-primary font-thin p-10">
      <div className='pb-5'>
        <SocialLinks />
      </div>
      <div>
        <p>&copy; { new Date().getFullYear() } | { siteConfig.name }</p>
      </div>
    </footer>
  )
}
