import React, { useState } from 'react'
import ExperienceCL from '../../components/ExperienceCL'
import Footer from '../../components/Footer'
import PhaseCoverLetter from '../../components/PhaseCoverLetter'
import SelectJobCL from '../../components/SelectJobCL'
import SkilllsCoverLetter from '../../components/SkilllsCoverLetter'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SkilllsCoverLetter />
        


    </div>
  )
}

export default informations