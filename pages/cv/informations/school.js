import React, { useEffect, useState } from 'react'
import PhaseStep from '../../../components/shared/PhaseStep'
import HelpCL_Small from '../../../components/shared/HelpCL_Small';
import ContinueCL from '../../../components/CoverLetter/ContinueCL';
import HelpCL_Larg from '../../../components/shared/HelpCL_Larg';
import SchoolForm from '../../../components/cv/SelectSchoolForm';

function informations() {

  const [persInfo , setPersInfo] = useState({
    schoolName : '',
    schoolLocation  :'',
    degree : "",
    fieldofstudy : "" ,
    graduationStartDate : '',
    graduationEndDate : '',
  })
  const [disabledContinue,setDisabled] = useState(true)

  useEffect(() => {
    const {schoolName , schoolLocation , degree , fieldofstudy , graduationStartDate , graduationEndDate} = persInfo
    if (schoolName && schoolLocation && degree && fieldofstudy && graduationStartDate && graduationEndDate ) setDisabled(false)
    else setDisabled(true)
  
  }, [persInfo])

  return (
    <div className=' min-h-screen'>
        <PhaseStep data={2} />
        
        {/* Help Cover letter */}
        <HelpCL_Small title="Education Section" desc="This is a page to let you give us your schholName , his location , your degree, fieldofstudy and other information . u cant contiue if you don't fill the boxes." />

        {/* Select Skiils */}
        <div className=' flex mt-7 lg:mt-12 justify-center sm:mx-1 md:mx-5  lg:mx-10'>
          <div className=' w-full lg:w-2/3 md:mt-0 lg:mt-2 text-center h-full pb-40   '>
              <h1 className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl tracking-wider mb-14'>
                  Your Education 
              </h1>

              {/* introduce his self 
                */}
              <SchoolForm onHandlerSetPersonnalInformation={setPersInfo} persInfo={persInfo} />

              <div className=' m-auto mt-10 h-0.5 w-4/5  md:w-3/4 bg-black opacity-20' />

              {/* Button back contine */}
              <ContinueCL next={"/cv/informations/langues"} last={"/coverLetter/templates"} disabled={disabledContinue} />


          </div>

            {/* Help Cover letter */}
            <HelpCL_Larg title="Education Section" desc="This is a page to let you give us your schholName , his location , your degree, fieldofstudy and other information . u cant contiue if you don't fill the boxes." />

        </div>
                
        

    </div>
  )
}


export default informations 