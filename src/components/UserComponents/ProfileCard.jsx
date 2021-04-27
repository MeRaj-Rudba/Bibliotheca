import React from "react";
import { Button } from "react-bootstrap";
import EditProfile from "./EditProfile";
import ProfileBook from "./ProfileBook";

const ProfileCard = (props) => {
    const{user,books,img,handleCloseEditProfile,handleShowEditProfile,handleSignOut,showEditProfile }=props;
  return (
    <>
      <div className="profile-page">
        {user ? (
          <div className="profile-card shadow">
            <div className="profile-top">
              <div className="profile-left">
                <div className="profile-card-img">
                  <img
                    className=" rounded-circle z-depth-2"
                    alt="100x100"
                    src={user.displayImage || img}
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
                  {user.name || user.displayName}
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
      </div>
      <EditProfile
        showEditProfile={showEditProfile}
        handleCloseEditProfile={handleCloseEditProfile}
        user={user}
      />
    </>
  );
};

export default ProfileCard;
