import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import jobs from '../../../data/jobs'
import SelectJobCL from '../../../components/SelectJobCL'

function selectJob() {
  

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SelectJobCL data={jobs} />        
    </div>
  )
}


export default selectJob 