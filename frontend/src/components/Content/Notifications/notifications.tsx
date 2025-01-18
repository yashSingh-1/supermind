import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import React from 'react'

const notifications = () => {
  return (
    <Button className='flex overflow-hidden gap-x-2 border-2
    border-[#3352CC] rounded-full px-4 py-1 items-center mt-1'>
        <Bell color='#3352CC' fill='#3352CC'/>
    </Button>
  )
}

export default notifications