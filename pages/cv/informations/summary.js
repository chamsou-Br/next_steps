import React, { useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import HelpCL_Small from '../../../components/shared/HelpCL_Small';
import HelpCL_Larg from '../../../components/shared/HelpCL_Larg';
import ContinueCL from '../../../components/CoverLetter/ContinueCL';
import StoriesLastWork from '../../../components/CoverLetter/StoriesLastWork';

function informations() {

  const onHandlerGetExperience = (s) => {
    setsummarySection(s);
  }

  // STATE
  const [summarySection , setsummarySection] = useState("");
  return (
    <div className=' min-h-screen'>
        <PhaseStep data={2} />
        
        {/* Help Cover letter */}
      <HelpCL_Small title="Summary" desc="This is a page to let you create your summat ,it's a important section in cv , make sure to creat a best one . you can't continue i you dont fill up the box . " />
           
        <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
            <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
                <h1  className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-6'>
                    Your Summary
                </h1>

                <StoriesLastWork title={'Add your Summary'} value={summarySection} onHandlerClick={onHandlerGetExperience} />

                <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

                {/* Button back contine */}
                <ContinueCL next={"/cv/informations/certaficates"} last={"/coverLetter/informations/selectJob"} disabled={false} />

             </div>

             {/* Help Cover letter */}
             <HelpCL_Larg title="Summary" desc="This is a page to let you create your summat ,it's a important section in cv , make sure to creat a best one . you can't continue i you dont fill up the box . " />
           
        </div>
        

    </div>
  )
}


export default informations 