import React, { useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import SelectCertaficates from '../../../components/selectCertaficate'
import SelectLangauges from '../../../components/SelectLangauges'
import WhoMe from '../../../components/whoMe'

function langue() {

  return (
    <div className=' '>
        <PhaseStep data={2} />
        <SelectLangauges />
    </div>
  )
}




export default langue