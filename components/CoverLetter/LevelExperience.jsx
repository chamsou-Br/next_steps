import classNames from 'classnames'
import React from 'react'

function LevelExperience({level , setLevel}) {
  return (
    <div className='flex justify-evenly'>
    <button  className={classNames(' border hover:border-blue-500 bg-white text-blue-500 cursor-pointer text-sm font-bold tracking-wider text-center px-8 lg:px-12 py-3 rounded-md ',{
        "border-blue-500 " : level == "Junior",
    })} onClick={()=>setLevel("Junior")}>
        Junior
    </button>
    <button  className={classNames('border hover:border-blue-500  bg-white text-blue-500 cursor-pointer text-sm font-bold tracking-wider text-center px-8 lg:px-12 py-3 rounded-md ',{
        "border-blue-500" : level == "Senior",
    })} onClick={()=>setLevel("Senior")}>
        Senior
    </button>
    <button  className={classNames('border hover:border-blue-500  bg-white text-blue-500 cursor-pointer text-sm font-bold tracking-wider text-center px-8 lg:px-12 py-3 rounded-md ',{
        "border-blue-500 " : level == "Expert",
    })} onClick={()=>setLevel("Expert")}>
        Expert
    </button>

</div>  
  )
}

export default LevelExperience