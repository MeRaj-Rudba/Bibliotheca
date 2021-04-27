import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Auth/Fire";
const Header = (props) => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="shadow-sm  navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="home">
          <h4 className="logo-name my-link">Bibliotheca</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link my-link" aria-current="page" href="home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link my-link" href="admin">
                Admin
              </a>
            </li>
            {loading ? (
              <li className="nav-item">
                <a className="nav-link my-link" href="profile">
                  Initializing
                </a>
              </li>
            ) : (
              <></>
            )}
            {user ? (
              <li className="nav-item">
                <a className="nav-link my-link" href="profile">
                  {user.displayName}
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link my-link" href="signIn">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
