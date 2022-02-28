import React from 'react'

function HelpCL_Small({title , desc}) {
  return (
    <div className=' lg:hidden w-5/6 sm:w-3/4 m-auto '>
    <div className=' w-full flex justify-center'>
         <img src='/idea.jpg' className=' w-32' />
    </div>
    <div>
        <h3 className=' text-blue-500 font-bold text-center tracking-wider text-xl'>{title}</h3>
        <p className=' tracking-wider font-semibold text-center text-xs text-gray-500 mt-2 '>
           {desc} 
        </p>
    </div>

</div>
  )
}

export default HelpCL_Small