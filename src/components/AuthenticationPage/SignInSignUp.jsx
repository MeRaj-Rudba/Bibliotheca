import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { auth, db } from "../../Auth/Fire";
const SignInSignUp = (props) => {
  const [haveAccount, setHaveAccount] = useState(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const toggle = () => {
    setHaveAccount(!haveAccount);
  };
  const clearInput = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setErrorMsg("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Sign Up Successful!");
        user.updateProfile({
          displayName: username,
        });

        db.collection("user")
          .doc(user.uid)
          .set({
            name: username,
            email: user.email,
            uid: user.uid,
            displayImage: "",
            books: [],
            phone: "",
          })
          .then(() => {
            console.log("User Profile Created!");
          })
          .catch((error) => {
            console.log("Book adding failed ", error);
          });

        console.log(user);
        clearInput();
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);

        console.log(errorMessage);
        // ..
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Sign In Successful!");
        console.log(user);
        clearInput(); // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
        console.log(errorMessage);
      });
  };

  return (
    <div className="my-container-div">
      <Form className="my-form-div">
        {!haveAccount ? (
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username </Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="test"
              placeholder="Enter Username"
            />
          </Form.Group>
        ) : (
          <></>
        )}

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Text className="text-muted">{errorMsg}</Form.Text>
        <div className="login-btm">
          {haveAccount ? (
            <Button
              variant="primary"
              type="submit"
              className="btn my-theme-btn shadow "
              onClick={(e) => {
                handleSignIn(e);
              }}
            >
              Sign In
            </Button>
          ) : (
            <Button
              variant="primary"
              type="submit"
              className="btn my-theme-btn shadow "
              onClick={(e) => {
                handleSignUp(e);
              }}
            >
              Sign Up
            </Button>
          )}
        </div>
        {haveAccount ? (
          <p>
            Don't have an account?{" "}
            <span className="signIn-toggle" onClick={toggle}>
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span className="signIn-toggle" onClick={toggle}>
              Sign In
            </span>
          </p>
        )}
      </Form>
    </div>
  );
};

export default SignInSignUp;
