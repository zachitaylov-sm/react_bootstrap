import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BsXCircle } from "react-icons/bs";

//export default function ModalDialog(buttonText, headerText, bodyText) {
  export default function ModalDialog(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>  
        <Button variant="primary" onClick={handleShow}>          
          {props.buttonText}
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.headerText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.bodyText}</Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" onClick={handleClose}>
              <BsXCircle style={{color: "red"}} />{' '}
              Закрыть
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
}