import classNames from 'classnames'
import React, { useState } from 'react'
import DropDowns from './CoverLetter/DropDowns'
import jobs from "../data/jobs"
import HelpCL_Larg from './CoverLetter/HelpCL_Larg'
import HelpCL_Small from './CoverLetter/HelpCL_Small'
import ContinueCL from './CoverLetter/ContinueCL'
import { useDispatch, useSelector } from 'react-redux'
import { AddJob } from '../Redux/FuncRedux/Func_NewCL'

function SelectJobCL() {


    // REDUX
    const newCL = useSelector(state => state.newCL);
    const dispatch = useDispatch()

    // STATE
    const [typeSelect , setTypeSelect]  = useState(newCL.typeJob ? newCL.typeJob : "Type of job")
    const [jobSelect , setJobSelect]  = useState(newCL.job ? newCL.job :"Name of job")
    const [JobsOfType , setJobsOfType] = useState(typeSelect == "Type of job" ? [] : jobs.filter((item) => item.type == typeSelect)[0].list );
    
    // SELECT A TYPE OF JOB
    const onHandlerSelectTypeOfJob = (type) => {
       dispatch(AddJob(type,"Name of job"))
       setTypeSelect(type);
       const data =  jobs.filter((item) => item.type == type);
       setJobsOfType(data[0].list)
    }

    // SELECT A JOB
    const onHandlerSelectJob = (job) => {
      setJobSelect(job);
      dispatch(AddJob(typeSelect,job));
    }
  return (
    <div>
          {/* Help Cover letter /> */}
          <HelpCL_Small title="Select a Job" desc="This is a page to select the job you want apply for  ,You should choose type of the job you are want .After that we will show all the jobs of categorie that you choose ,select your job name and let's go further .You can't continue if you don't select one . " />

        <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
            <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center overflow-visible pb-40  '>
                <h1 className=' text-blue-500 font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider mb-5'>
                    The Job You are looking for !
                </h1>
                <div className='mt-6'>
                  <DropDowns data={jobs} title={typeSelect} onHandlerClick={onHandlerSelectTypeOfJob} disabled={false} />
                </div>
                <div className=' mt-6'>
                  <DropDowns data={JobsOfType} title={jobSelect} onHandlerClick={onHandlerSelectJob} disabled={typeSelect == "Type of job"} />
                </div>      

                <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

                {/* Button back contine */}
                <ContinueCL next={"/coverLetter/informations/lastJob"} last={"/coverLetter/templates"} disabled={jobSelect == "Name of job"} />


            </div>

            {/* Help Cover letter */}
            <HelpCL_Larg title="Select a Job" desc="This is a page to select the job you want apply for  ,You should choose type of the job you are want .After that we will show all the jobs of categorie that you choose ,select your job name and let's go further .You can't continue if you don't select one . " />


        </div>
    </div>
  )
}

export default SelectJobCL