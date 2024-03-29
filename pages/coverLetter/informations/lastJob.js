import PhaseStep from '../../../components/shared/PhaseStep'
import React, { useEffect, useState } from 'react'
import DropDowns from '../../../components/CoverLetter/DropDowns'
import jobs from "../../../data/jobs"
import HelpCL_Small from '../../../components/shared/HelpCL_Small';
import HelpCL_Larg from '../../../components/shared/HelpCL_Larg';
import ContinueCL from '../../../components/CoverLetter/ContinueCL';
import StoriesLastWork from '../../../components/CoverLetter/StoriesLastWork';
import { useDispatch, useSelector } from 'react-redux';
import { AddExperience, AddLastJob } from '../../../Redux/FuncRedux/Func_NewCL';

function lastJob() {
  
      // REDUX
      const newCL = useSelector(state=> state.newCL)
      const dispatch = useDispatch()
      
  
      // JOBS to CHOOSE
      useEffect(()=>{
  
      },[newCL])
  
      // ONHANDLER FUNCTION 
      const onHandlerSelectLastJob = (lastJob) =>  {
        setLastJob(lastJob);
        dispatch(AddLastJob(lastJob))
      } 
      const onHandlerGetExperience = (experience) => {
        setstorieLastWork(experience);
        dispatch(AddExperience(experience))
      }
  
      // STATE
      
      const [storieLastWork , setstorieLastWork] = useState("");
      const [lastJob , setLastJob ] = useState("Last Job");
      const [jobsToChoose,setJobsToChoose] = useState([]) 
  
      useEffect(()=>{
        setstorieLastWork(newCL.experience ? newCL.experience :"")
        setLastJob(newCL.lastJob ? newCL.lastJob :"Last Job")
        console.log(newCL)
        setJobsToChoose(!newCL.typeJob ? [] : jobs.filter(item => item.type == newCL.typeJob)[0].list)
      },[])
  return (
    <div className=' '>
      <PhaseStep data={2} />
      
      {/* Help Cover letter */}
      <HelpCL_Small title="Last Work" desc="This is a page to let you give us the name of your last work and create some description about it ,if you are a student u can wrtie about your study . " />
           
           <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
               <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
                   <h1  className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-6'>
                       Your Last Work
                   </h1>
   
                   {/* Last Work */}
                   <div className='mt-6'>
                     <DropDowns data={jobsToChoose} title={lastJob} onHandlerClick={onHandlerSelectLastJob} disabled={false} />
                   </div> 
                   
                   <StoriesLastWork value={storieLastWork} onHandlerClick={onHandlerGetExperience} />
   
   
   
                   <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />
   
                   {/* Button back contine */}
                   <ContinueCL next={"/coverLetter/informations/experience"} last={"/coverLetter/informations/selectJob"} disabled={lastJob == "Last Job"} />
   
                </div>
   
                {/* Help Cover letter */}
                <HelpCL_Larg title="Last Work" desc="This is a page to let you give us the name of your last work and create some description about it ,if you are a student u can wrtie about your study . " />
              
           </div>    
    </div>
  )
}


export default lastJob 