import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { db } from "../../Auth/Fire";
const EditBook = (props) => {
  const { showEdit, handleCloseEdit, book } = props;

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [img, setImg] = useState(book.img);
  const [isbn, setIsbn] = useState(book.isbn);


  const editBook = {
    author: author,
    genre: genre,
    id: book.id,
    img:img,
    isbn:isbn,
    status: book.status,
    
  };
  const clearAddInput = () => {
    setTitle("");
    setAuthor("");
    setGenre("");
    setImg("");
    setIsbn("");

    console.log("Input Cleared!");
  };

  const handleEditBook = () => {
    const confirm = window.confirm(`Do you really want to add this book?`);
    if (confirm) {
      
      editBook.author = author;
      editBook.genre = genre;
      editBook.img = img;
      editBook.isbn = isbn;
      editBook.title = title;

      db.collection("books")
      .doc(editBook.id)
      .set(editBook)
      .then(() => {
        console.log("You have edited", editBook);
        clearAddInput();
        handleCloseEdit();
      })
      .catch(error => {
        console.log("Book Edit failed ",error);
      });
    } else {
      console.log(`You Refused To Edit the book!`);
    }
  };

  return (
    <Modal
      show={showEdit}
      onHide={handleCloseEdit}
      backdrop="static"
      keyboard={false}
      className="shadow p-3"
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card-body">
          
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              id="title"
              placeholder="Book Title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              className="form-control"
              id="author"
              placeholder="Book Author"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <input
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              type="text"
              className="form-control"
              id="genre"
              placeholder="Genre"
            />
          </div>
          <div className="mb-3">
                <label htmlFor="img" className="form-label">
                  Image Url
                </label>
                <input
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  type="text"
                  className="form-control"
                  id="img"
                  placeholder="Image Url"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="isbn" className="form-label">
                  ISBN
                </label>
                <input
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  type="text"
                  className="form-control"
                  id="isbn"
                  placeholder="ISBN"
                />
              </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleEditBook} type="submit" className="btn my-theme-btn shadow ">
          Save Edit
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditBook;
