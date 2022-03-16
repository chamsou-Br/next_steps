import React, { useState } from 'react'

function AnotherWorkHistorySelected(props) {

  return (
    <div>
        <div>
            <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">title</label>
            <input className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-1.5 sm:py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                   value={props.isEdit != -1 ? props.title  : null} onChange={(e)=>props.setTitle(e.target.value)} />
        </div>
        <div className=' mt-3'>
            <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">Description</label>
            <textarea className=" outline-none w-full border h-28 border-gray-300 rounded-sm px-3 py-1.5 sm:py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                  value={props.isEdit != -1 ? props.desc  : null} onChange={(e)=>props.setDesc(e.target.value)} />
        </div>
       
    </div>
  )
}

export default AnotherWorkHistorySelected