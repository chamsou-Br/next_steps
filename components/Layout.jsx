import React, { useState }  from "react";
import Head from 'next/head';
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import classNames from "classnames";
import Footer from "./Footer";


const Layout = ({children , ToogleLoginPage , ToogleRegisterPage}) => {

    const [sidebarActive , setSidebar] = useState(false);
    const onToggleSideBar = () => {
        if (sidebarActive == true) {
            setSidebar(false)
        }else {
            setSidebar(true)
        }
    };


    return ( 
    <div className="root min-h-full relative" >
        <Footer />
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar onToggleSideBar={onToggleSideBar} ToogleLoginPage={ToogleLoginPage} ToogleRegisterPage={ToogleRegisterPage} />
        <div className="flex relative overflow-hidden">
            <Sidebar sidebarActive={sidebarActive}  />
            <div className={classNames(" w-full ",{
                    "animate-childrenOpen" : sidebarActive ,
                    "animate-childrenClose" : !sidebarActive
                    })} >
              {children}
            </div>
        </div>
    </div>
     );
}
 
export default Layout;