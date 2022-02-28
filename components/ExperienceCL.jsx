import classNames from 'classnames'
import React, { useState } from 'react'
import DropDowns from './DropDowns'
import jobs from "../data/jobs"

function ExperienceCL() {
    const [level , setLevel] = useState(null);
    const [yearExperience , setYearExperience] = useState(0);
    const [lastJob , setLastJob ] = useState("Last Job");

  return (
    <div className="">
        {/* help  */}
          <div className=' lg:hidden w-5/6 sm:w-3/4 m-auto '>
                <div className=' w-full flex justify-center'>
                     <img src='/idea.jpg' className=' w-32' />
                </div>
                <div>
                    <h3 className=' text-blue-500 font-bold text-center tracking-wider text-xl'>Experience with this Job </h3>
                    <p className=' tracking-wider font-semibold text-center text-xs text-gray-500 mt-2 '>
                    This is a page to let you give us your experience in this job and give us title of your last job if exist  .You can't continue if you don't choose your level of expertise .  </p>
                </div>

            </div>
        <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
            <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
                <h1 className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
                    Your Level in this Job 
                </h1>

                {/* Level Experience */}
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
                    
                {/* Year Experience */}
                <div className=' m-auto flex justify-center mt-6 '>
                    <div className={classNames(" cursor-pointer mr-5 border flex  rounded-full w-10 h-10 text-base font-bold ",{
                            "hover:border-blue-500 text-blue-500" : level !=null ,
                            "text-gray-500 cursor-default" : level == null,
                            "border-blue-500 " : yearExperience == 1,
                    })} onClick={()=>level !=null ? setYearExperience(1) : null}>
                        <p className=' m-auto text-center'>1</p>
                    </div>
                    <div className={classNames(" cursor-pointer mr-5 border flex  rounded-full w-10 h-10 text-base font-bold ",{
                            "hover:border-blue-500 text-blue-500" : level !=null ,
                            "text-gray-500 cursor-default" : level == null,
                            "border-blue-500 " : yearExperience == 2 ,
                    })} onClick={()=>level !=null ? setYearExperience(2) : null}>
                        <p className=' m-auto text-center'>2</p>
                    </div>
                    <div className={classNames(" cursor-pointer mr-5 border flex  rounded-full w-10 h-10 text-base font-bold ",{
                            "hover:border-blue-500 text-blue-500" : level !=null ,
                            "text-gray-500 cursor-default" : level == null,
                            "border-blue-500 " : yearExperience == 3,
                    })} onClick={()=>level !=null ? setYearExperience(3) : null}>
                        <p className=' m-auto text-center'>3</p>
                    </div>
                    <div className={classNames(" cursor-pointer mr-5 border flex  rounded-full w-10 h-10 text-base font-bold ",{
                            "hover:border-blue-500 text-blue-500" : level !=null ,
                            "text-gray-500 cursor-default" : level == null,
                            "border-blue-500 " : yearExperience == 4,
                    })} onClick={()=>level !=null ? setYearExperience(4) : null}>
                        <p className=' m-auto text-center'>4</p>
                    </div>
                    <div className={classNames(" cursor-pointer border flex  rounded-full w-10 h-10 text-base font-bold ",{
                            "hover:border-blue-500 text-blue-500" : level !=null ,
                            "text-gray-500 cursor-default " : level == null,
                            "border-blue-500 " : yearExperience == 5,
                    })} onClick={()=>level !=null ? setYearExperience(5) : null}>
                        <p className=' m-auto text-center'>+5</p>
                    </div>
                </div> 

                {/* Last Work */}
                <div className=''>
                  <DropDowns data={jobs} title={lastJob} onHandlerClick={setLastJob} disabled={false} />
                </div> 

                <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

                {/* Button back contine */}
                <div  className=' flex justify-between mx-8 md:mx-16  lg:mx-20  xl:mx-28  mt-4'>
                     <button   className=' bg-white border  text-blue-500 hover:bg-slate-50 text-sm font-bold tracking-wider text-center px-6 lg:px-8 py-3 rounded-md '>
                      Back
                     </button>
                    <button disabled={yearExperience == 0 || level == null} className={classNames('  bg-blue-500 text-white text-sm font-bold tracking-wider text-center px-8 lg:px-12 py-3 rounded-md ',{
                       " cursor-not-allowed" : !level || yearExperience == 0,
                       "hover:bg-white hover:border hover:text-blue-500 cursor-pointer" : level != null ,
                        })}>
                      Continue
                    </button>
                </div>

            </div>

            {/* help  */}
            <div className='hidden lg:block lg:w-1/3 mt-20 border-l pl-2 h-full pb-10 '>
                <div className=' w-full flex justify-center'>
                     <img src='/idea.jpg' className=' w-32' />
                </div>
                <div className=' text-center'>
                    <h3 className=' text-blue-500 font-bold tracking-wider text-xl'>Experience With this Job</h3>
                    <p className=' tracking-wider font-semibold text-xs text-gray-500 mt-2'>
                       This is a page to let you give us your experience in this job and give us title of your last job if exist  .You can't continue if you don't choose your level of expertise . </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ExperienceCL