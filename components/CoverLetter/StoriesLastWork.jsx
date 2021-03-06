import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

function StoriesLastWork(props) {
    const [active,setActive] = useState(props.value.length > 0)
  return (
    <div className=' mt-10'>
        {!active && (
                <div className=' h-40 w-11/12 md:w-3/5 m-auto text-center flex justify-center border-dashed border-4  '>       
                <div className=' hover:text-blue-500 font-bold text-sm tracking-wider cursor-pointer flex justify-center m-auto' variant="primary" onClick={() => setActive(true)}>
                <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
               {props.title ? props.title : "Experience in Last Work"} 
                </div>
              </div>
        )}

        {active && (
            <textarea type="text" value={props.value} autoFocus onChange={(e)=>props.onHandlerClick(e.target.value)} className=' placeholder:text-center text-gray-500 border-blue-500 text-sm tracking-wider font-semibold p-2 focus:outline-none h-40 w-11/12 md:w-3/5  border-dashed border-4' />
        )}
        
    </div>
  )
}

export default StoriesLastWork