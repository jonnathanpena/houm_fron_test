import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoadingScreen from '../components/LoadingScreen/LoadingScreen';

import routes from './routerList';

const Routes = () => {
  return (
    <Router>
      <Suspense
        fallback={(
          <LoadingScreen
            sx={{
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed',
            }}
          />
        )}
      >
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={ route.exact }
              render={(props) => (
                <route.layout>
                  <route.component {...props} />
                </route.layout>
              )}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
