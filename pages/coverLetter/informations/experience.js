import React, { useState } from 'react'
import ExperienceCL from '../../components/ExperienceCL'
import PhaseCoverLetter from '../../components/CoverLetter/PhaseCoverLetter'
import jobs from '../../data/jobs'

function experience() {
  

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <ExperienceCL data={jobs} />        
    </div>
  )
}


export default experience 