import React, { useState } from 'react'
import PhaseCoverLetter from '../../components/PhaseCoverLetter'
import SelectJobCL from '../../components/SelectJobCL'

function informations() {

  return (
    <div>
        <PhaseCoverLetter data={2} />
        <SelectJobCL />


    </div>
  )
}

export default informations