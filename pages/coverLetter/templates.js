import React from 'react'
import PhaseStep from '../../components/shared/PhaseStep'
import SwiperCoverLetter from '../../components/shared/swiperTemplates'


const data = [
  {src : "/coverLetter.jpg"},
  {src : "/coverLetter2.jpg"},
  {src  : "/coverLetter2.png"},
  {src : '/coverLetter3.png' },
  {src :"/coverLetter4.jpg"}
]

function templates() {
  return (
    <div className='container-snap min-h-screen'>
            <PhaseStep data={1} />
            <h1 className=' mt-8 mb-12 text-center text-blue-500 font-bold tracking-wider lg:text-3xl md:text-xl text-lg'>Lat's start with  your Template</h1>
            <div>
                <SwiperCoverLetter route="/coverLetter/informations/selectJob" data={data} />
            </div>

    </div>
  )
}

export default templates