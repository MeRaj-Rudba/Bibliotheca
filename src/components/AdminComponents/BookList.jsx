import React from "react";
import { db } from "../../Auth/Fire";
import BookListItem from "./BookListItem";
import { useCollection } from "react-firebase-hooks/firestore";
import SpinLoader from "../SpinLoader";
const BookList = () => {
  const [value, loading, error] = useCollection(db.collection("books").orderBy('title'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <section className=" book-list">
      {loading ? (
        <SpinLoader />
      ) : (
        <table className="my-table  shadow-sm table table-hover ">
          <thead className="">
            <tr>
              <th className="first-th" scope="col">
                ID
              </th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}

            {value &&
              value.docs.map((doc) => (
                <BookListItem book={doc.data()} key={doc.id} />
              ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default BookList;
