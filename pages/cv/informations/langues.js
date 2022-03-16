import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import SelectCertaficates from '../../../components/selectCertaficate'
import SelectLangauges from '../../../components/SelectLangauges'
import WhoMe from '../../../components/whoMe'

function langue() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SelectLangauges />
    </div>
  )
}




export default langue