import React from 'react'
import { SiOpenai } from "react-icons/si";
import { IoPersonOutline } from "react-icons/io5"
import { Button } from "@/components/ui/button"


function UserIcon() {
  return (
    <Button variant={'outline'}  size={'icon'}>
      <IoPersonOutline />
    </Button>
  )
}

function OpenaiIcon() {
  return (
    <Button variant={'outline'} size={'icon'} className='border-none'>
      <SiOpenai />
    </Button>
  )
}

export { UserIcon, OpenaiIcon }