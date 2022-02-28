import classNames from 'classnames'
import React from 'react'
import {FaCheck} from 'react-icons/fa'

function Checkbox({checked,onChecked}) {
  return (
    <div onClick={()=>onChecked()} className=' inline-block' >
        <div className={classNames(' h-5 w-5  text-center flex justify-center border border-gray-500 hover:border-blue-500 p-0.5' , {
            " bg-blue-500 border-blue-500 " : checked == true,
            "bg-white" : checked == false
        })} >
            <FaCheck  className={classNames("  text-white",{
              " opacity-0 " : checked == false ,
              " opacity-100" : checked == true
            })} size={14} />
        </div>
    </div>
  )
}

export default Checkbox