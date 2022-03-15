import React, { useState } from 'react'
import { FaTrash, FaPlus ,FaEdit} from 'react-icons/fa';
import HelpCL_Small from './CoverLetter/HelpCL_Small';
import ContinueCL from './CoverLetter/ContinueCL';
import HelpCL_Larg from './CoverLetter/HelpCL_Larg';
import DropDownsSocialMedia from './cv/DropDownSocialMedia';
import MyVerticallyCenteredModal from './Modal';
import AnotherWorkHistorySelected from './cv/AnotherWorkHistorySelected';

const Medias = [
    "Twitter" , "LinkedIn" , "Website" , "Github"
]

const SelectWorkHistory = (props) => {

  const [workHistory,setworkHistory] = useState([]);
  const [isEdit,setIsEdit] = useState(-1);
  const [title,setTitle] = useState('')
  const [desc , setDesc] = useState("")
    //show Modal
    const [modalShow, setModalShow] = useState(false);
  
  // close Modal
  const onHide = () => {
    setModalShow(false)
  }
  // consfirm selecte function
  const onHandler = () => {

    if (isEdit != -1) {
      const newWorks = workHistory.map((item,index)=>{
        if (index != isEdit){
          console.log("kkk")
          return item 
        } 
        else {
          console.log("chms")
          return {title , desc}
        } 
     })
      setworkHistory(newWorks)
    }else {
      setworkHistory([...workHistory , {title  , desc }])
    }
    console.log(workHistory)
    setTitle('');
    setDesc("");
    setIsEdit(-1)
    setModalShow(false)
  }

  // ONREMOVE SOCIAL MEDIA
  const onRemoveWotkHistory = (i) => {
    const newWorkHistory = workHistory.filter((item ,index)=>{
        if (i != index ) return item
    })
    setworkHistory(newWorkHistory)      
  }
   // ONEDIT SOCIAL MEDIA
   const onEDITWotkHistory = (item,index) => {
    setDesc(item.desc)
    setTitle(item.title)
    setIsEdit(index);
    setModalShow(true)
    
  }



  
  return (
    <div className=" min-h-screen">

        {/* Help Cover letter */}
        <HelpCL_Small title="Your work History " desc="This is a page to let you Add  your work History .It's best to select all your great experience and wotk history, you can select at most 6 workHistory . " />

     {/* Select Skiils */}

    <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
        <div className=' w-full lg:w-full xl:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
            <h1 onClick={()=>console.log(workHistory)} className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
                Your Work History
            </h1>
            {workHistory.length == 0 && (
                <div className=' h-60 w-11/12 md:w-3/5  m-auto text-center flex justify-center border-dashed border-4  bg-'>                  
                  <div className=' hover:text-blue-500 text-sl cursor-pointer tracking-wider font-bold flex justify-center m-auto' variant="primary" onClick={()=>setModalShow(true)}  >
                    <FaPlus className=' text-blue-500  text-center mr-3 mt-1 font-bold  ' /> 
                    Add Another position
                  </div>
                </div>
            )}

            {workHistory.length > 0 && (
              <>              
              <div className=' relative border-dashed border-4 w-11/12  md:w-4/5  m-auto pt-8 pb-5 mb-10'>    
                  {workHistory.map((item,index) => {
                      return(
                        <div key={index} className=' flex justify-center m-auto mb-1  px-2 py-2'>
                            <div className=' border-2 border-blue-500 px-4 py-2 lg:w-2/3 rounded-sm '>
                              <h1 className=' text-left font-bold tracking-wider '>{item.title}</h1>
                              <p className=' text-left  tracking-wide text-xs font-bold text-gray-500'>{item.desc}</p>
                            </div>
                            <div className=' flex justify-center ml-3'>
                              <FaEdit size={20} className=' text-gray-300 font-bold  text-center m-auto mr-2 hover:text-blue-500' 
                                      onClick={()=>onEDITWotkHistory(item,index)}/>
                              <FaTrash size={20} className=' text-gray-300 font-bold text-center m-auto hover:text-blue-500' 
                                      onClick={()=>onRemoveWotkHistory(index)}/>
                            </div>

                        </div>
              )})}
               <div className='  hover:text-blue-500 cursor-pointer flex justify-center text-sm font-bold tracking-wider' variant="primary" onClick={()=>setModalShow(true)}  >
                     {workHistory.length < 5 ? (
                      <>
                       <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
                        "Add your workHistory"
                        </>
                     ) : null } 

                </div>
              </div>

              </>
            )}

                 <MyVerticallyCenteredModal
                 show={modalShow} onHide={onHide } intro={<h1>Work History</h1>  }
                  disabled={false}  onHandler={onHandler}  
                  body={<AnotherWorkHistorySelected setTitle={setTitle} title={title} desc={desc} setDesc={setDesc} isEdit={isEdit} /> } />


            <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

            {/* Button back contine */}
            <ContinueCL next={"/cv/informations/skills"} last={"/coverLetter/informations/experience"} disabled={false} />


        </div>

          {/* Help Cover letter */}
         <HelpCL_Larg title="Your Social Medias" desc="This is a page to let you select  your workHistory or porfolio  .It's best to choose only one account for a social network, you can select at most 4 workHistory . " />

    </div>
</div>
  )
}
 

 
export default SelectWorkHistory;