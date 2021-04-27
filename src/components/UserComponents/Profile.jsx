import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Auth/Fire";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const [books, setBooks] = useState([]);
  const [profile, setProfile] = useState({});
  const [users, setUsers] = useState([]);

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
    } else {
      const allBooks = [];
      const allUsers = [];
      //console.log("Document data:", doc.data());
      allUsers.push(doc.data());
      const userProfile = {
        name: doc.data().name,
        email: doc.data().email,
        phone: doc.data().phone,
        displayImage: doc.data().displayImage,
        books: doc.data().books,
        uid: doc.data().uid,
      };
      setProfile(userProfile);
      setUsers(allUsers);
      //console.log("Profile", profile);

      //console.log("User Profile", userProfile);

      doc.data().books.forEach((element) => {
        //console.log("BookData:", element.bookId, element);
        allBooks.push(element);
      });

      setBooks(allBooks);
    }
  }
  useEffect(() => getUser(), []);

  return (
    <>
      {users.map((userData) => (
        <ProfileCard
          key={11}
          user={userData}
          books={books}
          img={img}
          handleCloseEditProfile={handleCloseEditProfile}
          handleShowEditProfile={handleShowEditProfile}
          handleSignOut={handleSignOut}
          showEditProfile={showEditProfile}
        />
      ))}
    </>
  );
};

export default Profile;
