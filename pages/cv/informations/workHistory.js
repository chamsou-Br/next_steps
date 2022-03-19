import React, { useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import SelectWorkHistory from '../../../components/selectWorkHistorycv'

function workHistory() {

  return (
    <div className=' '>
        <PhaseStep data={2} />
        <SelectWorkHistory  />
        

    </div>
  )
}
export default  workHistory

