import React, { useEffect, useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import MyVerticallyCenteredModal from '../../../components/Modal';
import { FaEdit, FaPlus } from 'react-icons/fa';
import HelpCL_Small from '../../../components/shared/HelpCL_Small';
import ContinueCL from '../../../components/CoverLetter/ContinueCL';
import HelpCL_Larg from '../../../components/shared/HelpCL_Larg';
import IntroModalCV from '../../../components/cv/IntroModalCV';
import DropDownsLevelSkill from '../../../components/cv/DropDownLevelSkill';
import SkillsCVSelected from '../../../components/cv/skillsCVSlected';
import skillsData from '../../../data/skills';
import { AddSkills } from '../../../Redux/FuncRedux/Func_NewCV';
import { useDispatch, useSelector } from 'react-redux';

const levels = [0,1,2,3,4,5]

function informations() {

      // redux
      const newCV = useSelector(state => state.newCV)
      const dispatch = useDispatch();

    //show Modal
    const [modalShow, setModalShow] = useState(false);
    // TYPE OF SKILLS TO SELECT
    const [typeSkills , setTypeSkills] = useState(skillsData[0].type)
    // SKILLS WHICH WE CAN SELECTE IT
    const [skillsToChoose,setSkillsToChoose] = useState(skillsData[0].list)
    // SKILLS SELECTED CONFIRME
    const [skills,setSkills] = useState([]);
    // SKILLS SELECTED SANS CONFIRM
    const [skillsSelected , setSkillsSelected] = useState([]);

    useEffect(()=>{
      setSkills(newCV.skills ? newCV.skills : [])
      setSkillsSelected(newCV.skills ? newCV.skills : [])
    },[])

  
    // select skills function
    const onSelect = (skills,skill) => {
      if (skills.indexOf(skill) == -1) {
          skillsSelected.length < 5 ? 
            setSkillsSelected([...skillsSelected , {skill , level : 0}]) : null
      }else {
        setSkillsSelected(skillsSelected.filter(item => item.skill != skill))
      }
    }
  
    // consfirm selecte function
    const onHandler = () => {
      setSkills(skillsSelected);
      setModalShow(false)
    }
  
    // ONSET SKILLS TO CHOOOSE
    const onHandlerSetSkillsToChoose = (type) => {
      setTypeSkills(type)
      const newSkillsList = skillsData.filter(item =>  item.type == type)
      setSkillsToChoose(newSkillsList[0].list)
    }
  
    // onChangeLevel of skill
    const onChangeLevel = (skill ,level) => {
      const newSkills = skills.map(item=> {
        if (item.skill != skill) return item
        else {
          return {skill  :skill , level : level}
        }
      } )
      setSkills(newSkills)
      setSkillsSelected(newSkills)
    }
  
    // onHide Modal 
    const onHide = () => {
      setModalShow(false);
      setSkillsSelected(skills)
    }

  return (
    <div className=' min-h-screen '>
        <PhaseStep data={2} />
        
        {/* Help Cover letter */}
        <HelpCL_Small title="Your skills" desc="This is a page to let you select  your skills to make your cv more stronger  .You can't continue if you don't choose at least one skills ,you can select at most 5 skills . and you should slect your level a each skill . " />

     {/* Select Skiils */}

    <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
        <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
            <h1 onClick={()=> console.log(skills,skillsSelected)} className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
                Your Skills in this Job 
            </h1>
            {skills.length == 0 && (
                <div className=' h-60 w-11/12 md:w-3/5 lg:w-4/5 m-auto text-center flex justify-center border-dashed border-4  '>
                  
                  <div className=' hover:text-blue-500 font-bold text-sm tracking-wider cursor-pointer flex justify-center m-auto' variant="primary" onClick={() => setModalShow(true)}>
                  <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
                  Add your skills
                  </div>
                </div>
            )}

            {skills.length > 0 && (
              <>              
              <div className=' relative border-dashed border-4 w-11/12 md:w-3/5   m-auto pt-8 pb-5 mb-10'>    
                  {skills.map((item,index) => {
                     
                      return(
                        <div key={index} className=' rounded-md flex justify-between w-80 m-auto mb-3 bg-white border border-gray-500 px-2 py-2'>
                            <p className=' mt-1.5 text-blue-500 tracking-wider font-bold text-xs'>
                                {item.skill}
                            </p>
                            <DropDownsLevelSkill data={levels} onHandlerClick={onChangeLevel} title={item} disabled={false} />
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
                 show={modalShow} onHide={onHide } intro={<IntroModalCV title={typeSkills} onHandler={onHandlerSetSkillsToChoose} max={skillsSelected.length == 5} />  }
                  disabled={skillsSelected.length == 0 && skills.length == 0}  onHandler={onHandler}  
                  body={<SkillsCVSelected max={15} onSelect={onSelect} data={skillsToChoose} skillsSelected={skillsSelected}  /> } />

            <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

            {/* Button back contine */}
            <ContinueCL onHandler={()=>{dispatch(AddSkills(skills))}} next={"/cv/informations/workHistory"} last={"/coverLetter/informations/skillsSoftwarJob"} disabled={skills.length == 0} />

        </div>

          {/* Help Cover letter */}
            <HelpCL_Larg title="Your skills" desc="This is a page to let you select  your skills to make your cv more stronger  .You can't continue if you don't choose at least one skills ,you can select at most 15 skills . and you should slect your level a each skill . " />
        

    </div>
        

    </div>
  )
}


export default informations 