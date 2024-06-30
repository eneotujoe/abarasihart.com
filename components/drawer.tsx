'use client'

import React from 'react'
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { IoMenu } from "react-icons/io5";

import ThemeMode from './theme-mode'
import { siteConfig } from '../app/config/site'


export default function DrawerIcon({ className }:any) {

  return (
    <aside>
      <Sheet>
        <SheetTrigger>
          <IoMenu className={ className } />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className='text-primary'>{siteConfig.name}</SheetTitle>
          </SheetHeader>

          <div className='mx-5'>
            {siteConfig.mainNav.map((navItem, index) => (
              <div key={index} className='my-1'>
                <Button asChild className='uppercase block'>
                  <Link href={navItem.href}>{ navItem.title }</Link>
                </Button>
              </div>
            ))}
            <ThemeMode />
          </div>
        </SheetContent>
      </Sheet>
    </aside>
  )
}

