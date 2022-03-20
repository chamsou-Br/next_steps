import React, { useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import { FaTrash, FaPlus } from 'react-icons/fa';
import HelpCL_Small from '../../../components/shared/HelpCL_Small';
import ContinueCL from '../../../components/CoverLetter/ContinueCL';
import HelpCL_Larg from '../../../components/shared/HelpCL_Larg';
import DropDownsSocialMedia from '../../../components/cv/DropDownSocialMedia';
import { useDispatch, useSelector } from 'react-redux';
import { ADDSocialMedia } from '../../../Redux/FuncRedux/Func_NewCV';

const Medias = [
  "Twitter" , "LinkedIn" , "Website" , "Github"
]

function informations() {
   
     // redux
     const newCV = useSelector(state => state.newCV)
     const dispatch = useDispatch();

    const [socialMedias,setsocialMedias] = useState(newCV.socialMedia ? newCV.socialMedia : []);

    // ADD SOCIAL MEDIA FUNCTION
    const onAddSocialMedia = () => {
        setsocialMedias([...socialMedias , {type : "Twitter" , url : ""}])
    }
    // ONREMOVE SOCIAL MEDIA
    const onRemoveSocialMedia = (i) => {
      const newSocialMedia = socialMedias.filter((item ,index)=>{
          if (i != index ) return item
      })
      setsocialMedias(newSocialMedia)      
    }
    //onSelectTypeSocialMedia
    const onSelectTypeSocialMedia = (type,index)=> {
          const newSocialMedia = socialMedias.map((item,i) => {
              if (i != index) return item
              else return {type : type , url : item.url }
          })
          setsocialMedias(newSocialMedia)
    }
      //onSelectURLSocialMedia
      const onSelectURLSocialMedia = (url,index)=> {
          const newSocialMedia = socialMedias.map((item,i) => {
              if (i != index) return item
              else return {type : item.type , url : url }
          })
          setsocialMedias(newSocialMedia)
    }

  return (
    <div className=' '>
        <PhaseStep data={2} />
              {/* Help Cover letter */}
              <HelpCL_Small title="Your socialMedias " desc="This is a page to let you select  your socialMedias or porfolio  .It's best to choose only one account for a social network, you can select at most 4 socialMedias . " />

      {/* Select Skiils */}

      <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
        <div className=' w-full lg:w-full xl:w-2/3 md:mt-0 lg:mt-10 text-center h-full pb-40   '>
            <h1 onClick={()=>console.log(socialMedias)} className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
                Your Social Medias 
            </h1>
            {socialMedias.length == 0 && (
                <div className=' h-60 w-11/12 md:w-3/5  m-auto text-center flex justify-center border-dashed border-4  bg-'>                  
                  <div className=' hover:text-blue-500 text-sl cursor-pointer tracking-wider font-bold flex justify-center m-auto' variant="primary" onClick={()=>onAddSocialMedia()} >
                    <FaPlus className=' text-blue-500  text-center mr-3 mt-1 font-bold  ' /> 
                    Add your social Medias
                  </div>
                </div>
            )}

            {socialMedias.length > 0 && (
              <>              
              <div className=' relative border-dashed border-4 w-11/12  md:w-4/5  m-auto pt-8 pb-5 mb-10'>    
                  {socialMedias.map((item,index) => {
                      return(
                        <div key={index} className=' flex justify-center m-auto mb-1  px-2 py-2'>
                            <DropDownsSocialMedia data={Medias} onHandlerClick={(type )=> onSelectTypeSocialMedia(type,index) } title={item.type} disabled={false} />
                            <input  className="ml-3 outline-none w-80 border border-gray-300 rounded-sm px-3 py-1.5 sm:py-2 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                                    value={item.url} onChange={(e) => onSelectURLSocialMedia(e.target.value,index)}/>
                            <FaTrash className=' text-gray-300 font-bold text-center ml-3 mt-4 hover:text-blue-500' 
                                      onClick={()=>onRemoveSocialMedia(index)}/>
                        </div>
              )})}
                <div className='  hover:text-blue-500 cursor-pointer flex justify-center text-sm font-bold tracking-wider' variant="primary" onClick={()=> onAddSocialMedia()} >
                      {socialMedias.length < 4 ? (
                          <>
                        <FaPlus className=' text-blue-500 font-bold text-center mr-3 mt-1' /> 
                        "Add your socialMedias"
                        </>
                      ) : null } 

                </div>
              </div>

              </>
            )}

       <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

       {/* Button back contine */}
       <ContinueCL onHandler={()=>{dispatch(ADDSocialMedia(socialMedias))}} next={"/cv/informations/skills"} last={"/coverLetter/informations/experience"} disabled={socialMedias.length == 0} />


   </div>

     {/* Help Cover letter */}
    <HelpCL_Larg title="Your Social Medias" desc="This is a page to let you select  your socialMedias or porfolio  .It's best to choose only one account for a social network, you can select at most 4 socialMedias . " />

</div>
        

    </div>
  )
}


export default informations 