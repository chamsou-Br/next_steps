import classNames from 'classnames'
import React from 'react'

function ContinueCL({disabled}) {
  return (
      <>
         {/* Button back contine */}
        <div  className=' flex justify-between mx-8 md:mx-16  lg:mx-20  xl:mx-28  mt-4'>
            <button   className=' bg-white border  text-blue-500 hover:bg-slate-50 text-sm font-bold tracking-wider text-center px-6 lg:px-8 py-3 rounded-md '>
                     Back
            </button>
            <button disabled={disabled} className={classNames('  bg-blue-500 text-white text-sm font-bold tracking-wider text-center px-8 lg:px-12 py-3 rounded-md ',{
                      " cursor-not-allowed" : disabled,
                      "hover:bg-white hover:border hover:text-blue-500 cursor-pointer" : !disabled ,
                       })}>
                  Continue
            </button>
       </div>
      </>

  )
}

export default ContinueCL