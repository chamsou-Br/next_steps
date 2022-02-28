import { Button, Modal } from "react-bootstrap";
import React from "react";
import classNames from "classnames";
const MyVerticallyCenteredModal = (props) => {
    return (
    <div className=" bg-black w-52 overflow-hidden">
      <Modal
        
        className="ModalCss"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton closeVariant="white" className=" bg-blue-500 text-white" >
          <Modal.Title id="" className=" text-sm font-bold tracking-wider text-white">
            Select skills
            { props.skillsSelected.length == 5 ? (
              <p className=" text-sx text-white tracking-wide font-meduim">You select nombre maximum of skills</p>
            )  : null} 
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  >
            {props.body}
        </Modal.Body>
        <Modal.Footer>
        <button onClick={props.onHandler}className={classNames(' bg-blue-500 text-white text-sm font-bold tracking-wider text-center px-8 lg:px-12 py-3 rounded-md ',{
                   "hover:bg-white   hover:border hover:text-blue-500 cursor-pointer" : props.skillsSelected.length > 0 ,
                    })}>
                  Continue
        </button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
  
export default MyVerticallyCenteredModal