import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import NotFound404 from '../NotFound404/NotFound404';
import { offers } from '../../mocks/offer';
import { reviews } from '../../mocks/reviews';


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
          render={() => <FavoritesScreen offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route path={AppRoute.Offer} exact>
          <PropertyScreen offer={offers[3]} offers={offers} reviews={reviews}/>
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
