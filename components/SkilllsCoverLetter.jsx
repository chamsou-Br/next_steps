import React, { useState } from 'react'
import MyVerticallyCenteredModal from './CoverLetter/Modal';
import classNames from 'classnames';
import SkillsSelected from './CoverLetter/SkillsSelected';
import { FaEdit, FaPlus } from 'react-icons/fa';
import HelpCL_Small from './CoverLetter/HelpCL_Small';

const SkilllsCoverLetter = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [skills,setSkills] = useState([]);
  const [skillsSelected , setSkillsSelected] = useState([]);

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
  const onHandler = () => {
    setSkills(skillsSelected);
    setModalShow(false)
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
                <div className=' h-60 w-3/5 m-auto text-center flex justify-center border-dashed border-4  bg-'>
                  
                  <div className=' hover:text-blue-500 cursor-pointer flex justify-center m-auto' variant="primary" onClick={() => setModalShow(true)}>
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
                 show={modalShow} onHide={() => {setModalShow(false);setSkillsSelected(skills)} }
                  body={<SkillsSelected onSelect={onSelect} data={props.data} skillsSelected={skillsSelected}  /> }
                   skillsSelected={skillsSelected} skills={skills} onHandler={onHandler}   />

            <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

            {/* Button back contine */}
            <div  className=' flex justify-between mx-8 md:mx-16  lg:mx-20  xl:mx-28  mt-4'>
                 <button   className=' bg-white border  text-blue-500 hover:bg-slate-50 text-sm font-bold tracking-wider text-center px-6 lg:px-8 py-3 rounded-md '>
                  Back
                 </button>
                <button disabled={skills.length == 0} className={classNames('  bg-blue-500 text-white text-sm font-bold tracking-wider text-center px-8 lg:px-12 py-3 rounded-md ',{
                   " cursor-not-allowed" : skills.length == 0,
                   "hover:bg-white hover:border hover:text-blue-500 cursor-pointer" : skills.length > 0 ,
                    })}>
                  Continue
                </button>
            </div>

        </div>

          {/* Help Cover letter */}
         <HelpCL_Larg title="Skills in this Job" desc="This is a page to let you select  your skills in this job to make your cover letter more stronger  .You can't continue if you don't choose at least one skills ,you can select at most 5 skills . " />

    </div>
</div>
  )
}

export default SkilllsCoverLetter