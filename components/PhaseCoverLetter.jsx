import React from 'react'
import classNames from 'classnames'

function PhaseCoverLetter(props) {
  return (
    <div className=' mx-1 sm:mx-0 flex justify-center mt-3'>
        <div className=' flex text-center'>
            <div className={classNames('  font-semibold flex justify-center rounded-full w-5 h-5 text-center text-xs',{
                "bg-blue-500 text-white" : props.data > 0,
                " text-gray-500 border border-gray-500" : props.data < 1
            })}>
                <p className=' m-auto'>1</p>
            </div>
            <h3 select="select " className={classNames('sm:before:content-[attr(select)] pl-1 sm:pl-2 m-auto font-semibold tracking-wider text-xs sm:text-sm',{
                " text-gray-500 " : props.data < 1
            })}>
                Template
            </h3>
        </div>

        <div className={classNames(' h-1 w-7 sm:w-10  rounded-sm flex mx-1.5 sm:mx-2 mt-2.5 font-bold',{
            "bg-blue-500" : props.data > 0 ,
            " bg-gray-400" : props.data < 1
        })}  />

        <div className={classNames(' flex text-center')} >
            <div className={classNames('  font-semibold flex justify-center rounded-full w-5 h-5 text-center text-xs ',{
                "bg-blue-500 text-white" : props.data > 1,
                " text-gray-500 border border-gray-500" : props.data < 2
            })}>
                <p className=' m-auto'>2</p>
            </div>
            <h3 Your={"Your "} className={classNames('sm:before:content-[attr(Your)] pl-1 sm:pl-2 m-auto font-semibold tracking-wider text-xs sm:text-sm',{
                " text-gray-500 " : props.data < 2
            })} >Informaton</h3>
        </div>

        <div className={classNames(' h-1 w-7 sm:w-10  rounded-sm flex mx-1.5 sm:mx-2 mt-2.5 font-bold',{
            "bg-blue-500" : props.data > 1 ,
            " bg-gray-400" : props.data < 2
        })} />
        
        <div className=' flex text-center'>
            <div className={classNames('  font-semibold flex justify-center rounded-full w-5 h-5 text-center text-xs',{
                "bg-blue-500 text-white" : props.data > 2,
                " text-gray-500 border-2 border-gray-500" : props.data < 3
            })}>
                <p className=' m-auto'>3</p>
            </div>
            <h3 className={classNames(' pl-1 sm:pl-2 m-auto font-semibold tracking-wider text-xs sm:text-sm',{
                " text-gray-500 " : props.data < 3
            })}>Finalize</h3>
        </div>
    </div>
  )
}

export default PhaseCoverLetter