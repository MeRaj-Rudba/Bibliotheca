import React from "react";

const ProfileBook = (props) => {
  const { book } = props;
  return (
    <tr key={13}>
      <td className="table-data">{book.bookId}</td>
      <td className="table-data">{book.borrowedAt}</td>
      <td className="table-data">{book.dueDate}</td>

      <td className="table-data">
        <button type="button" className="table-btn ">
          <i className="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default ProfileBook;
