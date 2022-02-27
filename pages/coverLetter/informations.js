import React, { useState } from 'react'
import ExperienceCL from '../../components/ExperienceCL'
import Footer from '../../components/Footer'
import PhaseCoverLetter from '../../components/PhaseCoverLetter'
import SelectJobCL from '../../components/SelectJobCL'

function informations() {

  return (
    <div className=' relative'>
        <PhaseCoverLetter data={2} />
        <SelectJobCL />


    </div>
  )
}

export default informations