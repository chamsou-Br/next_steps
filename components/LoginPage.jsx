import React from 'react'
import { FaGooglePlusG,FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { IoClose } from 'react-icons/io5'

function LoginPage({ToogleLoginPage,onScrollLoginRegisterPage}) {
    return (
        <div className=' absolute z-40 top-0 left-0 w-full h-full  flex justify-center '>
        <div className=' h-loginMDH md:w-loginMDW  w-80   bg-white shadow-md  fixed z-50 top-12.5/100   rounded-md flex  '>
                <div className=' md:w-1/2 w-full  text-center px-2 py-6 relative'>
                    <h1 className=' text-xl font-bold'>
                        Connecter or register in secondes
                    </h1>
                    <p className=" px-4 mt-2 text-sm text-slate-500 tracking-wide">
                        Welcom ,use your amail or google service to continue with us
                    </p>
                    <form className=' px-4 mt-6'>
                        <input className=' w-full mb-3 px-2 py-2 text-sm border focus:border-2  focus:border-indigo-600 outline-none border-gray-300 hover:border-gray-500   rounded-sm' 
                               placeholder='firstname@exemple.com' type="email"  />
                        <input className='w-full mb-3 px-2 py-2 text-sm border focus:border-2   focus:border-indigo-600 outline-none border-gray-300 hover:border-gray-500 rounded-sm' 
                               placeholder='--------' type="password"  />
                        <input className=' cursor-pointer w-full mb-4 px-2 py-2 font-semibold text-sm outline-none bg-indigo-600 hover:bg-indigo-500 text-white  rounded-sm'
                               type="submit"    value="continues with email" />
                               <hr className='   h-1' />
                        <div className='relative '>
                              <input className=' cursor-pointer w-full mt-3 px-2 py-2 font-semibold text-sm outline-none bg-red-600 hover:bg-red-500 text-white  rounded-sm'
                                     type="submit"    value="continues with Google" />
                               <FaGoogle size={19} className=' absolute top-5 left-2' color='#FFF' />
                        </div>
                       
                    </form>

                    <p className='px-3 mt-4 text-xs text-slate-500 tracking-wide '>
                         By continuing, you accept <Link  href="/" ><span className='hover:underline font-bold cursor-pointer'>the terms and conditions </span></Link>
                         of our services. Read our <Link href="/" ><span className='hover:underline font-bold cursor-pointer'>privacy policy</span></Link>.
                    </p>
                    
                    <p className='px-3 mt-4 text-xs  decoration-1 hover:underline text-slate-500 tracking-wide font-bold cursor-pointer'
                       onClick={()=>onScrollLoginRegisterPage()}>
                            you have not an account !
                    </p>
                </div>

                <div className="md:w-1/2 w-0   bg-login relative bg-cover rounded-tr-md rounded-br-md ">
                  <div className=' flex cursor-pointer justify-center p-1 md:top-0 md:-right-8 top-1 right-1 absolute bg-black  rounded-full w-6 h-6  z-50'
                       onClick={() => ToogleLoginPage()}>
                      <IoClose className=' bg-none' size={16} color='#FFF' />
                  </div>
                </div>
        </div>
        </div>
    )
}

export default LoginPage
