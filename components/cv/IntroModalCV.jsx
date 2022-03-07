import React from 'react'
import jobs from '../../data/jobs'
import DropDowns from '../CoverLetter/DropDowns'

function IntroModalCV({max,title,onHandler}) {
  return (
    <div>
            <div>Select skills</div>
            <DropDowns data={jobs} title={title} onHandlerClick={onHandler} disabled={false} />
            { max ? (
              <p className=" text-sx text-white tracking-wide font-meduim">You select nombre maximum of skills</p>
            )  : null} 
    </div>
  )
}

export default IntroModalCV