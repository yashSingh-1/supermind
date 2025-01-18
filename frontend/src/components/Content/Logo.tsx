import Image from 'next/image'
import React from 'react'
import LogoSVG from "../../../public/LogoSVG.svg"

const Logo = () => {
  return (
    <div className='flex'>
        <Image className='invert mr-4' src={LogoSVG} alt='Logo' height={34} width={24}/>
        <p className='font-mono text-xl font-bold flex text-[#8663de]'>
          TriggerMind
        </p>
    </div>
  )
}

export default Logo