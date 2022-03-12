import classNames from 'classnames'
import React, { useState } from 'react'
import Scrollbar from 'react-scrollbars-custom'
import Checkbox from '../CoverLetter/checkbox';

function SkillsCVSelected(props) {

  const [hover,setHover] = useState(-1);
    

  return (

    <div className=' max-h-80 overflow-y-auto'>
      <Scrollbar style={{ height : 240 , width : 'auto'}} >
        {props.data.map((item , index) => {
          const elem = item.type ? item.type : item
          return(
            <div onMouseEnter={()=>setHover(props.skillsSelected.length < 5 ?index : -1)} onMouseLeave={()=>setHover(-1)} key={index} onClick={()=>  props.onSelect(elem) }
                 className={classNames("flex mb-4    ",{
                "hover:text-blue-500 hover:border-blue-500 cursor-pointer" : props.skillsSelected.length < 5 || props.skillsSelected.indexOf(elem) != -1 ,
                'text-blue-500' : props.skillsSelected.indexOf(elem) != -1,
                'text-gray-500' : props.skillsSelected.indexOf(elem) == -1,
                ' opacity-50' :   props.skillsSelected.length == props.max && props.skillsSelected.indexOf(elem) == -1
            })} >
              <Checkbox item={index} hover={hover} disabled={props.skillsSelected.length == 5} checked={props.skillsSelected.indexOf(elem) != -1}  />
              <h1 className='  text-sm font-bold  tracking-wider ml-4 '>{elem}</h1>
            </div>
        )})}
      </Scrollbar>


    </div>
  )
}

export default SkillsCVSelected