import React from 'react'
import PhaseCoverLetter from '../../components/CoverLetter/PhaseCoverLetter'
import SwiperCoverLetter from '../../components/shared/swiperTemplates'

const data = [
    {src : "/cv1.jpg"},
    {src : "/cv2.jpg"},
    {src  : "/cv3.jpg"},
    {src : '/cv4.jpg' },
    {src :"/cv5.jpg"}
  ]

function templates() {
  return (
    <div className='container-snap min-h-screen'>
            <PhaseCoverLetter data={1} />
            <h1 className=' mt-8 mb-12 text-center text-blue-500 font-bold tracking-wider lg:text-3xl md:text-xl text-lg'>Lat's start with  your Template</h1>
            <div>
                <SwiperCoverLetter route="/cv/informations/personnalInformation" data={data} />
            </div>

    </div>
  )
}

export default templates