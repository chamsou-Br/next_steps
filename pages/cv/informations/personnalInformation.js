import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import WhoMe from '../../../components/whoMe'

function informations() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <WhoMe />
        

    </div>
  )
}


export default informations 