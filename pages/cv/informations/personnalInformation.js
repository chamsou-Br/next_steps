import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import jobs from '../../../data/jobs'
import WhoMe from '../../../components/whoMe'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <WhoMe data={jobs} />
        

    </div>
  )
}


export default informations 