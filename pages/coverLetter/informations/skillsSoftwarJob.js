import React, { useState } from 'react'
import PhaseCoverLetter from '../../components/CoverLetter/PhaseCoverLetter'
import jobs from '../../data/jobs'
import SoftwarSkillsCL from '../../../components/SoftwarSkillsCL'

function skillsSoftwarJob() {
  

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SoftwarSkillsCL data={jobs} />        
    </div>
  )
}


export default skillsSoftwarJob