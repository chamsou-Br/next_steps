import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import SelectWorkHistory from '../../../components/selectWorkHistorycv'

function workHistory() {

  return (
    <div className=' '>
        <PhaseCoverLetter data={2} />
        <SelectWorkHistory  />
        

    </div>
  )
}
export default  workHistory

