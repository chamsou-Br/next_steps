import React from 'react'
import PhaseCoverLetter from '../../components/PhaseCoverLetter'
import SwiperCoverLetter from '../../components/swiperCoverLetter'

function templates() {
  return (
    <div className='container-snap'>
            <PhaseCoverLetter data={1} />
            <h1 className=' mt-8 mb-12 text-center text-blue-500 font-bold tracking-wider lg:text-3xl md:text-xl text-lg'>Lat's start with  your Template</h1>
            <div>
                <SwiperCoverLetter />
            </div>

    </div>
  )
}

export default templates