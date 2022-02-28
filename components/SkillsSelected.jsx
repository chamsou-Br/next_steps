import classNames from 'classnames'
import React, { useState } from 'react'
import Scrollbar from 'react-scrollbars-custom'
import Checkbox from './checkbox'

function SkillsSelected(props) {

  return (
    <div className=' max-h-80 overflow-y-auto'>
      <Scrollbar style={{ height : 240 , width : 'auto'}} >
        {props.data.map((item , index) => {
          return(
            <div key={index} onClick={()=>props.onSelect(item.type)} className={classNames("flex mb-4 hover:text-blue-500 ",{
                'text-blue-500' : props.skillsSelected.indexOf(item.type) != -1,
                'text-gray-500' : props.skillsSelected.indexOf(item.type) == -1
            })} >
              <Checkbox checked={props.skillsSelected.indexOf(item.type) != -1}  />
              <h1 className=' cursor-pointer text-sm font-bold  tracking-wider ml-4 '>{item.type}</h1>
            </div>
        )})}
      </Scrollbar>


    </div>
  )
}

export default SkillsSelected