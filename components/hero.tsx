'use client'

import React, { useEffect } from "react"
import Image from 'next/image'


export default function Hero() {

  return (
    <section
      className="relative grid h-screen place-content-center overflow-hidden bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-lime-500 to-90% hover:to-yellow-300 -mt-14"
    >
      <div className="relative flex flex-col items-center">
        <div className="rounded-full">
          <Image
            src="/hart.png"
            alt="img"
            width={250}
            height={24}
            priority
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-6xl text-transparent text-center font-black" style={{ WebkitTextStroke: '2px white' }}>
            Abarasi Hart (PhD)
          </h1>
        </div>
      </div>
    </section>
  );


}
