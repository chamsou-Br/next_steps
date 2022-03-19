import React, { useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import SelectScholDegree from '../../../components/SelectScholDegree'

function informations() {

  return (
    <div className=' '>
        <PhaseStep data={2} />
        <SelectScholDegree />
        

    </div>
  )
}


export default informations 