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
import { useRouter } from 'next/router'
import SkilllsCV from '../../components/skillscv'

function informations() {
  const {query} = useRouter()

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />

        {query.step == "skills" ? (
            <SkilllsCV data={jobs} />
        ) : (
          <div className=' h-screen flex justify-center' >
              <h1 className=' m-auto font-bold text-xl' >404 page</h1>
          </div>
        ) }
        

    </div>
  )
}


export default informations 