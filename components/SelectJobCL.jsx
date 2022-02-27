import classNames from 'classnames'
import React, { useState } from 'react'
import DropDowns from './DropDowns'
import jobs from "../data/jobs"

function SelectJobCL() {
    const [typeSelect , setTypeSelect]  = useState("Type of job")
    const [jobSelect , setJobSelect]  = useState("Name of job")
    const [JobsOfType , setJobsOfType] = useState([]);
    const onHandlerSelectTypeOfJob = (type) => {
       setTypeSelect(type);
       const data =  jobs.filter((item) => item.type == type);
       setJobsOfType(data[0].list)
    }
  return (
    <div>
          <div className=' lg:hidden w-5/6 sm:w-3/4 m-auto '>
                <div className=' w-full flex justify-center'>
                     <img src='/idea.jpg' className=' w-32' />
                </div>
                <div>
                    <h3 className=' text-blue-500 font-bold text-center tracking-wider text-xl'>Select a Job</h3>
                    <p className=' tracking-wider font-semibold text-center text-xs text-gray-500 mt-2 '>
                       This is a page to select the job you want apply for  ,You should choose type of the job you are want .After that we will show all the jobs of categorie that you choose ,select your job name and let's go further .You can't continue if you don't select one . </p>
                </div>

            </div>
        <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
            <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center overflow-visible pb-40  '>
                <h1 className=' text-blue-500 font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider mb-5'>
                    The Job You are looking for !
                </h1>
                <div>
                  <DropDowns data={jobs} title={typeSelect} onHandlerClick={onHandlerSelectTypeOfJob} disabled={false} />
                </div>
                <div>
                  <DropDowns data={JobsOfType} title={jobSelect} onHandlerClick={setJobSelect} disabled={typeSelect == "Type of job"} />
                </div>      

                <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />
                <div className=' flex justify-between mx-8 md:mx-16  lg:mx-20  xl:mx-28  mt-4'>

                {/* Button back contine */}
                <button  className=' bg-white border  text-blue-500 hover:bg-slate-50 text-sm font-bold tracking-wider text-center px-6 lg:px-8 py-3 rounded-md '>
                      Back
                  </button>
                  <button disabled={jobSelect != "Name of job"} className={classNames('  bg-blue-500 text-white text-sm font-bold tracking-wider text-center px-8 lg:px-12 py-3 rounded-md ',{
                       " cursor-not-allowed" : jobSelect == "Name of job",
                       "hover:bg-white hover:border hover:text-blue-500 cursor-pointer" : jobSelect != "Name of job",
                  })}>
                      Continue
                  </button>
                </div>

            </div>

            <div className='hidden lg:block lg:w-1/3  md:pr-0 lg:pr-8  xl:pr-16 '>
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

export default SelectJobCL