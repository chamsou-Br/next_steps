import React  from "react";
import Head from 'next/head';
import Navbar from "./navbar";
import Sidebar from "./sidebar";


const Layout = ({children}) => {


    return ( 
    <div className="root min-h-full relative bg-hero-back bg-cover" >
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Sidebar />
        {children}

    </div>
     );
}
 
export default Layout;