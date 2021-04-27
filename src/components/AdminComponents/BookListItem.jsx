import React, { useState } from "react";
import DeleteBook from "../modals/DeleteBook";
import EditBook from "../modals/EditBook";

const BookListItem = (props) => {
  const { book } = props;
  const { title, author, status, id } = book;
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

 
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <span className={`badge bg-${status ? "accent-2" : "accent-5"} my-badge`}>
            {status ? "Available" : "Not available"}
          </span>
        </td>
        <td>
          <button
            onClick={handleShowEdit}
            type="button"
            className="table-btn "
          >
            <i className="far fa-edit"></i>
          </button>
        </td>
        <td>
          <button
            onClick={handleShowDelete}
            type="button"
            className="table-btn "
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      <DeleteBook
        showDelete={showDelete}
        handleCloseDelete={handleCloseDelete}
        book={book}
      />
      <EditBook
        showEdit={showEdit}
        handleCloseEdit={handleCloseEdit}
        book={book}
      />
    </>
  );
};

export default BookListItem;
