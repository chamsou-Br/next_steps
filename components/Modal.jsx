import { Button, Modal } from "react-bootstrap";
import React from "react";
import classNames from "classnames";
import IntroModalCL from "./CoverLetter/IntroModalCL";
const MyVerticallyCenteredModal = ({show,onHide,disabled,body,onHandler,intro}) => {
    return (

      

    <div className=" bg-black w-52 overflow-hidden">
      <Modal
        className="ModalCss"
        size="md"
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton closeVariant="white" className=" bg-blue-500 text-white" >
          <Modal.Title id="" className=" text-sm font-bold tracking-wider text-white">
           {intro}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  >
            {body}
        </Modal.Body>
        <Modal.Footer>
        <button disabled={disabled} onClick={onHandler}className={classNames(' bg-blue-500 text-white text-sm font-bold tracking-wider text-center px-8 lg:px-12 py-3 rounded-md ',{
                   "hover:bg-white   hover:border hover:text-blue-500 cursor-pointer" : !disabled ,
                   ' cursor-not-allowed ' : disabled
                    })}>
                  Continue
        </button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
  
export default MyVerticallyCenteredModal