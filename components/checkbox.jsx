import classNames from 'classnames'
import React from 'react'
import {FaCheck} from 'react-icons/fa'

function Checkbox({checked}) {
  return (
    <div  className=' inline-block' >
        <div className={classNames(' h-4 w-4 mt-0.5 cursor-pointer  text-center flex justify-center border border-gray-500 hover:border-blue-500 hover:border-2 p-0.5' , {
            " bg-blue-500 border-blue-500 " : checked == true,
            "bg-white" : checked == false
        })} >
            <FaCheck  className={classNames("  text-white",{ 
              " opacity-0 " : checked == false ,
              " opacity-100" : checked == true
            })} size={10} />
        </div>
    </div>
  )
}

export default Checkbox