import { TopSuggestions } from '@/constants/topSuggestions'
import React from 'react'

const SuggestionBox = () => {

  return (
    <div className='flex gap-x-2 py-2'>
        <p className='px-3 py-2 mt-2 text-sm text-slate-600'>
            Top Suggestions: 
        </p>
        {
            TopSuggestions.map((item) => (
                <div className='px-3 py-2 rounded-full bg-transparent border-2 w-fit flex gap-x-4 mt-2' key={item.name} >
                    <div className='w-fit text-white text-xs'>
                    {item.name}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default SuggestionBox