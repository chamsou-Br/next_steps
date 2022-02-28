import React from 'react'
import Scrollbar from 'react-scrollbars-custom'

function SkillsSelected(props) {
  return (
    <div className=' max-h-80 overflow-y-auto'>
      <Scrollbar style={{ height : 240 , width : 'auto'}} >
        {props.data.map((item , index) => {
          return(
       <div class="form-check">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3"/>
    </div>
          )
        })}
     
      </Scrollbar>


    </div>
  )
}

export default SkillsSelected