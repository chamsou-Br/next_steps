import React from 'react'
import { FaGooglePlusG,FaGoogle } from 'react-icons/fa'
import Link from 'next/link'

function LoginPage() {
    return (
        <div className=' h-3/4 w-45/100 bg-white shadow-md  fixed top-12.5/100 left-27.5/100 rounded-md flex '>
                <div className=' w-1/2 text-center px-2 py-6'>
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
                    
                    <p className='px-3 mt-4 text-xs  decoration-1 hover:underline text-slate-500 tracking-wide font-bold cursor-pointer'>
                            you have not an account !
                    </p>
                    

                    

                </div>
                <div className="w-1/2 bg-login bg-cover rounded-tr-md rounded-br-md ">
                </div>
        </div>
    )
}

export default LoginPage
