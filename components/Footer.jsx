import React from 'react'

function Footer() {
  return (
    <footer className=' absolute w-full bottom-0'>
        <div className='  bg-blue-500 text-white font-bold sm:tracking-widest text-xs sm:text-sm flex justify-center py-4'>
            <div className=' hover:underline cursor-pointer'>TERMS & CONDITIONS </div><span>&nbsp;|&nbsp;</span>
            <div className=' hover:underline cursor-pointer'> PRIVACY POLICY </div><span>&nbsp;|&nbsp; </span>
            <div className=' hover:underline cursor-pointer'> CONTACT US</div>
        </div>
    </footer>
  )
}

export default Footer