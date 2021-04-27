import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import { db } from '../../Auth/Fire';

const DeleteBook = (props) => {
    const{showDelete,handleCloseDelete,book}=props;
    const deleteBook=()=>{
      db.collection('books').doc(book.id).delete();
      handleCloseDelete();
    }
    
    return (
        <Modal
        show={showDelete}
        onHide={handleCloseDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are deleting <strong>{book.title} </strong> from the library</p>
         
        </Modal.Body>
        <Modal.Footer>
          
          <Button className="my-theme-btn shadow" onClick={deleteBook}>Delete</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default DeleteBook;