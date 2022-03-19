import React, { useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import SelectCertaficates from '../../../components/selectCertaficate'
import WhoMe from '../../../components/whoMe'

function certaficates() {

  return (
    <div className=' '>
        <PhaseStep data={2} />
        <SelectCertaficates />  
    </div>
  )
}




export default certaficates