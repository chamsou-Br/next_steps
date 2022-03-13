import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function DropDownsSocialMedia(props) {
  return (
    <Menu as="div"   className=" relative inline-block text-left ">
      <div className='  w-24 sm:w-32 md:w-40  flex'>
        <Menu.Button disabled={props.disabled} className="inline-flex relative w-full  rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100  ">
          {props.title}
          <div className=' absolute right-3 top-3'>
             <ChevronDownIcon className=" ml-2 h-5 w-5 text-right" aria-hidden="true" />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items  className="origin-top-right absolute overflow-y-auto z-50  right-0 mt-2 w-28 font-bold rounded-md shadow-lg bg-white   ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
              {props.data.map((item,index) => {
                  return(
                    <Menu.Item key={index}>
                    {({ active }) => (
                      <a
                        href="#"
                        onClick={(e)=>{
                            e.preventDefault();
                            props.onHandlerClick(item);
                            
                        }}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-500',
                          'block text-center px-4 py-2 text-xs tracking-wider overflow-visible'
                        )}
                      >
                         {item}
                      </a>
                    )}
                  </Menu.Item>
                  )
              })}
           

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export default DropDownsSocialMedia