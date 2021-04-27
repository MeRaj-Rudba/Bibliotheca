import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInSignUp from "./components/AuthenticationPage/SignInSignUp";
import Profile from "./components/UserComponents/Profile";
import PrivateRoute from "./providers/ProtectedRoute";
import { auth } from "./Auth/Fire";

function App() {
  const [user] = useAuthState(auth);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>

        <Route path="/signIn">
          {user ? <Redirect to="/profile" /> : <SignInSignUp />}
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
