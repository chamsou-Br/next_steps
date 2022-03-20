import React, { useEffect, useState } from 'react'
import HelpCL_Small from '../../../components/shared/HelpCL_Small';
import HelpCL_Larg from '../../../components/shared/HelpCL_Larg';
import ContinueCL from '../../../components/CoverLetter/ContinueCL';
import YearExperience from '../../../components/CoverLetter/YearExperience';
import LevelExperience from '../../../components/CoverLetter/LevelExperience';
import { useDispatch, useSelector } from 'react-redux';
import { AddLevelNiveau } from '../../../Redux/FuncRedux/Func_NewCL';
import PhaseStep from '../../../components/shared/PhaseStep'




function experience() {
  
    // REDUX
    const newCL = useSelector(state => state.newCL);
    const dispatch = useDispatch()

  // FUNCTIONS
  const onHandlerSetLevel = (level )=> {
    setLevel(level);
    dispatch(AddLevelNiveau(level,0));
  }

  const onHandlerSetYearExperience = (yearExperience) => {
    setYearExperience(yearExperience)
    dispatch(AddLevelNiveau(level,yearExperience))
  }

    // STATE
    const [level , setLevel] = useState(null);
    const [yearExperience , setYearExperience] = useState(0);

    useEffect(()=>{
      setLevel(newCL.level ? newCL.level: null )
      setYearExperience(newCL.yearExperience ? newCL.yearExperience : 0 )
    },[])
  return (
    <div className=' '>
        <PhaseStep data={2} />
            {/* Help Cover letter */}
      <HelpCL_Small title="Experience With this Job" desc="This is a page to let you give us your experience in this job and give us title of your last job if exist  .You can't continue if you don't choose your level of expertise . " />
           
           <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
               <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
                   <h1 className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
                       Your Level in this Job 
                   </h1>
   
                   {/* Level Experience */}
                   <LevelExperience level={level} setLevel={onHandlerSetLevel} />
                       
                   {/* Year Experience */}
                   <YearExperience disabled={ level == null} active={yearExperience} setYearExperience={onHandlerSetYearExperience} />
                   
   
                   <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />
   
                   {/* Button back contine */}
                   <ContinueCL next={"/coverLetter/informations/skillsSoftwarJob"} last={"/coverLetter/informations/lastJob"} disabled={yearExperience == 0 || level == null} />
   
                </div>
   
                {/* Help Cover letter */}
                <HelpCL_Larg title="Experience With this Job" desc="This is a page to let you give us your experience in this job and give us title of your last job if exist  .You can't continue if you don't choose your level of expertise . " />
              
           </div>   
    </div>
  )
}


export default experience 