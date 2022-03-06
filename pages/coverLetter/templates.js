import React from 'react'
import PhaseCoverLetter from '../../components/CoverLetter/PhaseCoverLetter'
import SwiperCoverLetter from '../../components/CoverLetter/swiperCoverLetter'

const data = [
  {src : "/coverLetter.jpg"},
  {src : "/coverLetter2.jpg"},
  {src  : "/coverLetter2.png"},
  {src : '/coverLetter3.png' },
  {src :"/coverLetter4.jpg"}
]

function templates() {
  return (
    <div className='container-snap'>
            <PhaseCoverLetter data={1} />
            <h1 className=' mt-8 mb-12 text-center text-blue-500 font-bold tracking-wider lg:text-3xl md:text-xl text-lg'>Lat's start with  your Template</h1>
            <div>
                <SwiperCoverLetter data={data} />
            </div>

    </div>
  )
}

export default templates