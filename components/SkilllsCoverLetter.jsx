import React, { useState } from 'react'
import MyVerticallyCenteredModal from './Modal';
import classNames from 'classnames';
import SkillsSelected from './CoverLetter/SkillsSelected';
import { FaEdit, FaPlus } from 'react-icons/fa';
import HelpCL_Small from './CoverLetter/HelpCL_Small';
import ContinueCL from './CoverLetter/ContinueCL';
import HelpCL_Larg from './CoverLetter/HelpCL_Larg';
import IntroModalCL from './CoverLetter/IntroModalCL';
import { useDispatch, useSelector } from 'react-redux';
import { AddSkills } from '../Redux/FuncRedux/Func_NewCL';

const SkilllsCoverLetter = (props) => {

  // REDUX
    const newCL = useSelector(state=> state.newCL)
    const dispatch = useDispatch()

  // STATE
  const [modalShow, setModalShow] = useState(false);
  const [skills,setSkills] = useState(newCL.skills ? newCL.skills : []);
  const [skillsSelected , setSkillsSelected] = useState(newCL.skills ? newCL.skills : []);

  // select skills function
  const onSelect = (skill) => {
    if (skillsSelected.indexOf(skill) == -1) {
        skillsSelected.length < 5 ? 
          setSkillsSelected([...skillsSelected , skill]) : null
    }else {
      setSkillsSelected(skillsSelected.filter(item => item != skill))
    }
  }

  // consfirm selecte function
  const onHandlerConfirmSkillsSelected = () => {
    dispatch(AddSkills(skillsSelected))
    setSkills(skillsSelected);
    setModalShow(false)
  }

  // onHide Modal 
  const onHide = () => {
    setModalShow(false);
    setSkillsSelected(skills)
  }
  
  return (
    <div className=" h-screen">

        {/* Help Cover letter */}
        <HelpCL_Small title="Skills in this Job" desc="This is a page to let you select  your skills in this job to make your cover letter more stronger  .You can't continue if you don't choose at least one skills ,you can select at most 5 skills . " />

     {/* Select Skiils */}

    <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
        <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
            <h1 className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
                Your Skills in this Job 
            </h1>
            {skills.length == 0 && (
                <div className=' h-60 w-3/5 m-auto text-center flex justify-center border-dashed border-4  '>
                  
                  <div className=' hover:text-blue-500 font-bold text-sm tracking-wider cursor-pointer flex justify-center m-auto' variant="primary" onClick={() => setModalShow(true)}>
                  <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
                  Add your skills
                  </div>
                </div>
            )}

            {skills.length > 0 && (
              <>              
              <div className=' relative border-dashed border-4 w-3/5  m-auto pt-8 pb-5 mb-10'>    
                  {skills.map((item,index) => {
                      return(
                        <div key={index} className=' w-80 m-auto mb-3 bg-white border border-gray-500 px-2 py-2'>
                            <p className=' text-blue-500 tracking-wider font-bold text-sm'>
                                {item}
                            </p>
                        </div>
              )})}
               <div className='  hover:text-blue-500 cursor-pointer flex justify-center text-sm font-bold tracking-wider' variant="primary" onClick={() => setModalShow(true)}>
                     {skills.length < 5 ? (
                        <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
                     ) : (<FaEdit className=' text-blue-500 font-bold text-center mr-3 mt-1' /> )} 
                   
                     {skills.length < 5 ? "Add your skills" : "Modify your skills"} 
                </div>
              </div>

              </>
            )}

            <MyVerticallyCenteredModal
                 show={modalShow} onHide={onHide }
                 intro={<IntroModalCL max={skillsSelected.length == 5} />  }
                  disabled={skillsSelected.length == 0 && skills.length == 0}  onHandler={onHandlerConfirmSkillsSelected}  
                  body={<SkillsSelected max={5} onSelect={onSelect} data={props.data} skillsSelected={skillsSelected}  /> } />

            <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

            {/* Button back contine */}
            <ContinueCL next={"/coverLetter/informations/selectJob"} last={"/coverLetter/informations/skillsSoftwarJob"} disabled={skills.length == 0} />


        </div>

          {/* Help Cover letter */}
         <HelpCL_Larg title="Skills in this Job" desc="This is a page to let you select  your skills in this job to make your cover letter more stronger  .You can't continue if you don't choose at least one skills ,you can select at most 5 skills . " />

    </div>
</div>
  )
}

export default SkilllsCoverLetter

