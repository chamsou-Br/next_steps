import classNames from 'classnames';
import { useState } from 'react';
import Layout from '../components/Layout'
import LoginPage from '../components/LoginPage'
import RegistrPage from '../components/Registre'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [registerPage, setregistrePage] = useState(true);
  const [loginPage, setloginPage] = useState(false)

  return(
    <>
    <div className={classNames(' relative ', {
      "blur-sm" : loginPage || registerPage ,
    })}>
    <Layout >
        <Component {...pageProps} />
    </Layout>
    {( loginPage || registerPage ) && <div className=' w-full h-full absolute top-0 left-0 bg-black opacity-30'></div>}
    </div>
    {loginPage && <LoginPage />}
    {registerPage && <RegistrPage /> }
    </>
  ) 
}

export default MyApp
