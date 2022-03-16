import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import Scrollbar from 'react-scrollbars-custom'
import Checkbox from '../CoverLetter/checkbox';

function LanguagesCVselected(props) {

  const [hover,setHover] = useState(-1);
  const [skillsselected , setSkillsSelected] = useState(props.skillsSelected.map(item => item.language ))
  useEffect(()=>{
    setSkillsSelected(props.skillsSelected.map(item => item.language))
  },[props.skillsSelected])
    

  return (

    <div className=' max-h-80 overflow-y-auto'>
      <Scrollbar style={{ height : 240 , width : 'auto'}} >
        {props.data.map((item , index) => {
          const elem = item
          return(
            <div onMouseEnter={()=>setHover(skillsselected.length < 4 ? index : -1)} onMouseLeave={()=>setHover(-1)} key={index} onClick={()=> {props.onSelect(skillsselected,elem);} }
                 className={classNames("flex mb-4    ",{
                "hover:text-blue-500 hover:border-blue-500 cursor-pointer" : skillsselected.length < 4 || skillsselected.indexOf(elem) != -1 ,
                'text-blue-500' : skillsselected.indexOf(elem) != -1,
                'text-gray-500' : skillsselected.indexOf(elem) == -1,
                ' opacity-50' :   skillsselected.length == props.max && skillsselected.indexOf(elem) == -1
            })} >
              <Checkbox item={index} hover={hover} disabled={skillsselected.length == 4} checked={skillsselected.indexOf(elem) != -1}  />
              <h1 className='  text-sm font-bold  tracking-wider ml-4 '>{elem}</h1>
            </div>
        )})}
      </Scrollbar>


    </div>
  )
}


export default LanguagesCVselected