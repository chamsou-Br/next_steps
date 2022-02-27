import React, { useState } from 'react'
import ExperienceCL from '../../components/ExperienceCL'
import PhaseCoverLetter from '../../components/PhaseCoverLetter'
import SelectJobCL from '../../components/SelectJobCL'

function informations() {

  return (
    <div>
        <PhaseCoverLetter data={2} />
        <ExperienceCL />


    </div>
  )
}

export default informations