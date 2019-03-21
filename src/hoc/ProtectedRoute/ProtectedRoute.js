import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      false
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/home',
            state: { from: props.location }
          }} />
    )} />
  );
  export default ProtectedRoute;