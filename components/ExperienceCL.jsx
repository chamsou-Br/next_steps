import classNames from 'classnames'
import React, { useState } from 'react'
import DropDowns from './CoverLetter/DropDowns'
import jobs from "../data/jobs"
import HelpCL_Small from './CoverLetter/HelpCL_Small';
import HelpCL_Larg from './CoverLetter/HelpCL_Larg';
import ContinueCL from './CoverLetter/ContinueCL';
import YearExperience from './CoverLetter/YearExperience';

function ExperienceCL() {
    const [level , setLevel] = useState(null);
    const [yearExperience , setYearExperience] = useState(0);
    const [lastJob , setLastJob ] = useState("Last Job");

  return (
    <div className="">

        {/* Help Cover letter */}
      <HelpCL_Small title="Experience With this Job" desc="This is a page to let you give us your experience in this job and give us title of your last job if exist  .You can't continue if you don't choose your level of expertise . " />
           
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
                <YearExperience disabled={ level == null} active={yearExperience} setYearExperience={setYearExperience} />
                

                {/* Last Work */}
                <div className=''>
                  <DropDowns data={jobs} title={lastJob} onHandlerClick={setLastJob} disabled={false} />
                </div> 

                <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

                {/* Button back contine */}
                <ContinueCL disabled={yearExperience == 0 || level == null} />

            </div>

             {/* Help Cover letter */}
             <HelpCL_Larg title="Experience With this Job" desc="This is a page to let you give us your experience in this job and give us title of your last job if exist  .You can't continue if you don't choose your level of expertise . " />
           
        </div>
    </div>
  )
}

export default ExperienceCL