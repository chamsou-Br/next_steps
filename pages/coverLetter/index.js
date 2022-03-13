import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddJob } from '../../Redux/FuncRedux/Func_NewCL';


function CoverLetterHome() {
    const router = useRouter();
    const newCL = useSelector(state => state.newCL);
    const dispatch = useDispatch(); 
  return (
    <div className=' min-h-screen'>
    <div className=' flex justify-center mt-12 flex-grow flex-shrink mb-2 '>
        <div className=" md:w-1/2 xl:w-2/5 mx-4 sm:mx-20 md:ml-12 lg:ml-16 xl:ml-24 " >
            <h1 className=' font-bold text-3xl lg:text-4xl xl:text-5xl tracking-wide text-gray-700 mb-6'>Let's get started</h1>
            <div className=' mb-4'>
                <h2 className=' text-blue-500 font-bold text-xl lg:text-2xl tracking-wide mb-2'>Select a Template</h2>
                <p className=' text-slate-700 font-semibold text-sm tracking-wider'>
                    we create deffirent template fot you ,just choose one and let's personalize and format your covver letter.
                </p>
            </div>
            <div className=' mb-4'>
                <h2 className=' text-blue-500 font-bold text-xl lg:text-2xl tracking-wide mb-2'>Enter your infotmation</h2>
                <p className=' text-slate-700 font-semibold text-sm tracking-wider'>
                    you should enter your skills ,Edication experience and others that you need to send a cover letter.
                </p>
            </div>
            <div>
                <h2 className=' text-blue-500 font-bold text-xl lg:text-2xl tracking-wide mb-2'>Download and print</h2>
                <p className=' text-slate-700 font-semibold text-sm tracking-wider'>
                    After All ,it's time to get your cover letter ,Your cover letter is ready to download.
                </p>
            </div>
            <div 
                 className=' mt-6 py-4 bg-blue-500 text-center text-white  rounded-lg hover:cursor-pointer hover:text-blue-500 hover:bg-white hover:border '
                 onClick={()=>router.push('coverLetter/templates')}>
                
                <span className=' text-lg font-bold tracking-wider '>Continue</span>
            </div>

            <p onClick={()=> dispatch(AddJob("IT","dev web"))} className='text-slate-600 font-semibold text-xs tracking-wider mt-6'>
                By clicking "Continue" ,you agree to our 
                <span className=' text-blue-500 font-bold hover:cursor-pointer hover:underline '> Terme and conditions </span>
                and <span className=' text-blue-500 font-bold hover:underline'>privace policy</span>
            </p>
        </div>
        <div onClick={()=> console.log(newCL, "chamsou")} className='w-0 md:w-1/2 xl:w-3/5 m-auto  '>
            <img className=' m-auto'  src='./coverletter.svg' />
        </div>
    </div>
    </div>
  )
}

export default CoverLetterHome