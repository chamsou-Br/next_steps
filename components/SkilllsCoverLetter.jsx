import React, { useState } from 'react'
import MyVerticallyCenteredModal from './Modal';
import classNames from 'classnames';
import SkillsSelected from './SkillsSelected';

const SkilllsCoverLetter = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [skills,setSkills] = useState([])
  const onSelect = (skill) => {
    if (skills.indexOf(skill) == -1) {
      setSkills([...skills , skill]);
    }else {
      setSkills(skills.filter(item => item != skill))
    }

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

            <button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
            </button>

            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false) }  body={<SkillsSelected onSelect={onSelect} data={props.data} skills={skills}  /> } skills={skills}   />

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
                <h1 onClick={()=>console.log(skills)}>dfffff</h1>
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