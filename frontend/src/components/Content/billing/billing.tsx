import React from 'react'
import PaymentCard from './PaymentCard'

const Billing = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container'>
        <PaymentCard label='FREE' current='FREE'/>
        <PaymentCard label='PRO' current='PRO'/>
    </div>
  )
}

export default Billing