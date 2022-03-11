import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import jobs from '../../../data/jobs'
import SkilllsCoverLetter from '../../../components/SkilllsCoverLetter'

function skillsJob() {
  

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SkilllsCoverLetter data={jobs} />        
    </div>
  )
}


export default skillsJob 