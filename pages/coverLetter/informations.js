import React, { useState } from 'react'
import DropDowns from '../../components/DropDowns'
import PhaseCoverLetter from '../../components/PhaseCoverLetter'
import jobs from "../../data/jobs"

function informations() {
   const [typeSelect , setTypeSelect]  = useState("Type of job")
   const [jobSelect , setJobSelect]  = useState("Name of job")
   const [JobsOfType , setJobOfType] = useState([]);
  return (
    <div>
        <PhaseCoverLetter data={2} />
        <div className=' flex mt-12 justify-center pb-10 md:mx-10'>

            <div className=' w-2/3 mt-10 text-center min-h-screen  '>
                <h1 className=' text-blue-500 font-bold text-4xl tracking-wider mb-10'>
                    The Job You are looking for !
                </h1>
                <div>
                  <DropDowns data={jobs} title={typeSelect} onHandlerClick={setTypeSelect} />
                </div>
                <div>
                  <DropDowns data={JobsOfType} title={jobSelect} onHandlerClick={setJobSelect} />
                </div>       
            </div>

            <div className='w-1/3  pr-16 '>
                <div className=' w-full flex justify-start'>
                     <img src='/idea.jpg' className=' w-32' />
                </div>
                <div>
                    <h3 className=' text-blue-500 font-bold tracking-wider text-xl'>Select a Job</h3>
                    <p className=' tracking-wider font-semibold text-xs text-gray-500 mt-2'>
                       This is a page to select the job you want apply for  ,You should choose type of the job you are want .After that we will show all the jobs of categorie that you choose ,select your job name and let's go further .You can't continue if you don't select one . </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default informations