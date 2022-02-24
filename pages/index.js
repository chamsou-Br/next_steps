import Head from 'next/head'
import LoginPage from '../components/LoginPage'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import { FaMailBulk , FaLongArrowAltRight, FaPaypal, FaCrown, FaHandsHelping, FaFacebook, FaGoogle, FaTwitter, FaPinterest } from 'react-icons/fa';
import {MdAccountTree, MdGroup} from 'react-icons/md'
import { IoShareSocialSharp } from 'react-icons/io5';
// 4338CA 6366F1 3B82F6

 const Home = ()=> {
  return (
    <div className="z-50 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex w-full  md:mt-10 "> 
        <div className='w-full md:w-1/2  m-auto bg-homeIntro bg-cover py-24 lg:pl-16 pl-3  ' >
          <h1 className=' font-bold text-center text-4xl sm:text-6xl md:text-left xl:text-8xl lg:text-7xl md:text-5xl   text-indigo-500 mb-5' >Br Serviecs</h1>
          <p className=' text-center md:text-left lg:text-xl md:text-lg font-medium  mb-10 text-slate-500 tracking-wider '>The Smart way to create Cv , cover Letter a form and A lot of surprises are waiting for you.</p>
          <div className=' flex justify-center md:justify-start'>
          <button className=' flex mr-10 shadow-xl drop-shadow-3xl bg-indigo-700 text-white lg:px-7 px-5 py-3  font-semibold rounded-md '>
             <FaMailBulk size={22} className=' mr-2' /> Contact us
          </button>
          <button className=' flex lg:text-lg text-sx drop-shadow-3xl shadow-xl bg-indigo-700 text-white lg:px-7 px-5 py-3 font-semibold rounded-md '>
             <FaMailBulk size={22} className=' mr-2' /> Contact us
          </button>
          </div>
         
        </div>
        <div className=' w-0 md:w-1/2 m-auto   pr-10  '>
            <img src='/world.svg' className='' />
        </div>
      </div>
      
      <div className=' my-20 text-center  w-full  bg-black/[.05] py-7'>
            <h1 className=' text-indigo-600 font-bold text-3xl '>What we give you !</h1>
            <div className=' md:flex w-full mt-10'>
                  <div className='w-full md:w-1/3 px-5 sm:px-10 md:px-5 mt-10 md:mt-0 '>
                    <div className=' w-20 m-auto h-20 flex justify-center bg-indigo-600 rounded-full drop-shadow-3xl'>
                        <MdAccountTree size={28} color='#FFF' className=' m-auto' />
                    </div>
                    <h1 className=' font-semibold text-indigo-600 text-lg mt-2'>Free account </h1>
                    <p className=' text-xs text-slate-500 font-medium '>
                    For people and teams who want to create without limit. A colossal number of free fonts,
                    photos and templates to bring your creativity to life.
                    </p>
                  </div>

                  <div className=' md:w-1/3 w-full px-5 mt-10 md:mt-0'>
                    <div className=' w-20 m-auto h-20 flex justify-center bg-indigo-600 rounded-full drop-shadow-3xl'>
                        <FaPaypal size={28} color='#FFF' className=' m-auto' />
                    </div>
                    <h1 className=' font-semibold text-indigo-600 text-lg mt-2'>Pro account </h1>
                    <p className='  text-xs text-slate-500 font-medium '>
                    For people and teams who want to collaborate and grow their business.  Includes social
                    media programming, team templates, and other productivity tools.
                    </p>
                  </div>

                  <div className=' w-full md:w-1/3  px-5 mt-10 md:mt-0'>
                    <div className=' w-20  h-20 m-auto flex justify-center bg-indigo-600 rounded-full drop-shadow-3xl'>
                       <FaCrown size={28} color='#FFF' className=' m-auto' />
                    </div>
                    <h1 className=' font-semibold text-indigo-600 text-lg mt-2'>Enterprise account </h1>
                    <p className='  text-xs text-slate-500 font-medium '>
                    For large organizations looking for large-scale creation and communication tools. Simplify
                    the work of your teams with integrations of the tools they use on a daily basis.
                    </p>
                  </div>
            </div>
      </div>




      
      <div className=' flex w-full justify-around  relative mt-10 '>    
        <div className=' w-full md:w-1/2 text-xs lg:text-sm  m-auto bg-homeIntro bg-cover mx-10 md:ml-20 lg:ml-32 pl-3 '>
            <h1 className='font-bold text-center text-2xl  lg:text-4xl text-indigo-500 mb-5'>Let's create a CV</h1>
            <p className=' font-medium text-left text-slate-500 tracking-wider  '>
              Writing a CV is a tedious chore. Boring, confusing, time-consuming.
              With the our service, you’ll create a document that shows you at your best—fast.
              Get the job you want, not whatever’s on offer .
            </p>
            <div className='flex text-indigo-600 font-bold mt-4 text-lg cursor-pointer'>
                create CV <FaLongArrowAltRight size={28} color='#4338CA' className=' ml-5' />
            </div>
        </div>

        <div className=' w-0 md:w-1/2 h-auto     bg-cover'>
          <img src='/shape5_1.svg' className=' w-full h-auto' />
        </div>
      </div>

      <div className=' flex w-full  justify-around relative mt-10 '>
      <div className=' w-0 md:w-1/2 h-auto   bg-cover'>
          <img src='/shape5_2.svg' className=' w-full h-auto mx-10' />
        </div>    
        <div className=' w-full md:w-1/2 text-xs lg:text-sm  m-auto bg-homeIntro bg-cover mx-10 md:ml-20 lg:ml-32 pl-3 '>
            <h1 className='font-bold text-center text-2xl lg:text-4xl text-indigo-500 mb-5'>Cover Letter</h1>
            <p className=' font-medium text-left lg:pr-14 text-slate-500 tracking-wider '>
             Writing a cover letter feels like doing a homework assignment—it’s time-consuming,boring, and
             in the end, you copy someone else’sThe dreaded cover letter. You spend hours 
             second-guessing every word and then you give up. Not any more our service take over .
            </p>
            <div className='flex text-indigo-600 font-bold mt-4 cursor-pointer text-lg'>
                cover letter <FaLongArrowAltRight size={28} color='#4338CA' className=' ml-5' />
            </div>
        </div>
      </div>

      <div className=' flex w-full justify-around  relative mt-10   '>
        <div className='w-full md:w-1/2 text-xs lg:text-sm  m-auto bg-homeIntro bg-cover mx-10 md:ml-20 lg:ml-32 pl-3 '>
            <h1 className='font-bold text-center text-2xl lg:text-4xl text-indigo-500 mb-5'>Let's create a Form</h1>
            <p className=' font-medium text-left text-slate-500 tracking-wider '>
            Easily create surveys and polls to collect customer feedback,
            measure employee satisfaction, and organize team events.
            Quickly create quizzes to measure student knowledge, evaluate class,
            whatever’s our service will do it for you.
            </p>
            <div className='flex text-indigo-600 font-bold mt-4 cursor-pointer text-lg'>
                create Form <FaLongArrowAltRight size={28} color='#4338CA' className=' ml-5' />
            </div>
        </div>
        <div className=' w-0 md:w-1/2 h-auto bg-cover'>
          <img src='/shape5_3.svg' className=' w-full h-auto' />
        </div>
      </div>

      <div className=' flex my-2 text-center justify-center  w-full bg-black/[.05] py-7 mt-10'>
        <div className=' lg:w-1/2 md:w-7/12 w-full m-auto px-10 sm:px-20 md:px-10 lg:px-0 '>
              <div className=' flex h-24  w-full  lg:m-auto lg:w-3/4 xl:w-2/3  bg-indigo-600/[.2] rounded-lg '>
                <div className=' flex justify-center w-24 m-4  bg-indigo-600 rounded-md drop-shadow-3xl'>
                    <MdGroup size={32} color='#FFF' className=' m-auto' />
                </div>
                <div className=' text-left mt-4 pr-3'>
                  <h1 className=' font-bold text-lg '>Team folder</h1>
                  <p className=' text-xs font-medium text-gray-600'>
                    help you stay organized, keep your brand resources, and manage your content
                  </p>
                </div>
              </div>
              <br className=' hidden lg:block'/>

              <div className=' flex h-24  w-full  lg:m-auto  lg:w-3/4 xl:w-2/3  bg-indigo-600/[.2] rounded-lg mt-6 '>
                <div className=' flex justify-center w-24 m-4  bg-indigo-600 rounded-md drop-shadow-3xl'>
                    <IoShareSocialSharp size={32} color='#FFF' className=' m-auto' />
                </div>
                <div className=' text-left mt-4 pr-3'>
                  <h1 className=' font-bold text-lg '>Social media</h1>
                  <p className=' text-xs font-medium text-gray-600'>
                  Create, schedule and publish your social media posts directly from our services 
                  </p>
                </div>
              </div>
              <br className=' hidden lg:block'/>

              <div className=' flex h-24  w-full lg:m-auto  lg:w-3/4 xl:w-2/3 bg-indigo-600/[.2] rounded-lg mt-6 '>
                <div className=' flex justify-center w-24 m-4  bg-indigo-600 rounded-md drop-shadow-3xl'>
                    <FaHandsHelping size={32} color='#FFF' className=' m-auto' />
                </div>
                <div className=' text-left mt-4 pr-3'>
                  <h1 className=' font-bold text-lg '>Collaboration</h1>
                  <p className=' text-xs font-medium text-gray-600'>
                  Collaboration is the act of working or thinking together to achieve a goal
                  </p>
                </div>
              </div>
        </div>

        <div className=' w-0 lg:w-1/2 md:w-5/12 m-auto   '>
            <img src='/shape10.svg' className='' />
        </div>
      </div>

      <div className=' w-full h-auto flex bg-indigo-500 justify-evenly py-3 '>
        <div className=' flex m-auto'>
          <img
                  className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                // src='/favicon.ico'
                  alt=""
          />
          <h1 className=' hidden sm:block text-white font-bold text-2xl lg:text-3xl ml-5 '>StepsServices</h1>
        </div>
        <div className='text-white font-bold text-sm lg:text-lg ml-5 text-center m-auto '>
          <h1>© 2021 Tous droits réservés, Canva </h1>
          <h1 className=' cursor-pointer '>Politique de confidentialité | Conditions générales</h1>
        </div>




      </div>

      
      </div>
  )
}
export default Home