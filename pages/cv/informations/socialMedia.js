import React, { useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import SelectSocialMedia from '../../../components/selectSocialMedia'

function informations() {

  return (
    <div className=' '>
        <PhaseStep data={2} />
        <SelectSocialMedia />
        

    </div>
  )
}


export default informations 