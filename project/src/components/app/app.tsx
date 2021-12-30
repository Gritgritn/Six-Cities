import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreenNotLogged from '../property-screen-not-logged/property-screen-not-logged';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import NotFound404 from '../NotFound404/NotFound404';
import { offers } from '../../mocks/offer';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage offers={offers} />
        </Route>
        <Route path={AppRoute.Login} exact component={LoginScreen} />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route path={AppRoute.Offer} exact>
          <PropertyScreenNotLogged />
        </Route>
        <Route
          render={(props) => (
            <NotFound404 />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
