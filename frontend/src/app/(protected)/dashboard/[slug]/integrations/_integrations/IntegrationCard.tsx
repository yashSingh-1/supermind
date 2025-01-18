import React from 'react'

type Props = {
    title: string
    description: string
    icons: React.ReactNode
    strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ({title, description, icons, strategy}: Props) => {
  return (
    <div className='border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center'>
        {icons}
        <div className='flex flex-col flex-1'>
            <h3 className='text-xl'>
                {title}
            </h3>
            <p className='text-[#9D9D9D] text-base w-full md:w-10/12 xl:w-8/12 2xl:w-6/12' >
                {description}
            </p>
        </div>
    </div>
  )
}

export default IntegrationCard