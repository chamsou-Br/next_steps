import React, { useState } from 'react'
import PhaseCoverLetter from '../../components/CoverLetter/PhaseCoverLetter'
import jobs from '../../data/jobs'
import SkilllsCV from '../../components/skillscv'
import WhoMe from '../../components/whoMe'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SkilllsCV data={jobs} />
        

    </div>
  )
}


export default informations 