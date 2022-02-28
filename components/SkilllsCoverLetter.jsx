import React, { useState } from 'react'
import MyVerticallyCenteredModal from './Modal';
import classNames from 'classnames';
import SkillsSelected from './SkillsSelected';
import { FaPlus } from 'react-icons/fa';

const SkilllsCoverLetter = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [skills,setSkills] = useState([]);
  const [skillsSelected , setSkillsSelected] = useState([]);

  // select skills function
  const onSelect = (skill) => {
    if (skillsSelected.indexOf(skill) == -1) {
      setSkillsSelected([...skillsSelected , skill]);
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
    {/* help  */}
      <div className=' lg:hidden w-5/6 sm:w-3/4 m-auto '>
            <div className=' w-full flex justify-center'>
                 <img src='/idea.jpg' className=' w-32' />
            </div>
            <div>
                <h3 className=' text-blue-500 font-bold text-center tracking-wider text-xl'>Experience with this Job </h3>
                <p className=' tracking-wider font-semibold text-center text-xs text-gray-500 mt-2 '>
                This is a page to let you give us your experience in this job and give us title of your last job if exist  .You can't continue if you don't choose your level of expertise .  </p>
            </div>

        </div>


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
                    <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
                     Add your skills
                </div>
              </div>

              </>
            )}

            <MyVerticallyCenteredModal show={modalShow} onHide={() => {setModalShow(false);setSkillsSelected(skills)} }  body={<SkillsSelected onSelect={onSelect} data={props.data} skillsSelected={skillsSelected}  /> } skills={skills} onHandler={onHandler}   />

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

        {/* help  */}
        <div className='hidden lg:block lg:w-1/3 mt-20 border-l pl-2 h-full pb-10 '>
            <div className=' w-full flex justify-center'>
                 <img src='/idea.jpg' className=' w-32' />
            </div>
            <div className=' text-center'>
                <h3 className=' text-blue-500 font-bold tracking-wider text-xl'>Experience With this Job</h3>
                <p className=' tracking-wider font-semibold text-xs text-gray-500 mt-2'>
                   This is a page to let you give us your experience in this job and give us title of your last job if exist  .You can't continue if you don't choose your level of expertise . </p>
            </div>

        </div>
    </div>
</div>
  )
}

export default SkilllsCoverLetter