import classNames from 'classnames';
import { useState } from 'react';
import Layout from '../components/Layout'
import LoginPage from '../components/LoginPage'
import RegistrPage from '../components/Registre'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [registerPage, setregistrePage] = useState(false);
  const [loginPage, setloginPage] = useState(false)

  const ToogleLoginPage = () => {
    if (loginPage) setloginPage(false)
    else setloginPage(true)
  }
  const ToogleRegisterPage = () => {
    if (registerPage) setregistrePage(false)
    else setregistrePage(true)
  }
  const onScrollLoginRegisterPage = () => {
    if (loginPage && !registerPage) {
      setloginPage(false);
      setregistrePage(true)
    }
    else {
      setregistrePage(false);
      setloginPage(true)
    }
  }

  return(
    <>
    <div className={classNames(' relative ', {
      "blur-sm" : loginPage || registerPage ,
    })}>
    <Layout ToogleLoginPage={ToogleLoginPage} ToogleRegisterPage={ToogleRegisterPage} >
        <Component {...pageProps} />
    </Layout>
    {( loginPage || registerPage ) && <div className=' w-full h-full absolute top-0 left-0 bg-black opacity-30'></div>}
    </div>
    {loginPage && <LoginPage ToogleLoginPage={ToogleLoginPage} onScrollLoginRegisterPage={onScrollLoginRegisterPage}  />}
    {registerPage && <RegistrPage ToogleRegisterPage={ToogleRegisterPage} onScrollLoginRegisterPage={onScrollLoginRegisterPage} /> }
    </>
  ) 
}

export default MyApp
