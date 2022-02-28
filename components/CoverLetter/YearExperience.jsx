import classNames from 'classnames'
import React from 'react'

function YearExperience({disabled , active,setYearExperience}) {
  return (
    <div className=' m-auto flex justify-center mt-6 '>
    <div className={classNames(" cursor-pointer mr-5 border flex  rounded-full w-10 h-10 text-base font-bold ",{
            "hover:border-blue-500 text-blue-500" : !disabled ,
            "text-gray-500 cursor-default" : disabled,
            "border-blue-500 " : active == 1,
    })} onClick={()=>!disabled ? setYearExperience(1) : null}>
        <p className=' m-auto text-center'>1</p>
    </div>
    <div className={classNames(" cursor-pointer mr-5 border flex  rounded-full w-10 h-10 text-base font-bold ",{
            "hover:border-blue-500 text-blue-500" : !disabled ,
            "text-gray-500 cursor-default" :disabled,
            "border-blue-500 " : active == 2 ,
    })} onClick={()=>!disabled ? setYearExperience(2) : null}>
        <p className=' m-auto text-center'>2</p>
    </div>
    <div className={classNames(" cursor-pointer mr-5 border flex  rounded-full w-10 h-10 text-base font-bold ",{
            "hover:border-blue-500 text-blue-500" : !disabled ,
            "text-gray-500 cursor-default" : disabled,
            "border-blue-500 " : active == 3,
    })} onClick={()=>!disabled ? setYearExperience(3) : null}>
        <p className=' m-auto text-center'>3</p>
    </div>
    <div className={classNames(" cursor-pointer mr-5 border flex  rounded-full w-10 h-10 text-base font-bold ",{
            "hover:border-blue-500 text-blue-500" :!disabled ,
            "text-gray-500 cursor-default" : disabled,
            "border-blue-500 " : active == 4,
    })} onClick={()=>!disabled ? setYearExperience(4) : null}>
        <p className=' m-auto text-center'>4</p>
    </div>
    <div className={classNames(" cursor-pointer border flex  rounded-full w-10 h-10 text-base font-bold ",{
            "hover:border-blue-500 text-blue-500" : !disabled ,
            "text-gray-500 cursor-default " : disabled,
            "border-blue-500 " : active == 5,
    })} onClick={()=>!disabled ? setYearExperience(5) : null}>
        <p className=' m-auto text-center'>+5</p>
    </div>
</div> 
  )
}

export default YearExperience