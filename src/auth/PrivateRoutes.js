import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.authState);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.email ? <Component {...props} /> : <Redirect to="/users/login" />
      }
    />
  );
};
