import React from 'react'

function HelpCL_Larg({title , desc}) {
  return (
    <div className='hidden lg:block lg:w-1/3 border-l mt-16   pl-2 h-full pb-10'>
    <div className=' w-full flex justify-center'>
         <img src='/idea.jpg' className=' w-32' />
    </div>
    <div className=' text-center'>
        <h3 className=' text-blue-500 font-bold tracking-wider text-xl'>{title}</h3>
        <p className=' tracking-wider font-semibold text-xs text-gray-500 mt-2'>
           {desc} 
        </p>
    </div>

</div>
  )
}

export default HelpCL_Larg