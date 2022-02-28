import React, { useState } from 'react'
import Scrollbar from 'react-scrollbars-custom'
import Checkbox from '../../components/checkbox'
import ExperienceCL from '../../components/ExperienceCL'
import Footer from '../../components/Footer'
import PhaseCoverLetter from '../../components/PhaseCoverLetter'
import SelectJobCL from '../../components/SelectJobCL'
import SkilllsCoverLetter from '../../components/SkilllsCoverLetter'
import jobs from '../../data/jobs'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SkilllsCoverLetter data={jobs} />
        <Checkbox checked={true} />
        


    </div>
  )
}

export default informations