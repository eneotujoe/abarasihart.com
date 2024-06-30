import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineLinkedin } from "react-icons/ai"

import { siteConfig } from '../app/config/site'


export default function SocialLinks() {
  return (
    <div>
      <div className="grid grid-flow-col gap-2 ">
        <Button asChild>
          <Link href={siteConfig.socialLinks.x} className="bg-primary-foreground hover:bg-slate-300">
            <FaXTwitter size={20} className="text-primary" />
          </Link>
        </Button>

        <Button asChild>
          <Link href={siteConfig.socialLinks.facebook} className="bg-primary-foreground hover:bg-slate-300">
            <FaFacebookF size={20} className="text-primary" />
          </Link>
        </Button>

        <Button asChild>
          <Link href={siteConfig.socialLinks.linkedIn} className="bg-primary-foreground hover:bg-slate-300">
            <AiOutlineLinkedin size={20} className="text-primary" />
          </Link>
        </Button>
      </div>
    </div>
    
  )
}

