import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { db } from "../../Auth/Fire";

const EditProfile = (props) => {
  const { showEditProfile, handleCloseEditProfile, user } = props;
  

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [displayImage, setDisplayImage] = useState(user.displayImage);

  const updatedUser = {
    uid: user.uid,
    books: user.books,
    displayImage: displayImage,
    name: name,
    email: user.email,
    phone: phone,
  };
  const clearAddInput = () => {
    setName("");
    
    setPhone("");
    setDisplayImage("");

    console.log("Input Cleared!");
  };

  const handleUpdatedUser = () => {
    const confirm = window.confirm(`Are you sure about the edit?`);
    if (confirm) {
      updatedUser.name = name;
      updatedUser.phone = phone;
      updatedUser.displayImage = displayImage;

      db.collection("user")
        .doc(updatedUser.uid)
        .set(updatedUser)
        .then(() => {
          console.log("You have edited", updatedUser);
          clearAddInput();
          handleCloseEditProfile();
        })
        .catch((error) => {
          console.log("Profile Edit failed ", error);
        });
    } else {
      console.log(`You Refused To Edit Your Profile`);
    }
  };

  if(user){
    return (
        <Modal
          show={showEditProfile}
          onHide={handleCloseEditProfile}
          backdrop="static"
          keyboard={false}
          className="shadow p-3"
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              
    
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="displayImage" className="form-label">
                  Profile Picture
                </label>
                <input
                  value={displayImage}
                  onChange={(e) => setDisplayImage(e.target.value)}
                  type="text"
                  className="form-control"
                  id="displayImage"
                  placeholder="Profile Picture"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={handleUpdatedUser}
              type="submit"
              className="btn my-theme-btn shadow "
            >
              <i className="btn-icon fas fa-save"></i>
              Save Edit
            </button>
          </Modal.Footer>
        </Modal>
      );
  }
  else
  return(<p>Ooppps</p>)
};

export default EditProfile;
