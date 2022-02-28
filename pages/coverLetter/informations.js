import React, { useState } from 'react'
import Scrollbar from 'react-scrollbars-custom'
import Checkbox from '../../components/CoverLetter/checkbox'
import ExperienceCL from '../../components/ExperienceCL'
import Footer from '../../components/Footer'
import PhaseCoverLetter from '../../components/CoverLetter/PhaseCoverLetter'
import SelectJobCL from '../../components/SelectJobCL'
import SkilllsCoverLetter from '../../components/SkilllsCoverLetter'
import jobs from '../../data/jobs'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <ExperienceCL data={jobs} />
        


    </div>
  )
}

export default informations