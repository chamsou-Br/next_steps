import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import jobs from '../../../data/jobs'
import LastJobCL from '../../../components/LastJobCL'

function lastJob() {
  

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <LastJobCL data={jobs} />       
    </div>
  )
}


export default lastJob 