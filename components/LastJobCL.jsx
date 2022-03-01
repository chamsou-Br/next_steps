import React, { useState } from 'react'
import DropDowns from './CoverLetter/DropDowns'
import jobs from "../data/jobs"
import HelpCL_Small from './CoverLetter/HelpCL_Small';
import HelpCL_Larg from './CoverLetter/HelpCL_Larg';
import ContinueCL from './CoverLetter/ContinueCL';
import StoriesLastWork from './CoverLetter/StoriesLastWork';


function LastJobCL() {
    const [storieLastWork , setstorieLastWork] = useState("");
    const [lastJob , setLastJob ] = useState("Last Job");

  return (
    <div className="">

        {/* Help Cover letter */}
      <HelpCL_Small title="Last Work" desc="This is a page to let you give us the name of your last work and create some description about it ,if you are a student u can wrtie about your study . " />
           
        <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
            <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
                <h1 className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-6'>
                    Your Last Work
                </h1>

                {/* Last Work */}
                <div className=''>
                  <DropDowns data={jobs} title={lastJob} onHandlerClick={setLastJob} disabled={false} />
                </div> 
                
                <StoriesLastWork onHandlerClick={setstorieLastWork} />



                <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

                {/* Button back contine */}
                <ContinueCL disabled={lastJob == "Last Job"} />

             </div>

             {/* Help Cover letter */}
             <HelpCL_Larg title="Last Work" desc="This is a page to let you give us the name of your last work and create some description about it ,if you are a student u can wrtie about your study . " />
           
        </div>
    </div>
  )
}

export default LastJobCL