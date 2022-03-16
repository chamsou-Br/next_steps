import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import SummaryCV from '../../../components/summaryCV'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SummaryCV />
        

    </div>
  )
}


export default informations 