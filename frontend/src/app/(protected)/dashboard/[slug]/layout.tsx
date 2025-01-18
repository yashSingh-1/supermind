import NavigationBar from '@/components/Content/navigation-bar'
import Sidebar from '@/components/Content/Sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode,
    params: {slug: string}
}

const layout = ({children, params}: Props) => {
  return (
    <div className='p-3'>
        <Sidebar slug={params.slug} />
        {/* NavigationBar */}
        <div className='
        lg:ml-[250px]
        lg:pl-10
        lg:py-5 
        flex
        flex-col
        overflow-auto
        '>
          <NavigationBar slug={params.slug}/>
          {children}
        </div>
    </div>
  )
}

export default layout