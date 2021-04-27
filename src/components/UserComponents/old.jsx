import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "react-bootstrap";
import { auth, db } from "../../Auth/Fire";
import ProfileBook from "./ProfileBook";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [books, setBooks] = useState([]);
  const [dp, setDp] = useState("");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);

  const [showEditProfile, setShowEditProfile] = useState(false);
  const handleCloseEditProfile = () => setShowEditProfile(false);
  const handleShowEditProfile = () => setShowEditProfile(true);

  const [user] = useAuthState(auth);
  const img =
    "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1";
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

  async function getUser() {
    const userRef = db.collection("user").doc(user.uid);
    const doc = await userRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    }  else {
        const item = [];
        item.push(doc.data());
  
        setUserData(item);
        const allBooks = [];
  
        console.log("Document data:", doc.data());
        doc.data().books.forEach((element) => {
          console.log("BookData:", element.bookId, element);
          allBooks.push(element);
        });
  
        setBooks(allBooks);
        setDp(doc.data().displayImage);
        setUsername(doc.data().name);
        setEmail(doc.data().email);
  
        setUserData(doc.data());
      }
  }
  useEffect(() => getUser(), []);

  return (
    <div className="profile-page">
      {user ? (
        <div className="profile-card shadow">
          <div className="profile-top">
            <div className="profile-left">
              <div className="profile-card-img">
                <img
                  className=" rounded-circle z-depth-2"
                  alt="100x100"
                  src={dp || img}
                  data-holder-rendered="true"
                />
              </div>
              <Button
                variant="primary"
                type="submit"
                className="btn my-theme-btn shadow profile-btn"
                onClick={handleShowEditProfile}
              >
                <i className="btn-icon fas fa-edit"></i>
                Edit Profile
              </Button>
            </div>
            <div className="profile-right">
              <p className="profile-text">
                <strong>Name: </strong>
                {username || user.displayName}
              </p>

              <p className="profile-text">
                <strong>Books: </strong>
                {books.length}
              </p>
              <Button
                variant="primary"
                type="submit"
                className="btn my-theme-btn shadow profile-btn"
                onClick={handleSignOut}
              >
                <i className="btn-icon fas fa-sign-out-alt"></i>
                Sign Out
              </Button>
            </div>
          </div>
          <div className="profile-details">
            {books ? (
              <div>
                <p>Book List</p>
                <table className="my-table  shadow-sm table table-hover ">
                  <thead className="">
                    <tr>
                      <th className="table-data" scope="col">
                        ID
                      </th>

                      <th className="table-data" scope="col">
                        Borrowed
                      </th>
                      <th className="table-data" scope="col">
                        Due{" "}
                      </th>

                      <th className="table-data" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <ProfileBook key={13} book={book} />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      <EditProfile
        showEditProfile={showEditProfile}
        handleCloseEditProfile={handleCloseEditProfile}
        user={userData}
      />
    </div>
  );
};

export default Profile;
