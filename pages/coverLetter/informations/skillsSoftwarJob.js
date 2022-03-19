import React, { useState } from 'react'
import PhaseCoverLetter from '../../../components/CoverLetter/PhaseCoverLetter'
import MyVerticallyCenteredModal from '../../../components/Modal'
import SkillsSelected from '../../../components/CoverLetter/SkillsSelected';
import { FaEdit, FaPlus } from 'react-icons/fa';
import HelpCL_Small from '../../../components/CoverLetter/HelpCL_Small';
import ContinueCL from '../../../components/CoverLetter/ContinueCL';
import HelpCL_Larg from '../../../components/CoverLetter/HelpCL_Larg';
import softwarskills from '../../../data/softwarSkills';
import IntroModalCL from '../../../components/CoverLetter/IntroModalCL';
import { useDispatch, useSelector } from 'react-redux';
import { AddSoftwarSkills } from '../../../Redux/FuncRedux/Func_NewCL';


function skillsSoftwarJob() {
  
  
  // REDUX
  const newCL = useSelector(state=> state.newCL)
  const dispatch = useDispatch()

// STATE
const [modalShow, setModalShow] = useState(false);
const [skillsSoftwar,setskillsSoftwar] = useState(newCL.softwarSkills ? newCL.softwarSkills  : []);
const [skillsSelected , setSkillsSelected] = useState(newCL.softwarSkills ? newCL.softwarSkills  : []);

// select skillsSoftwar function
const onSelect = (skill) => {
  if (skillsSelected.indexOf(skill) == -1) {
      skillsSelected.length < 3 ? 
        setSkillsSelected([...skillsSelected , skill]) : null
  }else {
    setSkillsSelected(skillsSelected.filter(item => item != skill))
  }
}

// confirm selecte function
const onHandlerConfirmSkillsSelected = () => {
  setskillsSoftwar(skillsSelected);
  setModalShow(false)
  dispatch(AddSoftwarSkills(skillsSelected))
}

// onHide Modal 
const onHide = () => {
  setModalShow(false);
  setSkillsSelected(skillsSoftwar)
}

  return (
    <div className=' min-h-screen '>
        <PhaseCoverLetter data={2} />
        
        {/* Help Cover letter */}
        <HelpCL_Small title="skillsSoftwar in this Job" desc="This is a page to let you select  your skillsSoftwar in this job to make your cover letter more stronger  .You can't continue if you don't choose at least one skillsSoftwar ,you can select at most 5 skillsSoftwar . " />

     {/* Select Skiils */}

    <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
        <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
            <h1 className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
                Your skills Softwar in this Job 
            </h1>
            {skillsSoftwar.length == 0 && (
                <div className=' h-60 w-11/12 md:w-3/5  m-auto text-center flex justify-center border-dashed border-4  bg-'>
                  
                  <div className=' hover:text-blue-500 text-sl cursor-pointer tracking-wider font-bold flex justify-center m-auto' variant="primary" onClick={() => setModalShow(true)}>
                  <FaPlus className=' text-blue-500  text-center mr-3 mt-1 font-bold  ' /> 
                  Add your skillsSoftwar
                  </div>
                </div>
            )}

            {skillsSoftwar.length > 0 && (
              <>              
              <div className=' relative border-dashed border-4 w-11/12  md:w-3/5   m-auto pt-8 pb-5 mb-10'>    
                  {skillsSoftwar.map((item,index) => {
                      return(
                        <div key={index} className=' w-80 m-auto mb-3 bg-white border border-gray-500 px-2 py-2'>
                            <p className=' text-blue-500 tracking-wider font-bold text-sm'>
                                {item}
                            </p>
                        </div>
              )})}
               <div className='  hover:text-blue-500 cursor-pointer flex justify-center text-sm font-bold tracking-wider' variant="primary" onClick={() => setModalShow(true)}>
                     {skillsSoftwar.length < 3 ? (
                        <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
                     ) : (<FaEdit className=' text-blue-500 font-bold text-center mr-3 mt-1' /> )} 
                   
                     {skillsSoftwar.length < 3 ? "Add your skillsSoftwar" : "Modify your skillsSoftwar"} 
                </div>
              </div>

              </>
            )}

            <MyVerticallyCenteredModal
                 show={modalShow} onHide={onHide } intro={<IntroModalCL max={skillsSelected.length == 3} />  }
                  disabled={skillsSelected.length == 0 && skillsSoftwar.length == 0}   onHandler={onHandlerConfirmSkillsSelected}  
                  body={<SkillsSelected max={3} onSelect={onSelect} data={softwarskills} skillsSelected={skillsSelected}  /> } />

            <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

            {/* Button back contine */}
            <ContinueCL next={"/coverLetter/informations/skillsJob"} last={"/coverLetter/informations/experience"} disabled={skillsSoftwar.length == 0} />


        </div>

          {/* Help Cover letter */}
         <HelpCL_Larg title="skillsSoftwar in this Job" desc="This is a page to let you select  your skillsSoftwar in this job to make your cover letter more stronger  .You can't continue if you don't choose at least one skillsSoftwar ,you can select at most 5 skillsSoftwar . " />

    </div>      
    </div>
  )
}


export default skillsSoftwarJob