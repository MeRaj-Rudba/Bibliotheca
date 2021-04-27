import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Auth/Fire";

function PrivateRoute({ children, ...rest }) {
  const [user] = useAuthState(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
