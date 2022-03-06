import React from 'react'

function IntroModalCL({max}) {
  return (
    <div>
            Select skills
            { max ? (
              <p className=" text-sx text-white tracking-wide font-meduim">You select nombre maximum of skills</p>
            )  : null} 
    </div>
  )
}

export default IntroModalCL