import React, { useState } from 'react'
import { FaTrash, FaPlus ,FaEdit , FaShare} from 'react-icons/fa';
import HelpCL_Small from './CoverLetter/HelpCL_Small';
import ContinueCL from './CoverLetter/ContinueCL';
import HelpCL_Larg from './CoverLetter/HelpCL_Larg';
import MyVerticallyCenteredModal from './Modal';
import CertaficateFormModal from './cv/CertaficateFormModal';


const Medias = [
    "Twitter" , "LinkedIn" , "Website" , "Github"
]

const SelectCertaficates = (props) => {

  const [certaficatesDegree,setcertaficatesDegree] = useState([]);
  const [isEdit,setIsEdit] = useState(-1);
  const [title,setTitle] = useState('')
  const [desc , setDesc] = useState("")
  const [url , setURL] = useState("")
    //show Modal
    const [modalShow, setModalShow] = useState(false);
  
  // close Modal
  const onHide = () => {
    setModalShow(false)
  }
  // consfirm selecte function
  const onHandler = () => {

    if (isEdit != -1) {
      const newCertaficates = certaficatesDegree.map((item,index)=>{
        if (index != isEdit){
          return item 
        } 
        else {
          return {title , desc , url}
        } 
     })
      setcertaficatesDegree(newCertaficates)
    }else {
      setcertaficatesDegree([...certaficatesDegree , {title  , url ,desc }])
    }
    setTitle('');
    setDesc("");
    setIsEdit(-1)
    setURL("")
    setModalShow(false)
  }

  // ONREMOVE SOCIAL MEDIA
  const onRemoveWotkHistory = (i) => {
    const newWorkHistory = certaficatesDegree.filter((item ,index)=>{
        if (i != index ) return item
    })
    setcertaficatesDegree(newWorkHistory)      
  }
   // ONEDIT SOCIAL MEDIA
   const onEDITWotkHistory = (item,index) => {
    setDesc(item.desc)
    setTitle(item.title)
    setURL(item.url)
    setIsEdit(index);
    setModalShow(true)
    
  }



  
  return (
    <div className=" min-h-screen">

        {/* Help Cover letter */}
        <HelpCL_Small title="Your Certraficates " desc="This is a page to let you Add  your Certaficate in different courses .It's great to show your great experience and confirm it with certaficates degree , you can select at most 6 certaficates . " />

     {/* Select Skiils */}

    <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
        <div className=' w-full lg:w-full xl:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
            <h1 onClick={()=>console.log(certaficatesDegree)} className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
                Your Certaficates
            </h1>
            {certaficatesDegree.length == 0 && (
                <div className=' h-60 w-11/12 md:w-3/5  m-auto text-center flex justify-center border-dashed border-4  bg-'>                  
                  <div className=' hover:text-blue-500 text-sl cursor-pointer tracking-wider font-bold flex justify-center m-auto' variant="primary" onClick={()=>setModalShow(true)}  >
                    <FaPlus className=' text-blue-500  text-center mr-3 mt-1 font-bold  ' /> 
                    Add a Certaficate
                  </div>
                </div>
            )}

            {certaficatesDegree.length > 0 && (
              <>              
              <div className=' relative border-dashed border-4 w-11/12  md:w-4/5  m-auto pt-8 pb-5 mb-10'>    
                  {certaficatesDegree.map((item,index) => {
                      return(
                            <div className=' border-2 border-blue-500 px-4 m-auto py-2 w-10/12 sm:w-3/5 lg:w-2/3 rounded-sm '>
                              <div className='mb-2 flex justify-between'>
                                  <h1 className='  text-left font-bold tracking-wider '>{item.title}</h1>
                                  <div className=' flex justify-center ml-3'>
                                      <FaShare size={18} className=' text-gray-300 font-bold text-center m-auto mr-2 hover:text-blue-500' 
                                              onClick={()=>window.open(item.url)}/>
                                      <FaEdit size={18} className=' text-gray-300 font-bold  text-center m-auto mr-2 hover:text-blue-500' 
                                              onClick={()=>onEDITWotkHistory(item,index)}/>
                                      <FaTrash size={18} className=' text-gray-300 font-bold text-center m-auto hover:text-blue-500' 
                                              onClick={()=>onRemoveWotkHistory(index)}/>      
                                  </div>
                              </div>
                              <hr />
                              <p className=' mt-2 text-left  tracking-wide text-xs font-bold text-gray-500'>{item.desc}</p>
                        </div>
              )})}
               <div className='  hover:text-blue-500 mt-3 cursor-pointer flex justify-center text-sm font-bold tracking-wider' variant="primary" onClick={()=>setModalShow(true)}  >
                     {certaficatesDegree.length < 5 ? (
                      <>
                       <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
                        "Add your certaficatesDegree"
                        </>
                     ) : null } 

                </div>
              </div>

              </>
            )}

                 <MyVerticallyCenteredModal
                 show={modalShow} onHide={onHide } intro={<h1>Work History</h1>  }
                  disabled={false}  onHandler={onHandler}  
                  body={<CertaficateFormModal setTitle={setTitle} title={title} desc={desc} setDesc={setDesc} isEdit={isEdit} url={url} setURL={setURL} /> } />


            <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

            {/* Button back contine */}
            <ContinueCL next={"/cv/informations/summary"} last={"/coverLetter/informations/experience"} disabled={false} />


        </div>

          {/* Help Cover letter */}
         <HelpCL_Larg title="Your Certaficates" desc="This is a page to let you Add  your Certaficate in different courses .It's great to show your great experience and confirm it with certaficates degree , you can select at most 6 certaficates ." />

    </div>
</div>
  )
}
export default SelectCertaficates
 