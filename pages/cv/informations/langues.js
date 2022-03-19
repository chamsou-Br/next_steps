import React, { useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import MyVerticallyCenteredModal from '../../../components/Modal';
import { FaEdit, FaPlus } from 'react-icons/fa';
import HelpCL_Small from '../../../components/CoverLetter/HelpCL_Small';
import ContinueCL from '../../../components/CoverLetter/ContinueCL';
import HelpCL_Larg from '../../../components/CoverLetter/HelpCL_Larg';
import DropDownsLevelSkill from '../../../components/cv/DropDownLevelSkill';
import langaguesdata from '../../../data/languages';
import LanguagesCVselected from '../../../components/cv/languagesCVselected';

const levels = [0,1,2,3,4,5]

function langue() {

    //show Modal
    const [modalShow, setModalShow] = useState(false);

    // langauges SELECTED CONFIRME
    const [langauges,setLanguages] = useState([]);
    // SKILLS SELECTED SANS CONFIRM
    const [langaugesSelected , setlangaugesSelected] = useState([]);
  
    // select skills function
    const onSelect = (languages,language) => {
      if (languages.indexOf(language) == -1) {
          langaugesSelected.length < 4 ? 
            setlangaugesSelected([...langaugesSelected , {language , level : 0}]) : null
      }else {
        setlangaugesSelected(langaugesSelected.filter(item => item.language != language))
      }
    }
  
    // consfirm selecte function
    const onHandler = () => {
      setLanguages(langaugesSelected);
      setModalShow(false)
    }
  
  
  
    // onChangeLevel of skill
    const onChangeLevel = (language ,level) => {
      const newlanguages = langauges.map(item=> {
        if (item.language != language) return item
        else {
          return {language  :language , level : level}
        }
      } )
      setLanguages(newlanguages)
      setlangaugesSelected(newlanguages)
    }
  
    // onHide Modal 
    const onHide = () => {
      setModalShow(false);
      setlangaugesSelected(langauges)
    }
    

  return (
    <div className=' min-h-screen'>
        <PhaseStep data={2} />
            {/* Help Cover letter */}
            <HelpCL_Small title="languages" desc="This is a page to let you select   The languages you speak  .You can't continue if you don't choose at least one language ,you can select at most 4 skills . and you should slect your level a each language . " />

{/* Select Skiils */}

<div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
   <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
       <h1  onClick={()=>console.log(langauges)} className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
           The languages you speak
       </h1>
       {langauges.length == 0 && (
           <div className=' h-60 w-11/12 md:w-3/5 lg:w-4/5 m-auto text-center flex justify-center border-dashed border-4  '>
             
             <div className=' hover:text-blue-500 font-bold text-sm tracking-wider cursor-pointer flex justify-center m-auto' variant="primary" onClick={() => setModalShow(true)}>
             <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
             Add a language
             </div>
           </div>
       )}

       {langauges.length > 0 && (
         <>              
         <div className=' relative border-dashed border-4 w-11/12 md:w-3/5   m-auto pt-8 pb-5 mb-10'>    
             {langauges.map((item,index) => {
                
                 return(
                   <div key={index} className=' rounded-md flex justify-between w-80 m-auto mb-3 bg-white border border-gray-500 px-2 py-2'>
                       <p className=' mt-1.5 text-blue-500 tracking-wider font-bold text-xs'>
                           {item.language}
                       </p>
                       <DropDownsLevelSkill data={levels} onHandlerClick={onChangeLevel} title={item} disabled={false} />
                   </div>
         )})}
          <div className='  hover:text-blue-500 cursor-pointer flex justify-center text-sm font-bold tracking-wider' variant="primary" onClick={() => setModalShow(true)}>
                {langauges.length < 4 ? (
                   <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
                ) : (<FaEdit className=' text-blue-500 font-bold text-center mr-3 mt-1' /> )} 
              
                {langauges.length < 4 ? "Add a language" : "Modify your list"} 
           </div>
         </div>

         </>
       )}

       <MyVerticallyCenteredModal
            show={modalShow} onHide={onHide } intro={<h1>SelectLangauges</h1>  }
             disabled={langaugesSelected.length == 0 && langauges.length == 0}  onHandler={onHandler}  
             body={<LanguagesCVselected  max={4} onSelect={onSelect} data={langaguesdata} skillsSelected={langaugesSelected}  /> } />

       <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

       {/* Button back contine */}
       <ContinueCL next={"/cv/informations/workHistory"} last={"/coverLetter/informations/skillsSoftwarJob"} disabled={langauges.length == 0} />

   </div>

     {/* Help Cover letter */}
       <HelpCL_Larg title="Languages" desc="This is a page to let you select   The languages you speak  .You can't continue if you don't choose at least one language ,you can select at most 4 skills . and you should slect your level a each language . " />
   

</div>
    </div>
  )
}




export default langue