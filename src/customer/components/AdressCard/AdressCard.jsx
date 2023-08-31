import React from 'react'

const AdressCard = ({address}) => {
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>Ram Kapoor</p>
        <p>mumbai</p>
        <div className='space-y-1'>
          <p className='dont-semibold'>Phone Number</p>
      <p>783708025086
        </p>
        </div>
      </div>
    </div>
  )
}

export default AdressCard
