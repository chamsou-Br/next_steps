import classNames from 'classnames'
import React from 'react'
import {FaCheck} from 'react-icons/fa'

function Checkbox({checked,disabled,hover,item}) {
  return (
    <div  className=' inline-block' >
        <div className={classNames(' h-4 w-4 mt-0.5   text-center flex justify-center border border-gray-500  p-0.5' , {
            "border-blue-500 border-2 " : hover == item && !checked ,
            " bg-blue-500 border-blue-500 " : checked == true,
            "bg-white" : checked == false,
            'hover:border-blue-500 hover:border-2 cursor-pointer' : disabled == false
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