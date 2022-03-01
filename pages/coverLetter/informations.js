import React, { useState } from 'react'
import Scrollbar from 'react-scrollbars-custom'
import Checkbox from '../../components/CoverLetter/checkbox'
import ExperienceCL from '../../components/ExperienceCL'
import Footer from '../../components/Footer'
import PhaseCoverLetter from '../../components/CoverLetter/PhaseCoverLetter'
import SelectJobCL from '../../components/SelectJobCL'
import SkilllsCoverLetter from '../../components/SkilllsCoverLetter'
import jobs from '../../data/jobs'
import SoftwarSkillsCL from '../../components/SoftwarSkillsCL'
import LastJobCL from '../../components/LastJobCL'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <LastJobCL data={jobs} />
        


    </div>
  )
}

export default informations