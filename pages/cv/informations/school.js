import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import SelectScholDegree from '../../../components/SelectScholDegree'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SelectScholDegree />
        

    </div>
  )
}


export default informations 