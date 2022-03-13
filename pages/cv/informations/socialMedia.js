import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import SelectSocialMedia from '../../../components/selectSocialMedia'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SelectSocialMedia />
        

    </div>
  )
}


export default informations 