"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import ThemeMode from './theme-mode'
import DrawerIcon from './drawer'
import { siteConfig } from '../app/config/site'
import { cn } from '@/lib/utils'


const NavLink = ({ children, href, ...props }: { href: string, children: string }) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <NavigationMenuLink asChild active={isActive}>
      <Link href={href} className={cn("no-underline text-xs font-bold hover:text-slate-500 p-3", isActive ? "decoration-4" : "")} {...props}>
        { children }
      </Link>
    </NavigationMenuLink>
  )
}


export function Navbar() {
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {siteConfig.mainNav.map((navItem, index) => (
          <NavigationMenuItem key={index}>
              <NavLink href={navItem.href}>
                { navItem.title }
              </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}


export default function Header() {
  
  return (
    <header className="sticky w-full top-0 border-b border-white bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg z-10">
      <nav className='flex'>
        <div className="flex justify-between items-center min-h-11 w-full left-0 px-5 z-10">
          <div className="uppercase font-bold">{ siteConfig.name }</div>

          <div className="flex">
            <div className="md:flex hidden">
              <Navbar />
            </div>
            <div className='items-center md:flex hidden'>
              <ThemeMode />
            </div>

            <div className='flex items-center md:hidden'>
              <DrawerIcon />
            </div>
          </div>

        </div>
      </nav>
    </header>
  )
}


// import { motion, useViewportScroll, useTransform } from "framer-motion";

// const Navigation = () => {
//   const { scrollY } = useViewportScroll();
//   const background = useTransform(
//     scrollY,
//     [0, 100],
//     ["rgba(0, 183, 255, 0)", "rgba(0, 183, 255, 1)"]
//   );
//   const height = useTransform(scrollY, [0, 100], [120, 60]);

//   return (
//     <motion.div
//       id="navigation"
//       style={{
//         background,
//         height
//       }}
//     >
//       <div id="logo" />
//       <ul>
//         <li />
//         <li />
//         <li />
//       </ul>
//     </motion.div>
//   );
// };

// export default Navigation;
