import { INTEGRATION_CARDS } from '@/constants/integrations'
import React from 'react'
import IntegrationCard from './_integrations/IntegrationCard'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-full lg:w-8/12 gap-y-5'>
        {
          INTEGRATION_CARDS.map((card, key) => 
          <IntegrationCard 
            key={key}
            // {...card}
            icons={card.icon}
            description={card.description}
            title={card.title}
            strategy={card.strategy}
          />)
        }
      </div>
    </div>
  )
}

export default page