import React from 'react'
import Logoo from './image/mazaady-logo.svg'
import Image from 'next/image'


export default function Logo() {
  return (
    <div>
    <Image src={Logoo}  alt="Picture of the author" className="w-[109px] h-[34px]"/>
    
    </div>
  )
}
