import React from 'react'
import Image from 'next/image'
import {FaUser} from "react-icons/fa"
import { IoFileTrayOutline, IoFolderOutline, IoHomeOutline, IoPeopleOutline, IoSettingsOutline, IoShareOutline, IoTrashOutline , } from "react-icons/io5"
import classNames from 'classnames'

const sidebarLinks = [
    {title : "Home" , icon : <IoHomeOutline size={20} color='#000000CC'/>},
    {title : "Settings" , icon : <IoSettingsOutline size={20} color='#000000CC' /> },
    {title : "Your repository" , icon : <IoFolderOutline size={20} color='#000000CC'/> },
    {title : "Your works" , icon : <IoFileTrayOutline  size={20} color='#000000CC'/>},
    {title : "Groups" , icon : <IoPeopleOutline size={20} color='#000000CC' />},
    {title : "Pannier" , icon : <IoTrashOutline size={20} color='#000000CC' /> },
    {title : "Share with you" , icon : <IoShareOutline size={20} color='#000000CC' /> }
]


function Sidebar(props) {
    return (
        <div className={classNames("hidden fixed md:block bg-white w-30 pt-3   overflow-x-hidden overflow-y-auto h-screen",{
            " animate-sidebarOpen pl-7" : props.sidebarActive == true ,
            " animate-sidebarClose" : props.sidebarActive == false,
        })}>

            {/* USER INFORMATION */}
            <div className='flex'>
                <div className="mr-5">
                      <Image src="/chamsou.jpg" width="40" height="40" className=" rounded-full"  />
                </div>
                <div className='block '>
                    <h1 className=" text-sm font-semibold mb-1 overflow-hidden">{//"Club of chamseddine".substring(0,12)}.. 
                    }
                        chamseddine 
                    </h1>
                    <div className="flex">
                          <p className=" text-xs  font-bold ">Gratuit</p>
                          <button className='pl-2 pr-1'>
                              <FaUser size={12} color='#00000099' />
                          </button>
                          <p className=" text-xs text-black2 font-bold">1</p>
                          
                    </div>
                    
                </div>
            </div>
            <hr className='mt-2 mr-7 mb-4' />

            {sidebarLinks.map((link,index) => {
                return (
                    <div key={index} className="flex mb-6">
                        <button className='mr-4'>
                            {link.icon}
                        </button>
                        <h5 className=' text-sm tracking-wider'>
                            {link.title}
                        </h5>
                    </div>
                )
            })}

            <div className='flex'>

            </div>
        </div>
    )
}

export default Sidebar
