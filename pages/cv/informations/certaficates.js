import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import SelectCertaficates from '../../../components/selectCertaficate'
import WhoMe from '../../../components/whoMe'

function certaficates() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SelectCertaficates />  
    </div>
  )
}




export default certaficates