import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import Link from "next/link"
import { cn } from '@/lib/utils';


interface ContentCard {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  href?: any;
}



export const ContentCard: React.FC<ContentCard> = ({ children, className, title, href }) => {

  return (
    <Link href={href}>
      <Card className={cn("hover:shadow-2xl min-h-60", className)}>
        <CardHeader>
            <CardTitle className="text-lg font-bold">{title }</CardTitle>
        </CardHeader>
        <CardContent>
            { children }
        </CardContent>
      </Card>
    </Link>
  )
}

export const ServicesCard: React.FC<ContentCard> = ({ children, className }) => {

  return (
    <Card className={cn("hover:shadow-2xl min-h-60 my-3 py-3", className)}>
      <CardContent className="text-lg font-bold">
          { children }
      </CardContent>
    </Card>
  )
}
