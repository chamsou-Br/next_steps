import React from 'react'

function CoverLetterHome() {
  return (
    <div className=' flex justify-center mt-12'>
        <div className=" w-1/3 ml-24 " >
            <h1 className=' font-bold text-5xl tracking-wider text-gray-700 mb-6'>Let's get started</h1>
            <div className=' mb-4'>
                <h2 className=' text-blue-500 font-bold text-2xl tracking-wide mb-2'>Enter your infotmation</h2>
                <p className=' text-slate-700 font-semibold text-sm tracking-wider'>
                    you should enter your skills ,Edication experience and others that you need to send a cover letter.
                </p>
            </div>
            <div className=' mb-4'>
                <h2 className=' text-blue-500 font-bold text-2xl tracking-wide mb-2'>Select a Template</h2>
                <p className=' text-slate-700 font-semibold text-sm tracking-wider'>
                    we create deffirent template fot you ,just choose one and let's personalize and format your covver letter.
                </p>
            </div>
            <div>
                <h2 className=' text-blue-500 font-bold text-2xl tracking-wide mb-2'>Download and print</h2>
                <p className=' text-slate-700 font-semibold text-sm tracking-wider'>
                    After All ,it's time to get your cover letter ,Your cover letter is ready to download.
                </p>
            </div>
            <div className=' mt-6 py-4 bg-blue-500 text-center rounded-lg'>
                <span className=' text-lg font-bold text-white tracking-wider'>Continue</span>
            </div>

            <p className='text-slate-600 font-semibold text-xs tracking-wider mt-6'>
                By clicking "Continue" ,you agree to our <span className=' text-blue-500 font-bold'>Terme and conditions </span>
                and <span className=' text-blue-500 font-bold'>privace policy</span>
            </p>
        </div>
        <div className=' w-2/3 m-auto  '>
            <img className=' m-auto'  src='./coverletter.svg' />
        </div>



    </div>
  )
}

export default CoverLetterHome